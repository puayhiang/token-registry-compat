import { TitleEscrowFactory as V2TitleEscrowFactory } from "@govtechsg/token-registry-v2";
import { TitleEscrowCloneableFactory as V3TitleEscrowFactory } from "@govtechsg/token-registry-v3";
import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { TitleEscrow } from "./TitleEscrow";
import { connectToTitleEscrow, TitleEscrowVersion, TokenRegistryVersion } from "../utils";
import { TitleEscrowCompat } from "./TitleEscrowCompat";


 export type DeployTitleEscrowType = {
  tokenRegistry?: string;
  beneficiary?: string;
  holder?: string;
  titleEscrowFactoryAddress?: string;
  version?: TitleEscrowVersion;
  overrides?: Overrides;
}




export class TitleEscrowFactory {

  V2_CREATOR_CONTRACTS: { [network: string]: string } = {
    1: "0x907A4D491A09D59Bcb5dC38eeb9d121ac47237F1",
    3: "0xB0dE5E22bAc12820b6dbF6f63287B1ec44026c83",
    4: "0xa51B8dAC076d5aC80507041146AC769542aAe195",
  };

  static address: string;
  static version: TitleEscrowVersion;
  static defaultVersion: TitleEscrowVersion.V3;
  static defaultFactory: typeof V3TitleEscrowFactory;
  escrowFactory!: V3TitleEscrowFactory;
  signer!: Signer;

  constructor(signer?: Signer) {
    if (signer !== undefined) {
      this.signer = signer;
    }
  }

  checkSigner(): void {
    if (typeof this.signer === "undefined") {
      throw new Error("Signer unintialized before call");
    }
  }

  checkValidV2Deploy(_tokenRegistry?: string, _beneficiary?: string, _holder?: string, _titleEscrowFactoryAddress?: string){
    if(typeof _tokenRegistry !== 'string'){
      throw new Error("Invalid Token Registry");
    }
    if(typeof _beneficiary !== 'string'){
      throw new Error("Invalid beneficiary");
    }
    if(typeof _holder !== 'string'){
      throw new Error("Invalid holder");
    }
    if(typeof _titleEscrowFactoryAddress !== 'string'){
      throw new Error("Invalid titleEscrowFactoryAddress");
    }
  }



  async deployV2(_tokenRegistry?: string, _beneficiary?: string, _holder?: string, _titleEscrowFactoryAddress?: string, overrides?: Overrides): Promise<TitleEscrowCompat> {
    if(typeof _titleEscrowFactoryAddress === 'undefined'){
      const chainId = await this.signer.getChainId();
      _titleEscrowFactoryAddress = this.V2_CREATOR_CONTRACTS[chainId];
    }
    this.checkValidV2Deploy(_tokenRegistry, _beneficiary, _holder, _titleEscrowFactoryAddress);
    const V2FactoryInstance = await new V2TitleEscrowFactory(this.signer);
    return V2FactoryInstance.deploy(_tokenRegistry!, _beneficiary!, _holder!, _titleEscrowFactoryAddress!, overrides);
  }



  async deploy({tokenRegistry, beneficiary, holder, titleEscrowFactoryAddress, version, overrides}: DeployTitleEscrowType): Promise<TitleEscrow> {
    this.checkSigner();
    if(version === TitleEscrowVersion.V3){
      throw new Error("Title Escrow V3 uses internal deployment of tokens")
    }else if(version === TitleEscrowVersion.V2){

      const v2TitleEscrowCompat: TitleEscrowCompat = await this.deployV2(tokenRegistry, beneficiary, holder, titleEscrowFactoryAddress, overrides);
      const instance = new TitleEscrow(v2TitleEscrowCompat, TitleEscrowVersion.V2);
      return instance;
    }else{
      throw new Error("Unsupported Title Escrow Version");
    }
  }

  getDeployTransaction(
    overrides?: Overrides
  ): TransactionRequest {
    this.checkSigner();
    return this.escrowFactory.getDeployTransaction(overrides);
  }

  connect(signer: Signer): TitleEscrowFactory {
    this.signer = signer;
    this.escrowFactory = new TitleEscrowFactory.defaultFactory(signer);
    return this;
  }

  static async connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Promise<TitleEscrow> {
    this.address = address;
    const registry = await connectToTitleEscrow(
      TitleEscrowFactory.address,
      signerOrProvider
    );
    return registry as TitleEscrow;
  }

  static createInterface() {
    return this.defaultFactory.createInterface();
  }
}
