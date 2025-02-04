import { isNetworkType, NetworkType } from './types';

describe('types', () => {
  it('isNetworkType', () => {
    expect(isNetworkType({})).toBe(false);
    expect(isNetworkType(1)).toBe(false);
    expect(isNetworkType('test')).toBe(false);
    expect(isNetworkType('mainnet')).toBe(true);
    expect(isNetworkType(NetworkType.mainnet)).toBe(true);
    expect(isNetworkType(NetworkType.goerli)).toBe(true);
    expect(isNetworkType(NetworkType.sepolia)).toBe(true);
    expect(isNetworkType(NetworkType.localhost)).toBe(true);
    expect(isNetworkType(NetworkType.rpc)).toBe(true);
  });
});
