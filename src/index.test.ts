import { providers } from 'ethers';
import { TokenRegistryFactory } from './contracts';
import { connectToTokenRegistry, getTokenRegistryVersion } from './contracts/utils';

describe("TradeTrustErc721", () => {
    it("should be able to surrender token", async () => {
      const provider = providers.getDefaultProvider("ropsten");
      // console.log(await connectToTokenRegistry("0x8c66ab9629b412106aef03e76c06beee8d7224a5", provider))
      // console.log(await getTokenRegistryVersion("0x8c66ab9629b412106aef03e76c06beee8d7224a5", provider));
      const tr = await TokenRegistryFactory.connect("0x8c66ab9629b412106aef03e76c06beee8d7224a5", provider)
      // console.log(tr)
      // expect(tr).toBeCalled()
    });
});
