import { Wallet, providers.Provider } from "ethers";

interface ConnectToTokenRegistryArgs {
  address: string;
  wallet: Wallet | ConnectedSigner;
}

interface ConnectToTokenReturnType {
  contract: TradeTrustERC721 | V2TradeTrustERC721;
  isV3: boolean;
}

//   interfaceId Title                 interfaceId     V2     V3
// --------------------------------- -------------- ------- -------
//  _INTERFACE_ID_ERC165              0x01ffc9a7     true    true
//  _INTERFACE_ID_ERC721              0x80ac58cd     true    true
//  _INTERFACE_ID_ERC721_ENUMERABLE   0x780e9d63     true    false
//  _INTERFACE_ID_ERC721_METADATA     0x5b5e139f     true    true
//  _INTERFACE_ID_TRADETRUST_ERC721   0x9f9e69f3     true    false
//  _INTERFACE_ID_TITLEESCROW         0xdcce2211     false   false
export const checkTokenRegistryVersion = async ({ address, wallet }: ConnectToTokenRegistryArgs): Promise<boolean> => {
  const tradeTrustERC721Interfaces: TradeTrustERC721Interface = TradeTrustERC721Factory.createInterface();
  const supportInterfacesFunctionFragment: FunctionFragment =
    tradeTrustERC721Interfaces.functions["supportsInterface(bytes4)"];
  const supportInterfacesInterface: string = supportInterfacesFunctionFragment.format(utils.FormatTypes.full);
  const testContract: Contract = new Contract(address, JSON.stringify([supportInterfacesInterface]), wallet);
  const connectedTestContract: Contract = testContract.connect(wallet);

  const isV2 = await connectedTestContract.callStatic["supportsInterface(bytes4)"]("0x9f9e69f3");
  const isV3 = !isV2;
  return isV3;
};

export const connectToTokenRegistry = async ({
  address,
  wallet,
}: ConnectToTokenRegistryArgs): Promise<ConnectToTokenReturnType> => {
  const isV3 = await checkTokenRegistryVersion({ address, wallet });
  if (isV3) {
    const tokenRegistry = await TradeTrustERC721Factory.connect(address, wallet);
    return { isV3: isV3, contract: tokenRegistry };
  } else {
    const tokenRegistry = await TradeTrustErc721Factory.connect(address, wallet);
    return { isV3: isV3, contract: tokenRegistry };
  }
};

interface ConnectToTitleEscrowArgs {
  tokenId: string;
  address: string;
  wallet: Wallet | ConnectedSigner;
}

interface ConnectToTitleEscrowReturnType {
  isV3: boolean;
  contract: TitleEscrowInstanceType;
}

type TitleEscrowInstanceType = ReturnType<
  typeof TitleEscrowCloneableFactory.connect | typeof TitleEscrowFactory.connect
>;

export const connectToTitleEscrow = async ({
  tokenId,
  address,
  wallet,
}: ConnectToTitleEscrowArgs): Promise<ConnectToTitleEscrowReturnType> => {
  const { isV3, contract: tokenRegistry } = await connectToTokenRegistry({ address, wallet });
  const titleEscrowAddress = await tokenRegistry.ownerOf(tokenId);
  return { isV3: isV3, contract: await connectToTitleEscrowFactory(isV3, titleEscrowAddress, wallet) };
};

export const connectToTitleEscrowFactory = async (
  isV3: boolean,
  titleEscrowAddress: string,
  wallet: Wallet | ConnectedSigner
): Promise<TitleEscrowInstanceType> => {
  if (isV3) {
    return await TitleEscrowCloneableFactory.connect(titleEscrowAddress, wallet);
  } else {
    return await TitleEscrowFactory.connect(titleEscrowAddress, wallet);
  }
};

interface Erc165Contract extends Contract {
  supportsInterface: (interfaceId: string) => Promise<boolean>;
}

export const supportsInterface = async (
  contractInstance: Erc165Contract,
  interfaceId: string,
  staticCall = true
): Promise<boolean | undefined> => {
  let isSameInterfaceType;
  try {
    if (staticCall) {
      isSameInterfaceType = await contractInstance.callStatic.supportsInterface(interfaceId);
    } else {
      isSameInterfaceType = await contractInstance.supportsInterface(interfaceId);
    }
    return isSameInterfaceType;
  } catch (e) {
    if (e instanceof Error) {
      if (e.message.includes("revert") || e.message.includes("cannot estimate gas")) {
        return false;
      }
      throw e;
    }
  }
};

