/* eslint-disable */
// @flow
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import Web3 from 'web3';

// API
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

export default (history: Object): Object => {
  const privateWeb3 = new Web3(window.ethereum);
  const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/5915e2ed5f234c2aba3dfcb23b8f4337'));

  return createStore(reducer, composeEnhancers(
    applyMiddleware(
      thunkMiddleware.withExtraArgument({
        history, schema, web3,
        account: new privateWeb3.eth.Contract(
          contractInterface,
          '0xD019247742150fD1B55CA20010659976fe2b6a2f',
          { from: window.ethereum.selectedAddress }
        ),
        contract: new web3.eth.Contract(
          contractInterface,
          '0xD019247742150fD1B55CA20010659976fe2b6a2f'
        ),
      }),
    ),
  ));
}

