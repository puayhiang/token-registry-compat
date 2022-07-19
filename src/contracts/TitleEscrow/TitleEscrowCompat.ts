import {TitleEscrow as V2TitleEscrow} from "@govtechsg/token-registry-v2";
import {TitleEscrowCloneable as V3TitleEscrow} from "@govtechsg/token-registry-v3";

export type TitleEscrowCompat = V2TitleEscrow | V3TitleEscrow;
