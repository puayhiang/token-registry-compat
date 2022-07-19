import { ContractTransaction, ethers, providers } from "ethers";
import { TokenRegistryFactory, TokenRegistry } from "../src/contracts";

jest.setTimeout(60000);

describe("Token Registry", () => {

  describe("Token Registry V3", () => {
    it("should be able to deploy new token registry", async () => {
      const provider = providers.getDefaultProvider("ropsten");
      const wallet = new ethers.Wallet(
        "0x1504df5f1fdb5bbf655441cf5a77ba757308f5cd62e54d9dbb9ac609f8ddd64d"
      );
      const connectedWallet = wallet.connect(provider);
      const registryFactory: TokenRegistryFactory = new TokenRegistryFactory(
        connectedWallet
      );
      const tokenRegistry = await registryFactory.deploy("TKN", "TKN");
      expect(tokenRegistry).toBeDefined();
    });
  });
  describe("Token Registry V2", () => {
    it("should be able to mint token", async () => {
      const provider = providers.getDefaultProvider("ropsten");
      const wallet = new ethers.Wallet(
        "0x1504df5f1fdb5bbf655441cf5a77ba757308f5cd62e54d9dbb9ac609f8ddd64d"
      );
      const connectedWallet = wallet.connect(provider);
      const tr: TokenRegistry = await TokenRegistryFactory.connect(
        "0x8c66ab9629b412106aef03e76c06beee8d7224a5",
        connectedWallet
      );
      const transaction: ContractTransaction = await tr.mintTitle(
        "0xb212660Da58D478D227E471db1e4D21CA25d9E1E",
        "0xb212660Da58D478D227E471db1e4D21CA25d9E1E",
        "0x8c66ac9629b412107bef03e76c06beee8d7224a5"
      );
      expect(transaction).toBeDefined();
    });
  });
});
