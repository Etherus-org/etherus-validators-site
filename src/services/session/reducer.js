// @flow
import { get } from 'lodash';

// Types
import {
  CONNECT_REQUEST,
  CONNECT_SUCCESS,
  CONNECT_FAILURE,
  // IS OWNER
  IS_OWNER_REQUEST,
  IS_OWNER_SUCCESS,
  // BLOCK NUMBER
  SET_CURRENT_BLOCK_NUMBER,
  SET_SUPPORT,
} from './types';

const initialState = {
  address: null,
  blockNumber: 0,
  error: false,
  isConnected: false,
  isConnecting: false,
  isOwner: false,
  isSupported: false,
  hasAccount: !!get(window, 'ethereum.selectedAddress'),
  networkId: get(window, 'ethereum.networkVersion', 0),
};

export default (state: Object = initialState, action: Object): Object => {
  switch (action.type) {
    case CONNECT_REQUEST:
      return { ...state, isConnecting: true };
    case CONNECT_SUCCESS:
      return {
        ...state,
        address: action.address,
        isConnected: true,
        isConnecting: false,
      };
    case CONNECT_FAILURE:
      return {
        ...state,
        error: action.error,
        isConnected: false,
        isConnecting: false,
      };

    case IS_OWNER_REQUEST:
      return { ...state, isConnecting: true };
    case IS_OWNER_SUCCESS:
      return {
        ...state,
        isOwner: action.isOwner,
      };
    case SET_CURRENT_BLOCK_NUMBER:
      return {
        ...state,
        blockNumber: action.blockNumber,
      };
    case SET_SUPPORT:
      return {
        ...state,
        isSupported: action.isSupported,
      }
    default:
      return state;
  }
}
