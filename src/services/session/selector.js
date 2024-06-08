import { get } from 'lodash';

export const getAddress: Function = (state: Object): Function =>
  get(state, 'services.session.address');

export const getBlockNumber: Function = (state: Object): Function =>
  get(state, 'services.session.blockNumber');

export const getSession: Function = (state: Object): Function =>
  get(state, 'services.session');

export const getPrivateProvider: Function = (state: Object): Function =>
  get(state, 'services.session.privateProvider');

export const getAccount: Function = (state: Object): Function =>
  get(state, 'services.session.account');

export const isChanged: Function = (state: Object): Function =>
  get(state, 'services.session.isChanged');

export const isConnected: Function = (state: Object): Function =>
  get(state, 'services.session.isConnected');

export const isConnecting: Function = (state: Object): Function =>
  get(state, 'services.session.isConnecting');

export const isOwner: Function = (state: Object): Function =>
  get(state, 'services.session.isOwner');

export const isSupported: Function = (state: Object): Function =>
  get(state, 'services.session.isSupported');

export const isValidatorOwner: Function = (state: Object, hash: string): Function =>
  getAddress(state) === hash;
