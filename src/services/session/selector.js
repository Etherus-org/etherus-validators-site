import { get } from 'lodash';

export const getAddress: Function = (state: Object): Function =>
  get(state, 'services.session.address');

export const getSession: Function = (state: Object): Function =>
  get(state, 'services.session');

export const isConnected: Function = (state: Object): Function =>
  get(state, 'services.session.isConnected');

export const isConnecting: Function = (state: Object): Function =>
  get(state, 'services.session.isConnecting');

export const isOwner: Function = (state: Object, hash: string): Function =>
  getAddress(state) === hash;
