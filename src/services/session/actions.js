import { get } from 'lodash';

// Entities
import {
  fetchValidator,
  getValidatorListByAddress,
} from 'entities/validators';

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

    return contract.methods.owner().call(null, (error: Object, ownerAddress: string): void => {
      error
        ? dispatch({ type: IS_OWNER_FAILURE, error: get(error, 'message') })
        : dispatch({ type: IS_OWNER_SUCCESS, isOwner: address.toLowerCase() === ownerAddress.toLowerCase() })
    });
  }

export const connectMetamask: Function = (): Function =>
  (dispatch: Function, getState: Function): Object<Promise> => {
    const state = getState();
    dispatch({ type: CONNECT_REQUEST });

    return window.ethereum.enable()
      .then((data: Array<string>): void => {
        getValidatorListByAddress(state, data[0])
          .filter(({ address, pauseCause }): bool => address === data[0])
          .forEach(({ address, hash }): void =>
            dispatch(fetchValidator(hash)));

        dispatch({ type: CONNECT_SUCCESS, address: data[0] });
        dispatch(checkOwnership(data[0]));

        window.ethereum.on('accountsChanged', (data: Array<string>) => {
          dispatch({ type: CONNECT_SUCCESS, address: data[0], isChanged: true });
          dispatch(checkOwnership(data[0]));
        });
      })
      .catch((error: Object): void =>
        dispatch({ type: CONNECT_FAILURE, error: get(error, 'message')}));
  }
