import { ethers, providers } from 'ethers';
import { TokenRegistryFactory } from './contracts';


describe("TradeTrustErc721", () => {
    it("should be able to surrender token", async () => {
      const provider = providers.getDefaultProvider("ropsten");
      // console.log(await connectToTokenRegistry("0x8c66ab9629b412106aef03e76c06beee8d7224a5", provider))
      // console.log(await getTokenRegistryVersion("0x8c66ab9629b412106aef03e76c06beee8d7224a5", provider));
      const wallet = ethers.Wallet.createRandom();
      const connectedWallet = wallet.connect(provider);
      const tr = await TokenRegistryFactory.connect("0x8c66ab9629b412106aef03e76c06beee8d7224a5", connectedWallet)

      // console.log(await tr['mintTitle']('0x8c66ab9629b412106aef03e76c06beee8d7224a5','0x8c66ab9629b412106aef03e76c06beee8d7224a5','0x8c66ab9629b412106aef03e76c06beee8d7224a5'))
      // console.log(tr)
      console.log(await tr.test('rewrite'))
      // tr['mintTitle']()
      // console.log(tr)
      // expect(tr).toBeCalled()
    });
});
