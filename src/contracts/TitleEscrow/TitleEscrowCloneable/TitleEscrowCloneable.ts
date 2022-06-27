import { TitleEscrowCloneable as V3TitleEscrow } from "@govtechsg/token-registry-v3"
import { V2TitleEscrowCloneableInterface } from './TitleEscrowCompatibleCloneable'
// import { TitleEscrow as V2TitleEscrow } from "@govtechsg/token-registry-v2/dist/ts/contracts";


import {
    ethers,
    EventFilter,
    Signer,
    BigNumber,
    BigNumberish,
    PopulatedTransaction,
    BaseContract,
    ContractTransaction,
    Overrides,
    CallOverrides,
  } from "ethers";
  import { BytesLike } from "@ethersproject/bytes";
  import { Listener, Provider } from "@ethersproject/providers";
  import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
  import type { TypedEventFilter, TypedEvent, TypedListener } from "../../V2/common";

export class TitleEscrowCompat extends BaseContract{
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
  
    interface: V2TitleEscrowCloneableInterface | V3TitleEscrow;
  
    functions: {
      _tokenId(overrides?: CallOverrides): Promise<[BigNumber]>;
  
      "_tokenId()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  
      approveNewOwner(
        newOwner: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      "approveNewOwner(address)"(
        newOwner: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      approveNewTransferTargets(
        newBeneficiary: string,
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      "approveNewTransferTargets(address,address)"(
        newBeneficiary: string,
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      approvedBeneficiary(overrides?: CallOverrides): Promise<[string]>;
  
      "approvedBeneficiary()"(overrides?: CallOverrides): Promise<[string]>;
  
      approvedHolder(overrides?: CallOverrides): Promise<[string]>;
  
      "approvedHolder()"(overrides?: CallOverrides): Promise<[string]>;
  
      approvedOwner(overrides?: CallOverrides): Promise<[string]>;
  
      "approvedOwner()"(overrides?: CallOverrides): Promise<[string]>;
  
      beneficiary(overrides?: CallOverrides): Promise<[string]>;
  
      "beneficiary()"(overrides?: CallOverrides): Promise<[string]>;
  
      changeHolder(
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      "changeHolder(address)"(
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      holder(overrides?: CallOverrides): Promise<[string]>;
  
      "holder()"(overrides?: CallOverrides): Promise<[string]>;
  
      initialize(
        _tokenRegistry: string,
        _beneficiary: string,
        _holder: string,
        _titleEscrowFactoryAddress: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      "initialize(address,address,address,address)"(
        _tokenRegistry: string,
        _beneficiary: string,
        _holder: string,
        _titleEscrowFactoryAddress: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      onERC721Received(
        operator: string,
        from: string,
        tokenId: BigNumberish,
        data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      "onERC721Received(address,address,uint256,bytes)"(
        operator: string,
        from: string,
        tokenId: BigNumberish,
        data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      status(overrides?: CallOverrides): Promise<[number]>;
  
      "status()"(overrides?: CallOverrides): Promise<[number]>;
  
      supportsInterface(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<[boolean]>;
  
      "supportsInterface(bytes4)"(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<[boolean]>;
  
      surrender(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      "surrender()"(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      titleEscrowFactory(overrides?: CallOverrides): Promise<[string]>;
  
      "titleEscrowFactory()"(overrides?: CallOverrides): Promise<[string]>;
  
      tokenRegistry(overrides?: CallOverrides): Promise<[string]>;
  
      "tokenRegistry()"(overrides?: CallOverrides): Promise<[string]>;
  
      transferToNewEscrow(
        newBeneficiary: string,
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      "transferToNewEscrow(address,address)"(
        newBeneficiary: string,
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
    };
  
    _tokenId(overrides?: CallOverrides): Promise<BigNumber>;
  
    "_tokenId()"(overrides?: CallOverrides): Promise<BigNumber>;
  
    approveNewOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    "approveNewOwner(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    approveNewTransferTargets(
      newBeneficiary: string,
      newHolder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    "approveNewTransferTargets(address,address)"(
      newBeneficiary: string,
      newHolder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    approvedBeneficiary(overrides?: CallOverrides): Promise<string>;
  
    "approvedBeneficiary()"(overrides?: CallOverrides): Promise<string>;
  
    approvedHolder(overrides?: CallOverrides): Promise<string>;
  
    "approvedHolder()"(overrides?: CallOverrides): Promise<string>;
  
    approvedOwner(overrides?: CallOverrides): Promise<string>;
  
    "approvedOwner()"(overrides?: CallOverrides): Promise<string>;
  
    beneficiary(overrides?: CallOverrides): Promise<string>;
  
    "beneficiary()"(overrides?: CallOverrides): Promise<string>;
  
    changeHolder(
      newHolder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    "changeHolder(address)"(
      newHolder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    holder(overrides?: CallOverrides): Promise<string>;
  
    "holder()"(overrides?: CallOverrides): Promise<string>;
  
    initialize(
      _tokenRegistry: string,
      _beneficiary: string,
      _holder: string,
      _titleEscrowFactoryAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    "initialize(address,address,address,address)"(
      _tokenRegistry: string,
      _beneficiary: string,
      _holder: string,
      _titleEscrowFactoryAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    status(overrides?: CallOverrides): Promise<number>;
  
    "status()"(overrides?: CallOverrides): Promise<number>;
  
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  
    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  
    surrender(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    "surrender()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    titleEscrowFactory(overrides?: CallOverrides): Promise<string>;
  
    "titleEscrowFactory()"(overrides?: CallOverrides): Promise<string>;
  
    tokenRegistry(overrides?: CallOverrides): Promise<string>;
  
    "tokenRegistry()"(overrides?: CallOverrides): Promise<string>;
  
    transferToNewEscrow(
      newBeneficiary: string,
      newHolder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    "transferToNewEscrow(address,address)"(
      newBeneficiary: string,
      newHolder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    callStatic: {
      _tokenId(overrides?: CallOverrides): Promise<BigNumber>;
  
      "_tokenId()"(overrides?: CallOverrides): Promise<BigNumber>;
  
      approveNewOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;
  
      "approveNewOwner(address)"(
        newOwner: string,
        overrides?: CallOverrides
      ): Promise<void>;
  
      approveNewTransferTargets(
        newBeneficiary: string,
        newHolder: string,
        overrides?: CallOverrides
      ): Promise<void>;
  
      "approveNewTransferTargets(address,address)"(
        newBeneficiary: string,
        newHolder: string,
        overrides?: CallOverrides
      ): Promise<void>;
  
      approvedBeneficiary(overrides?: CallOverrides): Promise<string>;
  
      "approvedBeneficiary()"(overrides?: CallOverrides): Promise<string>;
  
      approvedHolder(overrides?: CallOverrides): Promise<string>;
  
      "approvedHolder()"(overrides?: CallOverrides): Promise<string>;
  
      approvedOwner(overrides?: CallOverrides): Promise<string>;
  
      "approvedOwner()"(overrides?: CallOverrides): Promise<string>;
  
      beneficiary(overrides?: CallOverrides): Promise<string>;
  
      "beneficiary()"(overrides?: CallOverrides): Promise<string>;
  
      changeHolder(newHolder: string, overrides?: CallOverrides): Promise<void>;
  
      "changeHolder(address)"(
        newHolder: string,
        overrides?: CallOverrides
      ): Promise<void>;
  
      holder(overrides?: CallOverrides): Promise<string>;
  
      "holder()"(overrides?: CallOverrides): Promise<string>;
  
      initialize(
        _tokenRegistry: string,
        _beneficiary: string,
        _holder: string,
        _titleEscrowFactoryAddress: string,
        overrides?: CallOverrides
      ): Promise<void>;
  
      "initialize(address,address,address,address)"(
        _tokenRegistry: string,
        _beneficiary: string,
        _holder: string,
        _titleEscrowFactoryAddress: string,
        overrides?: CallOverrides
      ): Promise<void>;
  
      onERC721Received(
        operator: string,
        from: string,
        tokenId: BigNumberish,
        data: BytesLike,
        overrides?: CallOverrides
      ): Promise<string>;
  
      "onERC721Received(address,address,uint256,bytes)"(
        operator: string,
        from: string,
        tokenId: BigNumberish,
        data: BytesLike,
        overrides?: CallOverrides
      ): Promise<string>;
  
      status(overrides?: CallOverrides): Promise<number>;
  
      "status()"(overrides?: CallOverrides): Promise<number>;
  
      supportsInterface(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<boolean>;
  
      "supportsInterface(bytes4)"(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<boolean>;
  
      surrender(overrides?: CallOverrides): Promise<void>;
  
      "surrender()"(overrides?: CallOverrides): Promise<void>;
  
      titleEscrowFactory(overrides?: CallOverrides): Promise<string>;
  
      "titleEscrowFactory()"(overrides?: CallOverrides): Promise<string>;
  
      tokenRegistry(overrides?: CallOverrides): Promise<string>;
  
      "tokenRegistry()"(overrides?: CallOverrides): Promise<string>;
  
      transferToNewEscrow(
        newBeneficiary: string,
        newHolder: string,
        overrides?: CallOverrides
      ): Promise<void>;
  
      "transferToNewEscrow(address,address)"(
        newBeneficiary: string,
        newHolder: string,
        overrides?: CallOverrides
      ): Promise<void>;
    };
  
    filters: {
      "HolderChanged(address,address)"(
        previousHolder?: string | null,
        newHolder?: string | null
      ): TypedEventFilter<
        [string, string],
        { previousHolder: string; newHolder: string }
      >;
  
      HolderChanged(
        previousHolder?: string | null,
        newHolder?: string | null
      ): TypedEventFilter<
        [string, string],
        { previousHolder: string; newHolder: string }
      >;
  
      "TitleCeded(address,address,uint256)"(
        _tokenRegistry?: string | null,
        _to?: string | null,
        _id?: BigNumberish | null
      ): TypedEventFilter<
        [string, string, BigNumber],
        { _tokenRegistry: string; _to: string; _id: BigNumber }
      >;
  
      TitleCeded(
        _tokenRegistry?: string | null,
        _to?: string | null,
        _id?: BigNumberish | null
      ): TypedEventFilter<
        [string, string, BigNumber],
        { _tokenRegistry: string; _to: string; _id: BigNumber }
      >;
  
      "TitleReceived(address,address,uint256)"(
        _tokenRegistry?: string | null,
        _from?: string | null,
        _id?: BigNumberish | null
      ): TypedEventFilter<
        [string, string, BigNumber],
        { _tokenRegistry: string; _from: string; _id: BigNumber }
      >;
  
      TitleReceived(
        _tokenRegistry?: string | null,
        _from?: string | null,
        _id?: BigNumberish | null
      ): TypedEventFilter<
        [string, string, BigNumber],
        { _tokenRegistry: string; _from: string; _id: BigNumber }
      >;
  
      "TransferOwnerApproval(uint256,address,address)"(
        _tokenid?: BigNumberish | null,
        _from?: string | null,
        _to?: string | null
      ): TypedEventFilter<
        [BigNumber, string, string],
        { _tokenid: BigNumber; _from: string; _to: string }
      >;
  
      TransferOwnerApproval(
        _tokenid?: BigNumberish | null,
        _from?: string | null,
        _to?: string | null
      ): TypedEventFilter<
        [BigNumber, string, string],
        { _tokenid: BigNumber; _from: string; _to: string }
      >;
  
      "TransferTitleEscrowApproval(address,address)"(
        newBeneficiary?: string | null,
        newHolder?: string | null
      ): TypedEventFilter<
        [string, string],
        { newBeneficiary: string; newHolder: string }
      >;
  
      TransferTitleEscrowApproval(
        newBeneficiary?: string | null,
        newHolder?: string | null
      ): TypedEventFilter<
        [string, string],
        { newBeneficiary: string; newHolder: string }
      >;
    };
  
    estimateGas: {
      _tokenId(overrides?: CallOverrides): Promise<BigNumber>;
  
      "_tokenId()"(overrides?: CallOverrides): Promise<BigNumber>;
  
      approveNewOwner(
        newOwner: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      "approveNewOwner(address)"(
        newOwner: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      approveNewTransferTargets(
        newBeneficiary: string,
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      "approveNewTransferTargets(address,address)"(
        newBeneficiary: string,
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      approvedBeneficiary(overrides?: CallOverrides): Promise<BigNumber>;
  
      "approvedBeneficiary()"(overrides?: CallOverrides): Promise<BigNumber>;
  
      approvedHolder(overrides?: CallOverrides): Promise<BigNumber>;
  
      "approvedHolder()"(overrides?: CallOverrides): Promise<BigNumber>;
  
      approvedOwner(overrides?: CallOverrides): Promise<BigNumber>;
  
      "approvedOwner()"(overrides?: CallOverrides): Promise<BigNumber>;
  
      beneficiary(overrides?: CallOverrides): Promise<BigNumber>;
  
      "beneficiary()"(overrides?: CallOverrides): Promise<BigNumber>;
  
      changeHolder(
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      "changeHolder(address)"(
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      holder(overrides?: CallOverrides): Promise<BigNumber>;
  
      "holder()"(overrides?: CallOverrides): Promise<BigNumber>;
  
      initialize(
        _tokenRegistry: string,
        _beneficiary: string,
        _holder: string,
        _titleEscrowFactoryAddress: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      "initialize(address,address,address,address)"(
        _tokenRegistry: string,
        _beneficiary: string,
        _holder: string,
        _titleEscrowFactoryAddress: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      onERC721Received(
        operator: string,
        from: string,
        tokenId: BigNumberish,
        data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      "onERC721Received(address,address,uint256,bytes)"(
        operator: string,
        from: string,
        tokenId: BigNumberish,
        data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      status(overrides?: CallOverrides): Promise<BigNumber>;
  
      "status()"(overrides?: CallOverrides): Promise<BigNumber>;
  
      supportsInterface(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      "supportsInterface(bytes4)"(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      surrender(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      "surrender()"(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      titleEscrowFactory(overrides?: CallOverrides): Promise<BigNumber>;
  
      "titleEscrowFactory()"(overrides?: CallOverrides): Promise<BigNumber>;
  
      tokenRegistry(overrides?: CallOverrides): Promise<BigNumber>;
  
      "tokenRegistry()"(overrides?: CallOverrides): Promise<BigNumber>;
  
      transferToNewEscrow(
        newBeneficiary: string,
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      "transferToNewEscrow(address,address)"(
        newBeneficiary: string,
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
    };
  
    populateTransaction: {
      _tokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      "_tokenId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      approveNewOwner(
        newOwner: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      "approveNewOwner(address)"(
        newOwner: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      approveNewTransferTargets(
        newBeneficiary: string,
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      "approveNewTransferTargets(address,address)"(
        newBeneficiary: string,
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      approvedBeneficiary(
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      "approvedBeneficiary()"(
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      approvedHolder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      "approvedHolder()"(
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      approvedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      "approvedOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      "beneficiary()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      changeHolder(
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      "changeHolder(address)"(
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      holder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      "holder()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      initialize(
        _tokenRegistry: string,
        _beneficiary: string,
        _holder: string,
        _titleEscrowFactoryAddress: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      "initialize(address,address,address,address)"(
        _tokenRegistry: string,
        _beneficiary: string,
        _holder: string,
        _titleEscrowFactoryAddress: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      onERC721Received(
        operator: string,
        from: string,
        tokenId: BigNumberish,
        data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      "onERC721Received(address,address,uint256,bytes)"(
        operator: string,
        from: string,
        tokenId: BigNumberish,
        data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      status(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      "status()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      supportsInterface(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      "supportsInterface(bytes4)"(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      surrender(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      "surrender()"(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      titleEscrowFactory(
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      "titleEscrowFactory()"(
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      tokenRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      "tokenRegistry()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      transferToNewEscrow(
        newBeneficiary: string,
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      "transferToNewEscrow(address,address)"(
        newBeneficiary: string,
        newHolder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
    };
}
