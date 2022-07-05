// // import { TokenRegistryV2, TokenRegistryV3 } from "./TokenRegistry";
// // import { V2TradeTrustERC721, V3TradeTrustERC721 } from "./TokenRegistry";

// import { TradeTrustERC721 as V2TradeTrustERC721 } from "@govtechsg/token-registry-v2/dist/types/contracts";
// import { TradeTrustERC721Interface } from "@govtechsg/token-registry-v3/dist/types/contracts/TradeTrustERC721";
// import {
//   BigNumber,
//   // BigNumberish,
//   BytesLike,
//   CallOverrides,
//   ContractTransaction,
//   Overrides,
//   PopulatedTransaction,
// } from "ethers";

// import {
//   BigNumberish
// } from "@ethersproject/bignumber/lib/bignumber";

// // V2TradeTrustERC721.f
// // declare module "@govtechsg/token-registry-v2/dist/types/contracts" {
// //   interface TradeTrustERC721 {

// //     interface: TradeTrustERC721Interface;

// //     functions: {
// //       mintTitle(
// //         beneficiary: string,
// //         holder: string,
// //         tokenId: BigNumberish,
// //         overrides?: Overrides & { from?: string | Promise<string> }
// //       ): Promise<BigNumber>;

// //       "mintTitle(address,address,uint256)"(
// //         beneficiary: string,
// //         holder: string,
// //         tokenId: BigNumberish,
// //         overrides?: Overrides & { from?: string | Promise<string> }
// //       ): Promise<BigNumber>;

// //     };

// //     callStatic: {


// //       mintTitle(
// //         beneficiary: string,
// //         holder: string,
// //         tokenId: BigNumberish,
// //         overrides?: Overrides & { from?: string | Promise<string> }
// //       ): Promise<ContractTransaction>;

// //       "mintTitle(address,address,uint256)"(
// //         beneficiary: string,
// //         holder: string,
// //         tokenId: BigNumberish,
// //         overrides?: Overrides & { from?: string | Promise<string> }
// //       ): Promise<ContractTransaction>;
// //     };
// //     estimateGas: {
// //       mintTitle(
// //         beneficiary: string,
// //         holder: string,
// //         tokenId: BigNumberish,
// //         overrides?: CallOverrides
// //       ): Promise<string>;

// //       "mintTitle(address,address,uint256)"(
// //         beneficiary: string,
// //         holder: string,
// //         tokenId: BigNumberish,
// //         overrides?: CallOverrides
// //       ): Promise<string>;
// //     };

// //     populateTransaction: {
// //       mintTitle(
// //         beneficiary: string,
// //         holder: string,
// //         tokenId: BigNumberish,
// //         overrides?: Overrides & { from?: string | Promise<string> }
// //       ): Promise<PopulatedTransaction>;

// //     "mintTitle(address,address,uint256)"(
// //         beneficiary: string,
// //         holder: string,
// //         tokenId: BigNumberish,
// //         overrides?: Overrides & { from?: string | Promise<string> }
// //       ): Promise<PopulatedTransaction>;
// //     };

// //     mintTitle(
// //       beneficiary: string,
// //       holder: string,
// //       tokenId: BigNumberish,
// //       overrides?: Overrides & { from?: string | Promise<string> }
// //     ): Promise<ContractTransaction>;

// //     "mintTitle(address,address,uint256)"(
// //       beneficiary: string,
// //       holder: string,
// //       tokenId: BigNumberish,
// //       overrides?: Overrides & { from?: string | Promise<string> }
// //     ): Promise<ContractTransaction>;

// //   }
// // }


// // V2TradeTrustERC721.prototype.estimateGas.mintTitle = function (beneficiary: string, holder: string, tokenId: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }) : Promise<BigNumber>{
// //   return Promise.resolve(BigNumber.from("0x0"));
// // };

// // V2TradeTrustERC721.prototype.estimateGas["mintTitle(address,address,uint256)"] = V2TradeTrustERC721.prototype.estimateGas.mintTitle;


// // V2TradeTrustERC721.prototype.callStatic.mintTitle = function (beneficiary: string, holder: string, tokenId: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }) : Promise<string>{
// //   throw new Error("V2 Token Registry minting unsupported")
// // };

// // V2TradeTrustERC721.prototype.callStatic["mintTitle(address,address,uint256)"] = V2TradeTrustERC721.prototype.callStatic.mintTitle;


// // V2TradeTrustERC721.prototype.populateTransaction.mintTitle = function (beneficiary: string, holder: string, tokenId: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }) : Promise<PopulatedTransaction>{
// //   throw new Error("V2 Token Registry minting unsupported")
// // };

// // V2TradeTrustERC721.prototype.populateTransaction["mintTitle(address,address,uint256)"] = V2TradeTrustERC721.prototype.populateTransaction.mintTitle;

// const run = function (beneficiary: string, holder: string, tokenId: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }) : Promise<ContractTransaction>{
//   throw new Error("V2 Token Registry minting unsupported")
// };

// V2TradeTrustERC721.prototype.mintTitle = run;

// V2TradeTrustERC721.prototype["mintTitle(address,address,uint256)"] = run;


