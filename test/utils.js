import { TokenRegistryFactory } from "../src";

export const deployTokenRegistry = async (wallet, name = "foo", symbol = "bar") => {
  const registryFactory = new TokenRegistryFactory(
    wallet
  );
  const tokenRegistry = await registryFactory.deploy(name, symbol);
  return tokenRegistry;
}
