/* eslint-disable */
// @flow
import { get, has } from 'lodash';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import Web3 from 'web3';

// API
import config from 'api/config';
import * as schema from 'api/schema';

// Assets
import contractInterface from 'assets/contract.json';

// Middleware
import thunkMiddleware from 'redux-thunk';

// Reducers
import { reducer as form } from 'redux-form';

import entities from './entities/reducer';
import services from './services/reducer';
import views from './views/reducer';

// Services
import {
  getSession,
  SET_ACCOUNT,
  SET_CURRENT_BLOCK_NUMBER,
  SET_HAS_ACCOUNT,
  SET_NETWORK_ID, SET_PRIVATE_PROVIDER,
  SET_SUPPORT,
} from 'services/session';

const reducer = combineReducers({
  entities,
  form,
  services,
  views,
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;


function handleChainChanged(chainId) {
  // We recommend reloading the page, unless you must do otherwise.
  window.location.reload();
}

export default (history: Object): Object => {
  let privateWeb3;

  const web3 = new Web3(config.URL);

  const store = createStore(reducer, composeEnhancers(
    applyMiddleware(
      thunkMiddleware.withExtraArgument({
        history, schema, web3,
        contract: new web3.eth.Contract(
          contractInterface,
          config.CONTRACT_ADDRESS,
        ),
      }),
    ),
  ));

  if (window.ethereum && window.ethereum.isMetaMask) {
    store.dispatch({ type: SET_SUPPORT, isSupported: true });

    window.ethereum.on("chainChanged", handleChainChanged);

    window.addEventListener("eip6963:announceProvider",
      async (event: EIP6963AnnounceProviderEvent) => {
        console.log("announceProvider", event.detail);
        let provider = event.detail.provider;
        const chainId = await provider.request({ method: "eth_chainId" });
        console.log('chainID', chainId);

        if(chainId === '0x7d13') {
          privateWeb3 = new Web3(provider);
//          provider.on("accountsChanged", (data) => console.log("Accounts changed", data))
          store.dispatch({
            type: SET_NETWORK_ID,
            networkId: chainId,
          });
          store.dispatch({ type: SET_PRIVATE_PROVIDER, privateProvider: provider });
        }

      }
    );
    // Notify event listeners and other parts of the dapp that a provider is requested.
    window.dispatchEvent(new Event("eip6963:requestProvider"))

  }

  web3.eth.getBlockNumber()
    .then(async (blockNumber: number): void => {

      store.dispatch({ type: SET_CURRENT_BLOCK_NUMBER, blockNumber });

      web3.eth.subscribe('newBlockHeaders', (error, result) => {
        if (!error) {
          store.dispatch({
            type: SET_CURRENT_BLOCK_NUMBER,
            blockNumber: get(result, 'number')
          });
        }
      });
    });

  return store;
}

