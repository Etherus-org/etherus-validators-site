import { get } from 'lodash';

// Types
import {
  CONNECT_REQUEST,
  CONNECT_SUCCESS,
  CONNECT_FAILURE,
  // IS OWNER
  IS_OWNER_REQUEST,
  IS_OWNER_SUCCESS,
  IS_OWNER_FAILURE,
} from './types';

export const checkOwnership: Function = (address: string): Function =>
  (dispatch: Function, getState: Function, { contract }): Promise => {
    dispatch({ type: IS_OWNER_REQUEST });

    return contract.methods.owner.call()
      .then((ownerAddress: string) =>
        dispatch({ type: IS_OWNER_SUCCESS, isOwner: address.toLowerCase() === ownerAddress.toLowerCase() }))
      .catch((error: Object): void =>
        dispatch({ type: IS_OWNER_FAILURE, error: get(error, 'message') }))
  }

export const connectMetamask: Function = (): Function =>
  (dispatch: Function): Object<Promise> => {
    dispatch({ type: CONNECT_REQUEST });

    return window.ethereum.enable()
      .then((data: Array<string>): void => {
        dispatch({ type: CONNECT_SUCCESS, address: data[0] });
        dispatch(checkOwnership(data[0]));
      })
      .catch((error: Object): void =>
        dispatch({ type: CONNECT_FAILURE, error: get(error, 'message')}));
  }
