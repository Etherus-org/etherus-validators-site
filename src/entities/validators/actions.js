// @flow
import { get } from 'lodash';
import { normalize } from 'normalizr';
import { SubmissionError } from 'redux-form';

// Constants
import { PAUSE_CAUSE_VOLUNTARILY } from './constants';

// Entities
import { UPDATE_ENTITIES } from 'entities/types';

// Services
import { closeModal } from 'services/modals';

// Types
import {
  // Create
  CREATE_VALIDATOR_REQUEST,
  CREATE_VALIDATOR_SUCCESS,
  CREATE_VALIDATOR_FAILURE,
  // Deposit
  DEPOSIT_VALIDATOR_REQUEST,
  DEPOSIT_VALIDATOR_SUCCESS,
  DEPOSIT_VALIDATOR_FAILURE,
  // Fetch
  FETCH_VALIDATORS_REQUEST,
  FETCH_VALIDATORS_SUCCESS,
  FETCH_VALIDATORS_FAILURE,
  // Pause
  PAUSE_VALIDATOR_REQUEST,
  PAUSE_VALIDATOR_SUCCESS,
  PAUSE_VALIDATOR_FAILURE,
  // Start
  START_VALIDATOR_REQUEST,
  START_VALIDATOR_SUCCESS,
  START_VALIDATOR_FAILURE,
  // Update
  UPDATE_VALIDATOR,
} from './types';

// Views
import {
  VALIDATOR_CREATE_MODAL_ID,
  VALIDATOR_DEPOSIT_MODAL_ID,
  VALIDATOR_PAUSE_MODAL_ID,
} from 'views/Validators';

// Utils
import { parseCompactedValidator } from 'utils/parse';

export const createValidator: Function = ({ address, deposit, hash, node }): Function =>
  (dispatch: Function, getState: Function, { account, web3 }): Promise => {
    dispatch({ type: CREATE_VALIDATOR_REQUEST });

    return new Promise((resolve: Function, reject: Function) => {
      account.methods
        .addInitialDeposit(hash, node, address)
        .send({
          from: window.ethereum.selectedAddress,
          value: web3.utils.toWei(deposit, 'ether'),
        })
          .on('confirmation', () =>
            dispatch(updateValidator(hash, { isFetching: false })))
          .on('error', reject)
          .on('transactionHash', (): void => {
            resolve();
            dispatch({ type: CREATE_VALIDATOR_SUCCESS, hash, payload: {
              address, deposit, hash, node,
              isFetching: true,
              pauseCause: 1,
            }});
            dispatch(closeModal(VALIDATOR_CREATE_MODAL_ID));
          })
    })
      .catch((error: Object) => {
        // eslint-disable-next-line
        console.error(error);
        dispatch({ type: CREATE_VALIDATOR_FAILURE, error: get(error, 'message')});
        throw new SubmissionError({ _error: get(error, 'message') });
      })
  }

export const depositValidator = ({ hash, deposit }): Function =>
  (dispatch: Function, getState: Function, { account, web3 }): Promise => {
    dispatch({ type: DEPOSIT_VALIDATOR_REQUEST, hash });
    const value = web3.utils.toWei(deposit, 'ether');

    return new Promise((resolve: Function, reject: Function) => {
      account.methods
        .addDeposit(hash)
        .send({
          value,
          from: window.ethereum.selectedAddress,
        })
          .on('transactionHash', (): void =>
            dispatch(closeModal(VALIDATOR_DEPOSIT_MODAL_ID)))
          .on('confirmation', () =>
            dispatch({ type: DEPOSIT_VALIDATOR_SUCCESS, hash, deposit: value / Math.pow(2, 32) }))
          .on('error', reject)
    })
     .catch((error: Object) =>
        dispatch({ type: DEPOSIT_VALIDATOR_FAILURE, hash, error: get(error, 'message')}));
  }

export const fetchValidators = (): Function =>
  (dispatch: Function, getState: Function, { contract, schema, web3 }): Promise => {
    dispatch({ type: FETCH_VALIDATORS_REQUEST });

    return contract.methods.getCompactedValidators.call()
      .then((res: Object) => {
        const data: Array<Object> = [];
        const validators: Array<string> = get(res, 'ValidatorsPubKeys', []);

        validators.forEach((hash: string, index: number) => {
          const validator: Object = parseCompactedValidator(get(res, `ValidatorsCompacted.${index}`));
          data.push({ ...validator, hash });
        });

        const normalizedData = normalize(data, [schema.validator]);

        dispatch({ type: UPDATE_ENTITIES, data: normalizedData, force: true });
        dispatch({ type: FETCH_VALIDATORS_SUCCESS });
      })
      .catch((error: Object) =>
        dispatch({ type: FETCH_VALIDATORS_FAILURE, error: get(error, 'message')}));
  }

export const pauseValidator: Function = ({ address, hash }): Promise =>
  (dispatch: Function, getState: Function, { account, web3 }): void => {
    dispatch({ type: PAUSE_VALIDATOR_REQUEST, hash });

    return new Promise((resolve: Function, reject: Function) => {
      account.methods
        .pauseValidation(hash, address, PAUSE_CAUSE_VOLUNTARILY, 0)
        .send({ from: window.ethereum.selectedAddress })
          .on('transactionHash', (): void =>
            dispatch(closeModal(VALIDATOR_PAUSE_MODAL_ID)))
          .on('confirmation', () =>
            dispatch({ type: PAUSE_VALIDATOR_SUCCESS, hash }))
          .on('error', reject)
    })
      .catch((error: Object) =>
        dispatch({ type: PAUSE_VALIDATOR_FAILURE, hash, error: get(error, 'message')}))
  }

export const startValidator: Function = (hash: string): Promise =>
  (dispatch: Function, getState: Function, { account, web3 }): void => {
    dispatch({ type: START_VALIDATOR_REQUEST, hash });

    return new Promise((resolve: Function, reject: Function) => {
      account.methods
        .resumeValidation(hash)
        .send({ from: window.ethereum.selectedAddress })
          .on('confirmation', () =>
            dispatch({ type: START_VALIDATOR_SUCCESS, hash }))
          .on('error', reject)
    })
      .catch((error: Object) =>
        dispatch({ type: START_VALIDATOR_FAILURE, hash, error: get(error, 'message')}))
  }

export const updateValidator: Function = (hash: string, payload: Object): Object =>
  ({ type: UPDATE_VALIDATOR, hash, payload });
