import {TradeTrustERC721 as V2TradeTrustERC721} from "@govtechsg/token-registry-v2/dist/types/contracts";
// import { V2TokenRegistry } from "./compatibility/V2TokenRegistry";
import {TradeTrustERC721 as V3TradeTrustERC721} from "@govtechsg/token-registry-v3";
// import "./compatibility/V2TradeTrustERC721"

export type TokenRegistryCompat = V2TradeTrustERC721 | V3TradeTrustERC721;
