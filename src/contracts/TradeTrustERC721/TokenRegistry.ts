import { Provider } from "@ethersproject/abstract-provider";
import { TradeTrustERC721 as V2TradeTrustERC721 } from "@govtechsg/token-registry-v2";
import { TradeTrustERC721 as V3TradeTrustERC721 } from "@govtechsg/token-registry-v3";
import {
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  Signer,
} from "ethers";
import { TitleEscrowVersion, TokenRegistryVersion } from "../utils";
import { TokenRegistryCompat } from "./TokenRegistryCompat";
import { Listener } from "@ethersproject/abstract-provider";
import { TypedEvent, TypedEventFilter, TypedListener } from "../common";
import {
  DeployTitleEscrowType,
  TitleEscrowFactory,
} from "../TitleEscrow/TitleEscrowFactory";
import { TitleEscrow } from "../TitleEscrow/TitleEscrow";

interface Raw {
  connect:
    | ((signerOrProvider: string | Signer | Provider) => V2TradeTrustERC721)
    | ((signerOrProvider: string | Signer | Provider) => V3TradeTrustERC721);
  attach:
    | ((addressOrName: string) => V2TradeTrustERC721)
    | ((addressOrName: string) => V3TradeTrustERC721);
  deployed:
    | (() => Promise<V2TradeTrustERC721>)
    | (() => Promise<V3TradeTrustERC721>);

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): V2TradeTrustERC721 | V3TradeTrustERC721;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): V2TradeTrustERC721 | V3TradeTrustERC721;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): V2TradeTrustERC721 | V3TradeTrustERC721;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): V2TradeTrustERC721 | V3TradeTrustERC721;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): V2TradeTrustERC721 | V3TradeTrustERC721;
  listeners(eventName?: string): Array<Listener>;
  // queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
  //   event: TypedEventFilter<EventArgsArray, EventArgsObject>,
  //   fromBlockOrBlockhash?: string | number | undefined,
  //   toBlock?: string | number | undefined
  // ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;
  queryFilter: any;

  functions: any;
  interface: any;
  callStatic: any;
  filters: any;
  estimateGas: any;
  populateTransaction: any;
}

interface TokenRegistryInterface {
  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

