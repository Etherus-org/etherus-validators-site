// @flow

// Types
import {
  CONNECT_REQUEST,
  CONNECT_SUCCESS,
  CONNECT_FAILURE,
} from './types';

const initialState = {
  address: null,
  error: false,
  isConnected: false,
  isConnecting: false,
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
        isConnected: false,
        isConnecting: false,
      };
    default:
      return state;
  }
}
