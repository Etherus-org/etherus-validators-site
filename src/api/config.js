// @flow
import { get } from 'lodash';

const config = {
  'development': {
    CONTRACT_ADDRESS: '0x0000000000000000000000000000000000000fff',
    MIN_DEPOSIT: 2500,
    MIN_DEPOSIT_INCREMENT: 10,
    NETWORK_ID: '0x7d13',
    SYMBOL: 'ETR',
    URL: 'wss://rpc.etherus.org',
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
