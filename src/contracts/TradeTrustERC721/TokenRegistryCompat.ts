import {TradeTrustERC721 as V2TradeTrustERC721} from "@govtechsg/token-registry-v2/dist/types/contracts";
import {TradeTrustERC721 as V3TradeTrustERC721} from "@govtechsg/token-registry-v3";

export type TokenRegistryCompat = V2TradeTrustERC721 | V3TradeTrustERC721;
