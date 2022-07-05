import { Contract } from "ethers";

export interface ERC165 extends Contract {
  supportsInterface: (interfaceId: string) => Promise<boolean>;
}
