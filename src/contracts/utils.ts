import { TradeTrustERC721Factory as V3ERC721 } from "@govtechsg/token-registry-v3";
import { TradeTrustERC721Factory as V2ERC721 } from "@govtechsg/token-registry-v3";
import { Signer } from "ethers";
import { Provider } from "@ethersproject/abstract-provider";
import { TokenRegistryCompat } from "./TradeTrustERC721/TokenRegistryCompat";
import { ERC165Factory } from "./ERC165/ERC165Factory";
import { ERC165 } from "./ERC165";

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
): Promise<TokenRegistryCompat> => {
  const version: TokenRegistryVersion = await getTokenRegistryVersion(
    address,
    signerOrProvider
  );
  if (version === TokenRegistryVersion.V3) {
    return (await V3ERC721.connect(
      address,
      signerOrProvider
    )) as TokenRegistryCompat;
  } else if (version === TokenRegistryVersion.V2) {
    return (await V2ERC721.connect(
      address,
      signerOrProvider
    )) as TokenRegistryCompat;
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

// export const connectToTitleEscrow = async (
//   tokenId: string,
//   tokenRegistryAddress: string,
//   signerOrProvider: Signer | Provider,
// ): Promise<TitleEscrowCompat> => {
//   const tokenRegistry: TokenRegistryCompat = await connectToTokenRegistry(tokenRegistryAddress, signerOrProvider);
//   const titleEscrowAddress = await tokenRegistry.ownerOf(tokenId);
//   const version = await getTitleEscrowVersion(titleEscrowAddress, signerOrProvider);
//   if (version === TitleEscrowVersion.V3) {
//     return await V3TitleEscrow.connect(titleEscrowAddress, signerOrProvider) as TitleEscrowCompat;
//   } else if (version === TitleEscrowVersion.V2) {
//     return await V2TitleEscrow.connect(titleEscrowAddress, signerOrProvider) as TitleEscrowCompat;
//   }
// };

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
