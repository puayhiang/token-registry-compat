import { TradeTrustERC721 } from "@govtechsg/token-registry-v2";

export interface V2TokenRegistry extends TradeTrustERC721 {
    test(test_input: string): string;
}
