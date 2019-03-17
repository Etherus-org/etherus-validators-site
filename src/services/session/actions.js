import { get } from 'lodash';

// Types
import {
  CONNECT_REQUEST,
  CONNECT_SUCCESS,
  CONNECT_FAILURE,
} from './types';

export const connectMetamask: Function = (): Function =>
  (dispatch: Function): Object<Promise> => {
    dispatch({ type: CONNECT_REQUEST });

    return window.ethereum.enable()
      .then((data: Array<string>): void =>
        dispatch({ type: CONNECT_SUCCESS, address: data[0] }))
      .catch((error: Object): void =>
        dispatch({ type: CONNECT_FAILURE, error: get(error, 'message')}));
  }
