import {TitleEscrowClonerFactory as V3TitleEscrowClonerFactory } from "@govtechsg/token-registry-v3";
// import {TitleEscrowCreatorFactory as V2TitleEscrowClonerFactory } from "@govtechsg/token-registry-v2";

export const TitleEscrowClonerFactory = () => {}

import { TradeTrustERC721Factory as V3TradeTrustERC721Factory } from "@govtechsg/token-registry-v3";
import { Overrides, Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/abstract-provider";
import {connectToTokenRegistry, TokenRegistryVersion} from '../utils'
// import { TokenRegistry } from "./TokenRegistry";
