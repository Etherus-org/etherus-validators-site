import { get } from 'lodash';

const config = {
  'development': {
    CONTRACT_ADDRESS: '0x0000000000000000000000000000000000000fff',
    MIN_DEPOSIT: 2500,
    MIN_DEPOSIT_INCREMENT: 2500,
    NETWORK_ID: '32019',
    SYMBOL: 'ETR',
    URL: 'https://rpc.etherus.org',
  },
  'development:rinkeby': {
    CONTRACT_ADDRESS: '0xD019247742150fD1B55CA20010659976fe2b6a2f',
    MIN_DEPOSIT: 0.25,
    MIN_DEPOSIT_INCREMENT: 0.1,
    NETWORK_ID: '4',
    SYMBOL: 'ETH',
    URL: 'https://rinkeby.infura.io/v3/5915e2ed5f234c2aba3dfcb23b8f4337',
  },
};

export const getConfig: Function = (): Object =>
  get(config, 'development:rinkeby'); // process.env.NODE_ENV);

export const getContractAddress: Function = (): string =>
  get(config, `${process.env.NODE_ENV}.CONTRACT_ADDRESS`);

export const getNetworkId: Function = (): string =>
  get(config, `${process.env.NODE_ENV}.NETWORK_ID`);

export const getUrl: Function = (): string =>
  get(config, `${process.env.NODE_ENV}.URL`);

export default getConfig();
