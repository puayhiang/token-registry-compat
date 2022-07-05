import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import { ERC165 } from "./ERC165"

export class ERC165Factory {
  static connect(address: string, signerOrProvider: Signer | Provider): ERC165{
    const contractInterfaceString = '["function supportsInterface(bytes4 interfaceId) view returns (bool)"]'
    return new Contract(address, contractInterfaceString, signerOrProvider) as ERC165;
  }
}
