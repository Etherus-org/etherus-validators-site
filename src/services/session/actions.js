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
  IS_OWNER_FAILURE, SET_HAS_ACCOUNT, SET_ACCOUNT,
} from './types';
import contractInterface from "../../assets/contract.json";
import config from "../../api/config";
import Web3 from "web3";
import {getPrivateProvider} from "./selector";

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
  async (dispatch: Function, getState: Function): Object<Promise> => {
    const state = getState();
    dispatch({ type: CONNECT_REQUEST });

    try {
      const privateProvider = getPrivateProvider(state);
      // console.log(privateWeb3);
      const accounts = await privateProvider
        .request({method: "eth_requestAccounts"});
      const privateWeb3 = new Web3(privateProvider);

      privateProvider.on("accountsChanged", (data: Array<string>) => {
        console.log('accounts changed', data)
        const account = new privateWeb3.eth.Contract(
          contractInterface,
          config.CONTRACT_ADDRESS,
          { from: data[0] }
        );
        dispatch({ type: SET_ACCOUNT, account });

        dispatch({ type: CONNECT_SUCCESS, address: data[0], isChanged: true });
        dispatch(checkOwnership(data[0]));
      });

      const currentAddress = accounts[0];

      const account = new privateWeb3.eth.Contract(
        contractInterface,
        config.CONTRACT_ADDRESS,
        { from: currentAddress }
      );

      dispatch({ type: SET_HAS_ACCOUNT });
      dispatch({ type: SET_ACCOUNT, account });

      dispatch({ type: CONNECT_SUCCESS, address: currentAddress });
      dispatch(checkOwnership(currentAddress));

      getValidatorListByAddress(state, currentAddress)
        .filter(({ address, pauseCause }): bool => address === currentAddress)
        .forEach(({ address, hash }): void =>
          dispatch(fetchValidator(hash)));

      console.log('accounts', accounts);
    } catch (error) {
      console.error(error);
      dispatch({ type: CONNECT_FAILURE, error: get(error, 'message')});
    }

  }