  addMinter(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  deployNewTitleEscrow(
    tokenRegistry: string,
    beneficiary: string,
    holder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  destroyToken(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  getRoleMember(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMemberCount(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;

  mintTitle(
    beneficiary: string,
    holder: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  onERC721Received(
    _operator: string,
    _from: string,
    _tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  renounceMinter(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  restoreTitle(
    beneficiary: string,
    holder: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  titleEscrowImplementation(overrides?: CallOverrides): Promise<string>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;
}

export class TokenRegistry {
  //implements TokenRegistryInterface
  registry!: TokenRegistryCompat;
  version!: TokenRegistryVersion;
  raw: any;



  constructor(registry: TokenRegistryCompat, version: TokenRegistryVersion) {
    if (version == TokenRegistryVersion.V2) {
      this.registry = registry as V2TradeTrustERC721;
    } else if (version === TokenRegistryVersion.V3) {
      this.registry = registry as V3TradeTrustERC721;
    } else if (version === TokenRegistryVersion.INVALID) {
      throw new Error("Invalid Token Registry Contract");
    } else {
      throw new Error("Unsupported Token Registry Version");
    }
    this.version = version;
    this.initializeRawProperties();
  }

  // DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>{
    // overrides = overrides ?? {}
  //   this.registry.DEFAULT_ADMIN_ROLE()
  // }

  // "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>{
    // overrides = overrides ?? {}
  //   this.registry["DEFAULT_ADMIN_ROLE()"]()
  // }

  // MINTER_ROLE(overrides?: CallOverrides): Promise<string>{
    // overrides = overrides ?? {}
  //   this.registry.MINTER_ROLE()
  // }

  // "MINTER_ROLE()"(overrides?: CallOverrides): Promise<string>{
    // overrides = overrides ?? {}
  //   this.registry["MINTER_ROLE()"]()
  // }

  deployNewTitleEscrow(
    tokenRegistry: string,
    beneficiary: string,
    holder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction> {
    overrides = overrides ?? {}
    return this.registry.deployNewTitleEscrow(
      tokenRegistry,
      beneficiary,
      holder,
      overrides
    );
  }

  destroyToken(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction> {
    overrides = overrides ?? {}
    return this.registry.destroyToken(tokenId, overrides);
  }

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string> {
    overrides = overrides ?? {}
    return this.registry.getApproved(tokenId, overrides);
  }

  // getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>{
    // overrides = overrides ?? {}
  //   return this.registry.getRoleAdmin(role, overrides);
  // }

  // getRoleMember(
  //   role: BytesLike,
  //   index: BigNumberish,
  //   overrides?: CallOverrides
  // overrides = overrides ?? {}
  // ): Promise<string>{
  //   return this.registry.getRoleMember(role, index, overrides);
  // }

  // getRoleMemberCount(
  //   role: BytesLike,
  //   overrides?: CallOverrides
  // overrides = overrides ?? {}
  // ): Promise<BigNumber>{
  //   return this.registry.getRoleMemberCount(role, overrides);
  // }

  // grantRole(
  //   role: BytesLike,
  //   account: string,
  //   overrides?: Overrides & { from?: string | Promise<string> }
  // ): Promise<ContractTransaction>{
    // overrides = overrides ?? {}
  //   return this.registry.grantRole(role, account, overrides);
  // }

  // hasRole(
  //   role: BytesLike,
  //   account: string,
  //   overrides?: CallOverrides
  // overrides = overrides ?? {}
  // ): Promise<boolean>{
  //   return this.registry.hasRole(role, account, overrides);
  // }

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean> {
    overrides = overrides ?? {}
    return this.registry.isApprovedForAll(owner, operator, overrides);
  }

  isMinter(account: string, overrides?: CallOverrides): Promise<boolean> {
    overrides = overrides ?? {}
    return this.registry.isMinter(account, overrides);
  }

  name(overrides?: CallOverrides): Promise<string> {
    overrides = overrides ?? {}
    return this.registry.name(overrides);
  }

  onERC721Received(
    _operator: string,
    _from: string,
    _tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction> {
    overrides = overrides ?? {}
    return this.registry.onERC721Received(
      _operator,
      _from,
      _tokenId,
      _data,
      overrides
    );
  }

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string> {
    overrides = overrides ?? {}
    return this.registry.ownerOf(tokenId, overrides);
  }

  renounceMinter(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction> {
    overrides = overrides ?? {}
    return this.registry.renounceMinter(overrides);
  }

  // renounceRole(
  //   role: BytesLike,
  //   account: string,
  //   overrides?: Overrides & { from?: string | Promise<string> }
  // ): Promise<ContractTransaction>{
    // overrides = overrides ?? {}
  //   return this.registry.renounceRole(role, account, overrides);
  // }

  restoreTitle(
    beneficiary: string,
    holder: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>{
    overrides = overrides ?? {}
    const version = this.version;
    if (version === TokenRegistryVersion.V3) {
      const registry = this.registry as V3TradeTrustERC721;
      registry.callStatic.restoreTitle(beneficiary, holder, tokenId, overrides);
      return registry.restoreTitle(beneficiary, holder, tokenId, overrides);
    } else if (version === TokenRegistryVersion.V2) {
      const registry = this.registry as V2TradeTrustERC721;
      registry.callStatic.sendToNewTitleEscrow(beneficiary, holder, tokenId, overrides);
      return registry.sendToNewTitleEscrow(beneficiary, holder, tokenId, overrides);
    }else{
      throw new Error("Unsupported Token Registry Version");
    }
  }

  // revokeRole(
  //   role: BytesLike,
  //   account: string,
  //   overrides?: Overrides & { from?: string | Promise<string> }
  // ): Promise<ContractTransaction>{
    // overrides = overrides ?? {}
  //   return this.registry.revokeRole(role, account, overrides);
  // }

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction> {
    overrides = overrides ?? {}
    return this.registry.setApprovalForAll(operator, approved, overrides);
  }

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean> {
    overrides = overrides ?? {}
    return this.registry.supportsInterface(interfaceId, overrides);
  }

  symbol(overrides?: CallOverrides): Promise<string> {
    overrides = overrides ?? {}
    return this.registry.symbol(overrides);
  }

  // titleEscrowImplementation(overrides?: CallOverrides): Promise<string>{
    // overrides = overrides ?? {}
  //   return this.registry.titleEscrowImplementation(overrides);
  // }

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string> {
    overrides = overrides ?? {}
    return this.registry.tokenURI(tokenId, overrides);
  }

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction> {
    overrides = overrides ?? {}
    return this.registry.transferFrom(from, to, tokenId, overrides);
  }

  async mintTitle(
    beneficiary: string,
    holder: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction> {
      overrides = overrides ?? {}

    const version = this.version;
    if (version === TokenRegistryVersion.V3) {
      const registry = this.registry as V3TradeTrustERC721;
      await registry.callStatic.mintTitle(
        beneficiary,
        holder,
        tokenId,
        overrides
      );
      return registry.mintTitle(beneficiary, holder, tokenId, overrides);
    } else if (version === TokenRegistryVersion.V2) {
      const registry = this.registry as V2TradeTrustERC721;
      const titleEscrowFactory = new TitleEscrowFactory(this.registry.signer);
      const titleEscrow: TitleEscrow = await titleEscrowFactory.deploy({
        tokenRegistry: this.registry.address,
        beneficiary: beneficiary,
        holder: holder,
        // titleEscrowFactoryAddress: titleEscrowFactoryAddress,
        version: TitleEscrowVersion.V2
      } as DeployTitleEscrowType);
      await registry.callStatic["safeMint(address,uint256)"](
        holder,
        tokenId,
        overrides
      );
      const safeMintTransaction = await registry["safeMint(address,uint256)"](holder, tokenId, overrides);

      if (holder !== beneficiary) {
        await titleEscrow.changeHolder(holder);
      }
      return safeMintTransaction;
    }else{
      throw new Error("Unsupported Token Registry Version");
    }
  }

  initializeRawProperties() {
    this.raw = {};
    this.raw.connect = this.registry.connect;
    this.raw.attach = this.registry.attach;
    this.raw.deployed = this.registry.deployed;

    this.raw.listeners = this.registry.listeners;
    this.raw.off = this.registry.off;
    this.raw.on = this.registry.on;
    this.raw.once = this.registry.once;
    this.raw.removeListener = this.registry.removeListener;
    this.raw.removeAllListeners = this.registry.removeAllListeners;

    this.raw.queryFilter = this.registry.queryFilter;
    this.raw.interface = this.registry.interface;

    this.raw.functions = this.registry.functions;
    this.raw.callStatic = this.registry.callStatic;
    this.raw.filters = this.registry.filters;
    this.raw.estimateGas = this.registry.estimateGas;
    this.raw.populateTransaction = this.registry.populateTransaction;
  }

  addMinter(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction> {
    overrides = overrides ?? {}
    return this.registry.addMinter(account, overrides);
  }

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction> {
    overrides = overrides ?? {}
    return this.registry.approve(to, tokenId, overrides);
  }

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber> {
    overrides = overrides ?? {}
    return this.registry.balanceOf(owner, overrides);
  }
}
