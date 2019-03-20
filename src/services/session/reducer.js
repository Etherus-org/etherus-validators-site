// @flow

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
} from './types';

const initialState = {
  address: null,
  blockNumber: 0,
  error: false,
  isConnected: false,
  isConnecting: false,
  isOwner: false,
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
      }
    default:
      return state;
  }
}
