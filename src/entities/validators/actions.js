// @flow
import { get } from 'lodash';
import { normalize } from 'normalizr';
import { SubmissionError } from 'redux-form';

// Constants
import { PAUSE_CAUSE_UNTIL_FINE } from './constants';

// Entities
import { UPDATE_ENTITIES } from 'entities/types';

// Services
import { closeModal } from 'services/modals';

// Selector
import { getValidatorDeposit } from './selector';

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
  FETCH_VALIDATOR_REQUEST,
  FETCH_VALIDATOR_SUCCESS,
  FETCH_VALIDATOR_FAILURE,
  // Fetch list
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
  // Withdraw
  WITHDRAW_VALIDATOR_REQUEST,
  WITHDRAW_VALIDATOR_SUCCESS,
  WITHDRAW_VALIDATOR_FAILURE,
} from './types';

// Views
import {
  VALIDATOR_CREATE_MODAL_ID,
  VALIDATOR_DEPOSIT_MODAL_ID,
  VALIDATOR_PAUSE_MODAL_ID,
} from 'views/Validators';

// Utils
import { checkTransaction } from './utils';
import { convertDeposit } from 'utils/convert';
import { parseCompactedValidator } from 'utils/parse';
import {getAccount, getAddress} from "../../services/session";

export const createValidator: Function = ({ address, deposit, hash, node }): Function =>
  (dispatch: Function, getState: Function, { web3 }): Promise => {
    dispatch({ type: CREATE_VALIDATOR_REQUEST });

    return new Promise((resolve: Function, reject: Function) => {
      const value = web3.utils.toWei(deposit, 'ether');
      const state = getState();
      const account = getAccount(state);
      const selectedAddress = getAddress(state);

      const formattedHash = `0x${hash.replace(/^(0[xX]{1})?/, '')}`;
      const formattedNode = `0x${node.replace(/^(0[xX]{1})?/, '')}`;
      const formattedAddress = `0x${address.replace(/^(0[xX]{1})?/, '')}`;

      account.methods
        .addInitialDeposit(
          formattedHash,
          formattedNode,
          formattedAddress,
        )
        .send({
          value,
          from: selectedAddress,
        })
          .on('error', reject)
          .on('transactionHash', (txHash): void => {
            resolve();

            dispatch({ type: CREATE_VALIDATOR_SUCCESS, hash: formattedHash.toLowerCase(), payload: {
              address: formattedAddress,
              deposit: convertDeposit(deposit),
              hash: formattedHash.toLowerCase(),
              isFetching: true,
              node: formattedNode,
              pauseCause: 1,
            }});

            dispatch(closeModal(VALIDATOR_CREATE_MODAL_ID));

            // eslint-disable-next-line
            checkTransaction({
              reject, txHash, web3,
              resolve: () => {
                dispatch(updateValidator(hash, { isFetching: false }));
              },
            });

            document
              .getElementById(hash)
              .scrollIntoView();
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
  (dispatch: Function, getState: Function, { web3 }): Promise => {
    dispatch({ type: DEPOSIT_VALIDATOR_REQUEST, hash });
    const state = getState();
    const value = web3.utils.toWei(deposit, 'ether');
    const account = getAccount(state);
    const selectedAddress = getAddress(state);

    const currentDeposit = getValidatorDeposit(state, hash);
    const newDeposit = value / Math.pow(2, 32);

    return new Promise((resolve: Function, reject: Function) => {
      account.methods
        .addDeposit(hash)
        .send({
          value,
          from: selectedAddress,
        })
          .on('transactionHash', (txHash): void => {
            dispatch(closeModal(VALIDATOR_DEPOSIT_MODAL_ID));

            // eslint-disable-next-line
            checkTransaction({
              reject, txHash, web3,
              resolve: () => {
                dispatch({
                  type: DEPOSIT_VALIDATOR_SUCCESS, hash,
                  deposit: currentDeposit + newDeposit,
                });
              },
            });
          })
          .on('error', reject)
    })
     .catch((error: Object) =>
        dispatch({ type: DEPOSIT_VALIDATOR_FAILURE, hash, error: get(error, 'message')}));
  }

export const fetchValidator = (hash: string): Function =>
  (dispatch: Function, getState: Function, { contract }): void => {
    dispatch({ type: FETCH_VALIDATOR_REQUEST, hash });

    return contract.methods.getValidator(hash)
      .call(null, (error: Object, res: Object): void => {
        if (error) {
          dispatch({ type: FETCH_VALIDATOR_FAILURE, hash, error: get(error, 'message') });
        } else {
          dispatch({ type: FETCH_VALIDATOR_SUCCESS, hash, payload: {
            pauseBlockNumber: get(res, 'pauseBlockNumber'),
            punishValue: get(res, 'punishValue'),
          }});
        }
      });
  }

export const fetchValidators = (): Function =>
  (dispatch: Function, getState: Function, { contract, schema, web3 }): Promise => {
    dispatch({ type: FETCH_VALIDATORS_REQUEST });

    return contract.methods.getCompactedValidators().call(null, (error: Object, res: Object): void => {
      if (error) {
        dispatch({ type: FETCH_VALIDATORS_FAILURE, error: get(error, 'message')})
      } else {
        const data: Array<Object> = [];
        const punishedValidators = [];
        const validators: Array<string> = get(res, 'ValidatorsPubKeys', []);

        validators.forEach((hash: string, index: number) => {
          const validator: Object = parseCompactedValidator(get(res, `ValidatorsCompacted.${index}`));
          data.push({ ...validator, hash: hash.toLowerCase() });

          if (validator.pauseCause > 1) {
            punishedValidators.push(hash.toLowerCase());
          }
        });

        const normalizedData = normalize(data, [schema.validator]);

        dispatch({ type: UPDATE_ENTITIES, data: normalizedData, force: true });
        dispatch({ type: FETCH_VALIDATORS_SUCCESS });

        punishedValidators.forEach((hash: string) => {
          dispatch(fetchValidator(hash));
        });
      }
    });
  }

export const pauseValidator: Function = ({ from, hash, pauseCause = 1, punishValue = 0 }): Promise =>
  (dispatch: Function, getState: Function, { web3 }): Promise => {
    dispatch({ type: PAUSE_VALIDATOR_REQUEST, hash });

    const formattedPunishValue = pauseCause === PAUSE_CAUSE_UNTIL_FINE
      ? web3.utils.toWei(punishValue, 'ether')
      : punishValue;

    const state = getState();
    const account = getAccount(state);
    const selectedAddress = getAddress(state);

    return new Promise((resolve: Function, reject: Function) => {
      account.methods
        .pauseValidation(hash, from || hash, pauseCause, formattedPunishValue)
        .send({ from: selectedAddress })
          .on('transactionHash', (txHash): void => {
            dispatch(closeModal(VALIDATOR_PAUSE_MODAL_ID));

            // eslint-disable-next-line
            checkTransaction({
              reject, txHash, web3,
              resolve: () => {
                dispatch({
                  type: PAUSE_VALIDATOR_SUCCESS,
                  hash,
                  payload: {
                    pauseCause,
                    punishValue: formattedPunishValue
                  }
                });
              },
            });
          })
          .on('error', reject)
    })
      .catch((error: Object) =>
        dispatch({ type: PAUSE_VALIDATOR_FAILURE, hash, error: get(error, 'message')}))
  }

export const startValidator: Function = (hash: string): Promise =>
  (dispatch: Function, getState: Function, { web3 }): Promise => {
    dispatch({ type: START_VALIDATOR_REQUEST, hash });

    const state = getState();
    const account = getAccount(state);
    const selectedAddress = getAddress(state);

    return new Promise((resolve: Function, reject: Function) => {
      account.methods
        .resumeValidation(hash)
        .send({ from: selectedAddress })
          .on('transactionHash', (txHash): void => {
            // eslint-disable-next-line
            checkTransaction({
              reject, txHash, web3,
              resolve: () => {
                dispatch({ type: START_VALIDATOR_SUCCESS, hash });
              },
            });
          })
          .on('error', reject)
    })
      .catch((error: Object) =>
        dispatch({ type: START_VALIDATOR_FAILURE, hash, error: get(error, 'message')}))
  }

export const updateValidator: Function = (hash: string, payload: Object): Object =>
  ({ type: UPDATE_VALIDATOR, hash, payload });

export const withdrawValidator: Function = (hash: string): Function =>
  (dispatch: Function, getState: Function, { contract, web3 }): void => {
    dispatch({ type: WITHDRAW_VALIDATOR_REQUEST, hash });

    const state = getState();
    const account = getAccount(state);
    const selectedAddress = getAddress(state);

    return new Promise((resolve: Function, reject: Function) => {
      account.methods
        .withdraw(hash)
        .send({ from: selectedAddress })
          .on('transactionHash', (txHash): void => {
            // eslint-disable-next-line
            checkTransaction({
              reject, txHash, web3,
              resolve: () => {
                dispatch({ type: WITHDRAW_VALIDATOR_SUCCESS, hash });
              },
            });
          })
          .on('error', reject)
    })
      .catch((error: Object) =>
        dispatch({ type: WITHDRAW_VALIDATOR_FAILURE, hash, error: get(error, 'message')}));
  }

