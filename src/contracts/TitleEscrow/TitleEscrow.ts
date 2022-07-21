import { Provider } from "@ethersproject/abstract-provider";
import {
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
} from "ethers";
import { connectToTitleEscrow, TitleEscrowVersion, TokenRegistryVersion } from "../utils";
import { TitleEscrowCompat } from "./TitleEscrowCompat";
import { Listener } from "@ethersproject/abstract-provider";
import { TypedEvent, TypedEventFilter, TypedListener } from "../common";

import { TitleEscrow as V2TitleEscrow } from "@govtechsg/token-registry-v2";
import { TitleEscrowCloneable as V3TitleEscrow } from "@govtechsg/token-registry-v3";

export interface TitleEscrowInterface {

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TitleEscrowInterface;

  _tokenId(overrides?: CallOverrides): Promise<BigNumber>;

  approveNewOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveNewTransferTargets(
    newBeneficiary: string,
    newHolder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approvedBeneficiary(overrides?: CallOverrides): Promise<string>;

  approvedHolder(overrides?: CallOverrides): Promise<string>;

  approvedOwner(overrides?: CallOverrides): Promise<string>;

  beneficiary(overrides?: CallOverrides): Promise<string>;

  changeHolder(
    newHolder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  holder(overrides?: CallOverrides): Promise<string>;

  onERC721Received(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  status(overrides?: CallOverrides): Promise<number>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  titleEscrowFactory(overrides?: CallOverrides): Promise<string>;

  tokenRegistry(overrides?: CallOverrides): Promise<string>;

  transferTo(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferToNewEscrow(
    newBeneficiary: string,
    newHolder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;


}

export class TitleEscrow {
  titleEscrow!: TitleEscrowCompat;
  version!: TitleEscrowVersion;

  constructor(titleEscrow: TitleEscrowCompat, version: TitleEscrowVersion){
    if (version == TitleEscrowVersion.V2) {
      this.titleEscrow = titleEscrow as V2TitleEscrow;
    } else if (version === TitleEscrowVersion.V3) {
      this.titleEscrow = titleEscrow as V3TitleEscrow;
    } else if (version === TitleEscrowVersion.INVALID) {
      throw new Error("Invalid Title Escrow Contract");
    } else {
      throw new Error("Unsupported Title Escrow Version");
    }
    this.version = version;
    this.initializeRawProperties();
  }

  // listeners<EventArgsArray extends Array<any>, EventArgsObject>(
  //   eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  // ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  // off<EventArgsArray extends Array<any>, EventArgsObject>(
  //   eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  //   listener: TypedListener<EventArgsArray, EventArgsObject>
  // ): this;
  // on<EventArgsArray extends Array<any>, EventArgsObject>(
  //   eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  //   listener: TypedListener<EventArgsArray, EventArgsObject>
  // ): this;
  // once<EventArgsArray extends Array<any>, EventArgsObject>(
  //   eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  //   listener: TypedListener<EventArgsArray, EventArgsObject>
  // ): this;
  // removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
  //   eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  //   listener: TypedListener<EventArgsArray, EventArgsObject>
  // ): this;
  // removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
  //   eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  // ): this;

  // listeners(eventName?: string): Array<Listener>;
  // off(eventName: string, listener: Listener): this;
  // on(eventName: string, listener: Listener): this;
  // once(eventName: string, listener: Listener): this;
  // removeListener(eventName: string, listener: Listener): this;
  // removeAllListeners(eventName?: string): this;

  // queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
  //   event: TypedEventFilter<EventArgsArray, EventArgsObject>,
  //   fromBlockOrBlockhash?: string | number | undefined,
  //   toBlock?: string | number | undefined
  // ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  // interface: TitleEscrowInterface

  _tokenId(overrides?: CallOverrides): Promise<BigNumber>{
    return this.titleEscrow._tokenId(overrides);
  }

  approveNewOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>{
    overrides = overrides ?? {}
    return this.titleEscrow.approveNewOwner(newOwner,overrides);
  }

  approveNewTransferTargets(
    newBeneficiary: string,
    newHolder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>{
    overrides = overrides ?? {}
    return this.titleEscrow.approveNewTransferTargets(newBeneficiary, newHolder, overrides);
  }

  approvedBeneficiary(overrides?: CallOverrides): Promise<string>{
    return this.titleEscrow.approvedBeneficiary(overrides);
  }

  approvedHolder(overrides?: CallOverrides): Promise<string>{
    return this.titleEscrow.approvedHolder(overrides);
  }

  approvedOwner(overrides?: CallOverrides): Promise<string>{
    return this.titleEscrow.approvedOwner(overrides);
  }

  beneficiary(overrides?: CallOverrides): Promise<string>{
    return this.titleEscrow.beneficiary(overrides);
  }

  changeHolder(
    newHolder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>{
    overrides = overrides ?? {}
    return this.titleEscrow.changeHolder(newHolder, overrides);
  }

  holder(overrides?: CallOverrides): Promise<string>{
    return this.titleEscrow.holder(overrides);
  }

  onERC721Received(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>{
    overrides = overrides ?? {}
    return this.titleEscrow.onERC721Received(operator, from, tokenId, data, overrides) ;
  }

  status(overrides?: CallOverrides): Promise<number>{
    return this.titleEscrow.status(overrides);
  }

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>{
    return this.titleEscrow.supportsInterface(interfaceId, overrides);
  }

  titleEscrowFactory(overrides?: CallOverrides): Promise<string>{
    return this.titleEscrow.titleEscrowFactory(overrides);
  }

  tokenRegistry(overrides?: CallOverrides): Promise<string>{
    return this.titleEscrow.tokenRegistry(overrides);
  }

  async surrender(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>{
    overrides = overrides ?? {}
    const version = this.version;
    if (version == TitleEscrowVersion.V2) {
      const titleEscrow = this.titleEscrow as V2TitleEscrow;
      const tokenRegistryAddress = await titleEscrow.tokenRegistry(overrides);
      return titleEscrow.transferTo(tokenRegistryAddress, overrides);
    } else if (version === TitleEscrowVersion.V3) {
      const titleEscrow = this.titleEscrow as V3TitleEscrow;
      return titleEscrow.surrender(overrides);
    } else {
      throw new Error("Unsupported Title Escrow Version");
    }

  }

  transferToNewEscrow(
    newBeneficiary: string,
    newHolder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>{
    overrides = overrides ?? {}
    return this.titleEscrow.transferToNewEscrow(newBeneficiary, newHolder, overrides);
  }



  initializeRawProperties() {

  }
}
