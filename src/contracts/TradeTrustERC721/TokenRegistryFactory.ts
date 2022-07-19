import { TradeTrustERC721Factory as V3TradeTrustERC721Factory } from "@govtechsg/token-registry-v3";
import { Overrides, Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/abstract-provider";
import {connectToTokenRegistry, TokenRegistryVersion} from '../utils'
import { TokenRegistry } from "./TokenRegistry";

export class TokenRegistryFactory {

    static address: string;
    static version: TokenRegistryVersion;
    static defaultFactory: typeof V3TradeTrustERC721Factory;
    registryFactory!: V3TradeTrustERC721Factory;
    signer!: Signer;

    constructor(signer?: Signer){
        if(signer !== undefined){
            this.signer = signer;
        }
    }

    checkSigner(): void {
        if(typeof this.signer === "undefined"){
            throw new Error("Signer unintialized before call");
        }
    }

    async deploy(name: string, symbol: string, overrides?: Overrides): Promise<TokenRegistry>{
        this.checkSigner();
        const instance = new TokenRegistry(await this.registryFactory.deploy(name, symbol, overrides), TokenRegistryFactory.version)
        return instance;
    }

    getDeployTransaction(name: string, symbol: string, overrides?: Overrides): TransactionRequest{
        this.checkSigner()
        return this.registryFactory.getDeployTransaction(name, symbol, overrides);
    }

    connect(signer: Signer): TokenRegistryFactory {
        this.signer = signer;
        this.registryFactory = new TokenRegistryFactory.defaultFactory(signer);
        return this;
    }

    static async connect(address: string, signerOrProvider: Signer | Provider): Promise<TokenRegistry>{
        this.address = address;
        const registry = await connectToTokenRegistry(TokenRegistryFactory.address, signerOrProvider);
        return registry as TokenRegistry;
    };

    static createInterface(){
        return (this.defaultFactory).createInterface();
    }

}
