// @flow
import { get } from 'lodash';

const config = {
  'development': {
    CONTRACT_ADDRESS: '0x93275283bf79d0f3a4521b006b6504768fc38d9a',
    MIN_DEPOSIT: 0.25,
    MIN_DEPOSIT_INCREMENT: 0.1,
    NETWORK_ID: '0x1',
    SYMBOL: 'ETH',
    URL: 'https://rinkeby.infura.io/v3/5915e2ed5f234c2aba3dfcb23b8f4337',
  },
  'production': {
    CONTRACT_ADDRESS: '0x0000000000000000000000000000000000000fff',
    MIN_DEPOSIT: 2500,
    MIN_DEPOSIT_INCREMENT: 10,
    NETWORK_ID: '0x7d13',
    SYMBOL: 'ETR',
    URL: 'wss://rpc.etherus.org',
  },
};

export const getConfig: Function = (): Object =>
  get(config, process.env.NODE_ENV);

export const getContractAddress: Function = (): string =>
  get(config, `${process.env.NODE_ENV}.CONTRACT_ADDRESS`);

export const getNetworkId: Function = (): string =>
  get(config, `${process.env.NODE_ENV}.NETWORK_ID`);

export const getUrl: Function = (): string =>
  get(config, `${process.env.NODE_ENV}.URL`);

export default getConfig();
