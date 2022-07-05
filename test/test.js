// const { expect } = require("chai").use(require("chai-as-promised"));
// const chai = require("chai");
// const { solidity } = require("ethereum-waffle");

// import { TokenRegistryFactory } from "../src"

// chai.use(solidity);

// describe("TradeTrustErc721", async () => {

//   it("should have the correct ERC165 interface support", async () => {
//     // should support
//     // 1. ITradeTrustERC721 (so the extra stuff we tacked on to ERC721 to handle surrender)
//     // 2. ITitleEscrowCreator (to act as a TE factory)
//     // 3. IERC721 (basic so that someone expecting a token registry knows how to work with it)

//     const tradeTrustERC721Instance = await Erc721.connect(carrier1).deploy("foo", "bar");
//     const ITradeTrustERC721InterfaceId = "0x14ac11d9";
//     const IERC721InterfaceId = "0x80ac58cd";
//     const ITitleEscrowCreatorInterfaceId = "0xfcd7c1df";
//     expect(await tradeTrustERC721Instance.supportsInterface(ITradeTrustERC721InterfaceId)).to.be.true;
//     expect(await tradeTrustERC721Instance.supportsInterface(IERC721InterfaceId)).to.be.true;
//     expect(await tradeTrustERC721Instance.supportsInterface(ITitleEscrowCreatorInterfaceId)).to.be.true;
//   });
// });
