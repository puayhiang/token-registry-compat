import { TradeTrustERC721Factory as V3ERC721 } from "@govtechsg/token-registry-v3";
import { TradeTrustErc721Factory as V2ERC721 } from "@govtechsg/token-registry-v2";

import { TitleEscrowCloneableFactory as V3TitleEscrowFactory } from "@govtechsg/token-registry-v3";
import { TitleEscrowFactory as V2TitleEscrowFactory } from "@govtechsg/token-registry-v2";

import { Signer } from "ethers";
import { Provider } from "@ethersproject/abstract-provider";
import { ERC165Factory } from "./ERC165/ERC165Factory";
import { ERC165 } from "./ERC165";
import { TokenRegistry } from './TradeTrustERC721/TokenRegistry'
import { TitleEscrow } from './TitleEscrow/TitleEscrow';

const staticCall = true;

// use test - "should have the correct ERC165 interface support" - to figure out the interfaceId
export enum TokenRegistryVersion {
  V2 = "0x9f9e69f3",
  V3 = "0x14ac11d9",
  INVALID = "0x00000000",
}

export enum TitleEscrowVersion {
  V2 = "0xdcce2211",
  V3 = "0x1676e9e0",
  INVALID = "0x00000000",
}

export const getTokenRegistryVersion = async (
  address: string,
  signerOrProvider: Signer | Provider
): Promise<TokenRegistryVersion> => {
  const contractInstance = ERC165Factory.connect(address, signerOrProvider);
  for (const interfaceId of Object.values(TokenRegistryVersion)) {
    const supported = await supportsInterface(
      contractInstance,
      interfaceId,
      staticCall
    );
    if (supported === true) {
      return interfaceId as TokenRegistryVersion;
    }
  }
  return TokenRegistryVersion.INVALID;
};

export const connectToTokenRegistry = async (
  address: string,
  signerOrProvider: Signer | Provider
): Promise<TokenRegistry> => {
  const version: TokenRegistryVersion = await getTokenRegistryVersion(
    address,
    signerOrProvider
  );
  if (version === TokenRegistryVersion.V3) {

    const registry = await V3ERC721.connect(
      address,
      signerOrProvider
    )
    return (new TokenRegistry(registry, version));
  } else if (version === TokenRegistryVersion.V2) {
    const registry = await V2ERC721.connect(
      address,
      signerOrProvider
    );
    return (new TokenRegistry(registry, version));
    } else {
    throw new Error("Token Registry Version no longer supported");
  }
};


export const getTitleEscrowVersion = async (
  address: string,
  signerOrProvider: Signer | Provider
): Promise<TitleEscrowVersion> => {
  const contractInstance = ERC165Factory.connect(address, signerOrProvider);
  for (const interfaceId of Object.values(TitleEscrowVersion)) {
    const supported = await supportsInterface(
      contractInstance,
      interfaceId,
      staticCall
    );
    if (supported === true) {
      return interfaceId as TitleEscrowVersion;
    }
  }
  return TitleEscrowVersion.INVALID;
};


export const connectToTitleEscrow = async (
  address: string,
  signerOrProvider: Signer | Provider
): Promise<TitleEscrow> => {
  const version: TitleEscrowVersion = await getTitleEscrowVersion(
    address,
    signerOrProvider
  );
  if (version === TitleEscrowVersion.V3) {
    const registry = await V3TitleEscrowFactory.connect(
      address,
      signerOrProvider
    )
    return (new TitleEscrow(registry, version));
  } else if (version === TitleEscrowVersion.V2) {
    const registry = await V2TitleEscrowFactory.connect(
      address,
      signerOrProvider
    );
    return (new TitleEscrow(registry, version));
    } else {
    throw new Error("Token Registry Version no longer supported");
  }
};

export const connectToToken = async (
  tokenId: string,
  tokenRegistryAddress: string,
  signerOrProvider: Signer | Provider,
): Promise<TitleEscrow> => {
  const tokenRegistry: TokenRegistry = await connectToTokenRegistry(tokenRegistryAddress, signerOrProvider);
  const titleEscrowAddress = await tokenRegistry.ownerOf(tokenId);
  return connectToTitleEscrow(titleEscrowAddress, signerOrProvider);
};

export const supportsInterface = async (
  contractInstance: ERC165,
  interfaceId: string,
  staticCall = true
): Promise<boolean> => {
  let isSameInterfaceType;
  try {
    if (staticCall) {
      isSameInterfaceType = await contractInstance.callStatic.supportsInterface(
        interfaceId
      );
    } else {
      isSameInterfaceType = await contractInstance.supportsInterface(
        interfaceId
      );
    }
    return isSameInterfaceType;
  } catch (e) {
    if (e instanceof Error) {
      if (
        e.message.includes("revert") ||
        e.message.includes("cannot estimate gas")
      ) {
        return false;
      }
    }
    throw e;
  }
};
