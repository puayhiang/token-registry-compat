
import { TokenRegistryCompat } from "../TokenRegistryCompat";
import { V2TokenRegistry } from "./V2TokenRegistry";
// import { TradeTrustERC721 as V2TradeTrustERC721} from "@govtechsg/token-registry-v2/dist/types/contracts";

// import { ethers } from "ethers"

// console.log(V2TokenRegistry)
// declare module "@govtechsg/token-registry-v3/dist/types/contracts" {
//   interface TradeTrustERC721 {
//     test(test_input: string): string;
//   }
// }

export function v2Parity (registry: TokenRegistryCompat ): V2TokenRegistry{
  registry.test = (test_input: string) => {
    return test_input + ":"
  };
  return registry;
}



// V2TradeTrustERC721.prototype.estimateGas.mintTitle = function (beneficiary: string, holder: string, tokenId: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }) : Promise<BigNumber>{
//   return Promise.resolve(BigNumber.from("0x0"));
// };

// V2TradeTrustERC721.prototype.estimateGas["mintTitle(address,address,uint256)"] = V2TradeTrustERC721.prototype.estimateGas.mintTitle;

// V2TradeTrustERC721.prototype.callStatic.mintTitle = function (beneficiary: string, holder: string, tokenId: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }) : Promise<string>{
//   throw new Error("V2 Token Registry minting unsupported")
// };

// V2TradeTrustERC721.prototype.callStatic["mintTitle(address,address,uint256)"] = V2TradeTrustERC721.prototype.callStatic.mintTitle;

// V2TradeTrustERC721.prototype.populateTransaction.mintTitle = function (beneficiary: string, holder: string, tokenId: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }) : Promise<PopulatedTransaction>{
//   throw new Error("V2 Token Registry minting unsupported")
// };

// V2TradeTrustERC721.prototype.populateTransaction["mintTitle(address,address,uint256)"] = V2TradeTrustERC721.prototype.populateTransaction.mintTitle;

// const run = function (beneficiary: string, holder: string, tokenId: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }) : Promise<ContractTransaction>{
//   console.log("Run is Running")
//   throw new Error("V2 Token Registry minting unsupported")
//   // return new ContractTransaction.
// };

// TradeTrustERC721.prototype.mintTitle = run;

// TradeTrustERC721.prototype["mintTitle(address,address,uint256)"] = run;
