// import { TokenRegistryV2, TokenRegistryV3 } from "./TokenRegistry";
// import { V2TradeTrustERC721, V3TradeTrustERC721 } from "./TokenRegistry";

import { TradeTrustERC721 as V2TradeTrustERC721 } from "@govtechsg/token-registry-v2/dist/types/contracts";
import { TradeTrustERC721Interface } from "@govtechsg/token-registry-v3/dist/types/contracts/TradeTrustERC721";
import {
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
} from "ethers";

declare module "@govtechsg/token-registry-v2/dist/types/contracts" {
  interface TradeTrustERC721 {

    // interface: TradeTrustERC721Interface;

    functions: {
      DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

      "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<[string]>;

      MINTER_ROLE(overrides?: CallOverrides): Promise<[string]>;

      "MINTER_ROLE()"(overrides?: CallOverrides): Promise<[string]>;

      addMinter(
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      "addMinter(address)"(
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      approve(
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      "approve(address,uint256)"(
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

      "balanceOf(address)"(
        owner: string,
        overrides?: CallOverrides
      ): Promise<[BigNumber]>;

      deployNewTitleEscrow(
        tokenRegistry: string,
        beneficiary: string,
        holder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      "deployNewTitleEscrow(address,address,address)"(
        tokenRegistry: string,
        beneficiary: string,
        holder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      destroyToken(
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      "destroyToken(uint256)"(
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      getApproved(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<[string]>;

      "getApproved(uint256)"(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<[string]>;

      getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

      "getRoleAdmin(bytes32)"(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<[string]>;

      getRoleMember(
        role: BytesLike,
        index: BigNumberish,
        overrides?: CallOverrides
      ): Promise<[string]>;

      "getRoleMember(bytes32,uint256)"(
        role: BytesLike,
        index: BigNumberish,
        overrides?: CallOverrides
      ): Promise<[string]>;

      getRoleMemberCount(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<[BigNumber]>;

      "getRoleMemberCount(bytes32)"(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<[BigNumber]>;

      grantRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      "grantRole(bytes32,address)"(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      hasRole(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<[boolean]>;

      "hasRole(bytes32,address)"(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<[boolean]>;

      isApprovedForAll(
        owner: string,
        operator: string,
        overrides?: CallOverrides
      ): Promise<[boolean]>;

      "isApprovedForAll(address,address)"(
        owner: string,
        operator: string,
        overrides?: CallOverrides
      ): Promise<[boolean]>;

      isMinter(account: string, overrides?: CallOverrides): Promise<[boolean]>;

      "isMinter(address)"(
        account: string,
        overrides?: CallOverrides
      ): Promise<[boolean]>;

      mintTitle(
        beneficiary: string,
        holder: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      "mintTitle(address,address,uint256)"(
        beneficiary: string,
        holder: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      name(overrides?: CallOverrides): Promise<[string]>;

      "name()"(overrides?: CallOverrides): Promise<[string]>;

      onERC721Received(
        _operator: string,
        _from: string,
        _tokenId: BigNumberish,
        _data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      "onERC721Received(address,address,uint256,bytes)"(
        _operator: string,
        _from: string,
        _tokenId: BigNumberish,
        _data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      ownerOf(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<[string]>;

      "ownerOf(uint256)"(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<[string]>;

      renounceMinter(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      "renounceMinter()"(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      renounceRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      "renounceRole(bytes32,address)"(
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

      "restoreTitle(address,address,uint256)"(
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

      "revokeRole(bytes32,address)"(
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

      "setApprovalForAll(address,bool)"(
        operator: string,
        approved: boolean,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      supportsInterface(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<[boolean]>;

      "supportsInterface(bytes4)"(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<[boolean]>;

      symbol(overrides?: CallOverrides): Promise<[string]>;

      "symbol()"(overrides?: CallOverrides): Promise<[string]>;

      titleEscrowImplementation(overrides?: CallOverrides): Promise<[string]>;

      "titleEscrowImplementation()"(overrides?: CallOverrides): Promise<[string]>;

      tokenURI(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<[string]>;

      "tokenURI(uint256)"(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<[string]>;

      transferFrom(
        from: string,
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;

      "transferFrom(address,address,uint256)"(
        from: string,
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
    };

    estimateGas: {
      DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

      "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

      MINTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

      "MINTER_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

      addMinter(
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "addMinter(address)"(
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      approve(
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "approve(address,uint256)"(
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

      "balanceOf(address)"(
        owner: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      deployNewTitleEscrow(
        tokenRegistry: string,
        beneficiary: string,
        holder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "deployNewTitleEscrow(address,address,address)"(
        tokenRegistry: string,
        beneficiary: string,
        holder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      destroyToken(
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "destroyToken(uint256)"(
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      getApproved(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      "getApproved(uint256)"(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      getRoleAdmin(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      "getRoleAdmin(bytes32)"(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      getRoleMember(
        role: BytesLike,
        index: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      "getRoleMember(bytes32,uint256)"(
        role: BytesLike,
        index: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      getRoleMemberCount(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      "getRoleMemberCount(bytes32)"(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      grantRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "grantRole(bytes32,address)"(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      hasRole(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      "hasRole(bytes32,address)"(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      isApprovedForAll(
        owner: string,
        operator: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      "isApprovedForAll(address,address)"(
        owner: string,
        operator: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      isMinter(account: string, overrides?: CallOverrides): Promise<BigNumber>;

      "isMinter(address)"(
        account: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      mintTitle(
        beneficiary: string,
        holder: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "mintTitle(address,address,uint256)"(
        beneficiary: string,
        holder: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      name(overrides?: CallOverrides): Promise<BigNumber>;

      "name()"(overrides?: CallOverrides): Promise<BigNumber>;

      onERC721Received(
        _operator: string,
        _from: string,
        _tokenId: BigNumberish,
        _data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "onERC721Received(address,address,uint256,bytes)"(
        _operator: string,
        _from: string,
        _tokenId: BigNumberish,
        _data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      ownerOf(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      "ownerOf(uint256)"(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      renounceMinter(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "renounceMinter()"(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      renounceRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "renounceRole(bytes32,address)"(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      restoreTitle(
        beneficiary: string,
        holder: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "restoreTitle(address,address,uint256)"(
        beneficiary: string,
        holder: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      revokeRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "revokeRole(bytes32,address)"(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "safeTransferFrom(address,address,uint256)"(
        from: string,
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "safeTransferFrom(address,address,uint256,bytes)"(
        from: string,
        to: string,
        tokenId: BigNumberish,
        _data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      setApprovalForAll(
        operator: string,
        approved: boolean,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "setApprovalForAll(address,bool)"(
        operator: string,
        approved: boolean,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      supportsInterface(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      "supportsInterface(bytes4)"(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      symbol(overrides?: CallOverrides): Promise<BigNumber>;

      "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

      titleEscrowImplementation(overrides?: CallOverrides): Promise<BigNumber>;

      "titleEscrowImplementation()"(
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      tokenURI(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      "tokenURI(uint256)"(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      transferFrom(
        from: string,
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;

      "transferFrom(address,address,uint256)"(
        from: string,
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
    };

    callStatic: {
      DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

      "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

      MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

      "MINTER_ROLE()"(overrides?: CallOverrides): Promise<string>;

      addMinter(account: string, overrides?: CallOverrides): Promise<void>;

      "addMinter(address)"(
        account: string,
        overrides?: CallOverrides
      ): Promise<void>;

      approve(
        to: string,
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<void>;

      "approve(address,uint256)"(
        to: string,
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<void>;

      balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

      "balanceOf(address)"(
        owner: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      deployNewTitleEscrow(
        tokenRegistry: string,
        beneficiary: string,
        holder: string,
        overrides?: CallOverrides
      ): Promise<string>;

      "deployNewTitleEscrow(address,address,address)"(
        tokenRegistry: string,
        beneficiary: string,
        holder: string,
        overrides?: CallOverrides
      ): Promise<string>;

      destroyToken(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<void>;

      "destroyToken(uint256)"(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<void>;

      getApproved(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<string>;

      "getApproved(uint256)"(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<string>;

      getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

      "getRoleAdmin(bytes32)"(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<string>;

      getRoleMember(
        role: BytesLike,
        index: BigNumberish,
        overrides?: CallOverrides
      ): Promise<string>;

      "getRoleMember(bytes32,uint256)"(
        role: BytesLike,
        index: BigNumberish,
        overrides?: CallOverrides
      ): Promise<string>;

      getRoleMemberCount(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      "getRoleMemberCount(bytes32)"(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<BigNumber>;

      grantRole(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<void>;

      "grantRole(bytes32,address)"(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<void>;

      hasRole(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<boolean>;

      "hasRole(bytes32,address)"(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<boolean>;

      isApprovedForAll(
        owner: string,
        operator: string,
        overrides?: CallOverrides
      ): Promise<boolean>;

      "isApprovedForAll(address,address)"(
        owner: string,
        operator: string,
        overrides?: CallOverrides
      ): Promise<boolean>;

      isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;

      "isMinter(address)"(
        account: string,
        overrides?: CallOverrides
      ): Promise<boolean>;

      mintTitle(
        beneficiary: string,
        holder: string,
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<string>;

      "mintTitle(address,address,uint256)"(
        beneficiary: string,
        holder: string,
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<string>;

      name(overrides?: CallOverrides): Promise<string>;

      "name()"(overrides?: CallOverrides): Promise<string>;

      onERC721Received(
        _operator: string,
        _from: string,
        _tokenId: BigNumberish,
        _data: BytesLike,
        overrides?: CallOverrides
      ): Promise<string>;

      "onERC721Received(address,address,uint256,bytes)"(
        _operator: string,
        _from: string,
        _tokenId: BigNumberish,
        _data: BytesLike,
        overrides?: CallOverrides
      ): Promise<string>;

      ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

      "ownerOf(uint256)"(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<string>;

      renounceMinter(overrides?: CallOverrides): Promise<void>;

      "renounceMinter()"(overrides?: CallOverrides): Promise<void>;

      renounceRole(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<void>;

      "renounceRole(bytes32,address)"(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<void>;

      restoreTitle(
        beneficiary: string,
        holder: string,
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<string>;

      "restoreTitle(address,address,uint256)"(
        beneficiary: string,
        holder: string,
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<string>;

      revokeRole(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<void>;

      "revokeRole(bytes32,address)"(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<void>;

      "safeTransferFrom(address,address,uint256)"(
        from: string,
        to: string,
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<void>;

      "safeTransferFrom(address,address,uint256,bytes)"(
        from: string,
        to: string,
        tokenId: BigNumberish,
        _data: BytesLike,
        overrides?: CallOverrides
      ): Promise<void>;

      setApprovalForAll(
        operator: string,
        approved: boolean,
        overrides?: CallOverrides
      ): Promise<void>;

      "setApprovalForAll(address,bool)"(
        operator: string,
        approved: boolean,
        overrides?: CallOverrides
      ): Promise<void>;

      supportsInterface(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<boolean>;

      "supportsInterface(bytes4)"(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<boolean>;

      symbol(overrides?: CallOverrides): Promise<string>;

      "symbol()"(overrides?: CallOverrides): Promise<string>;

      titleEscrowImplementation(overrides?: CallOverrides): Promise<string>;

      "titleEscrowImplementation()"(overrides?: CallOverrides): Promise<string>;

      tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

      "tokenURI(uint256)"(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<string>;

      transferFrom(
        from: string,
        to: string,
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<void>;

      "transferFrom(address,address,uint256)"(
        from: string,
        to: string,
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<void>;
    };

    populateTransaction: {
      DEFAULT_ADMIN_ROLE(
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      "DEFAULT_ADMIN_ROLE()"(
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      MINTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

      "MINTER_ROLE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

      addMinter(
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "addMinter(address)"(
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      approve(
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "approve(address,uint256)"(
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      balanceOf(
        owner: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      "balanceOf(address)"(
        owner: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      deployNewTitleEscrow(
        tokenRegistry: string,
        beneficiary: string,
        holder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "deployNewTitleEscrow(address,address,address)"(
        tokenRegistry: string,
        beneficiary: string,
        holder: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      destroyToken(
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "destroyToken(uint256)"(
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      getApproved(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      "getApproved(uint256)"(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      getRoleAdmin(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      "getRoleAdmin(bytes32)"(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      getRoleMember(
        role: BytesLike,
        index: BigNumberish,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      "getRoleMember(bytes32,uint256)"(
        role: BytesLike,
        index: BigNumberish,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      getRoleMemberCount(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      "getRoleMemberCount(bytes32)"(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      grantRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "grantRole(bytes32,address)"(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      hasRole(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      "hasRole(bytes32,address)"(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      isApprovedForAll(
        owner: string,
        operator: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      "isApprovedForAll(address,address)"(
        owner: string,
        operator: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      isMinter(
        account: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      "isMinter(address)"(
        account: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      mintTitle(
        beneficiary: string,
        holder: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "mintTitle(address,address,uint256)"(
        beneficiary: string,
        holder: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

      "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

      onERC721Received(
        _operator: string,
        _from: string,
        _tokenId: BigNumberish,
        _data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "onERC721Received(address,address,uint256,bytes)"(
        _operator: string,
        _from: string,
        _tokenId: BigNumberish,
        _data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      ownerOf(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      "ownerOf(uint256)"(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      renounceMinter(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "renounceMinter()"(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      renounceRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "renounceRole(bytes32,address)"(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      restoreTitle(
        beneficiary: string,
        holder: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "restoreTitle(address,address,uint256)"(
        beneficiary: string,
        holder: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      revokeRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "revokeRole(bytes32,address)"(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "safeTransferFrom(address,address,uint256)"(
        from: string,
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "safeTransferFrom(address,address,uint256,bytes)"(
        from: string,
        to: string,
        tokenId: BigNumberish,
        _data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      setApprovalForAll(
        operator: string,
        approved: boolean,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "setApprovalForAll(address,bool)"(
        operator: string,
        approved: boolean,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      supportsInterface(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      "supportsInterface(bytes4)"(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

      "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

      titleEscrowImplementation(
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      "titleEscrowImplementation()"(
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      tokenURI(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      "tokenURI(uint256)"(
        tokenId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;

      transferFrom(
        from: string,
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;

      "transferFrom(address,address,uint256)"(
        from: string,
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
    };

    "mintTitle(address,address,uint256)"(
      beneficiary: string,
      holder: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

  }
}


V2TradeTrustERC721.prototype.estimateGas.mintTitle = function (beneficiary: string, holder: string, tokenId: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }) : Promise<BigNumber>{
  return Promise.resolve(BigNumber.from("0x0"));
};

V2TradeTrustERC721.prototype.estimateGas["mintTitle(address,address,uint256)"] = V2TradeTrustERC721.prototype.estimateGas.mintTitle;


V2TradeTrustERC721.prototype.callStatic.mintTitle = function (beneficiary: string, holder: string, tokenId: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }) : Promise<string>{
  throw new Error("V2 Token Registry minting unsupported")
};

V2TradeTrustERC721.prototype.callStatic["mintTitle(address,address,uint256)"] = V2TradeTrustERC721.prototype.callStatic.mintTitle;


V2TradeTrustERC721.prototype.populateTransaction.mintTitle = function (beneficiary: string, holder: string, tokenId: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }) : Promise<PopulatedTransaction>{
  throw new Error("V2 Token Registry minting unsupported")
};

V2TradeTrustERC721.prototype.populateTransaction["mintTitle(address,address,uint256)"] = V2TradeTrustERC721.prototype.populateTransaction.mintTitle;


