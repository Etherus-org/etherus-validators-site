import { get, has, omit } from 'lodash';

// Constants
import {
  PAUSE_NOT_PAUSED,
  PAUSE_CAUSE_VOLUNTARILY,
} from './constants';

// Types
import {
  // Create
  CREATE_VALIDATOR_SUCCESS,
  // Deposit
  DEPOSIT_VALIDATOR_REQUEST,
  DEPOSIT_VALIDATOR_SUCCESS,
  DEPOSIT_VALIDATOR_FAILURE,
  // Fetch
  FETCH_VALIDATOR_REQUEST,
  FETCH_VALIDATOR_SUCCESS,
  FETCH_VALIDATOR_FAILURE,
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

export default (state: Object = {}, action: Object): Object => {
  const hash = get(action, 'hash');
  const validator = get(state, hash);

  switch (action.type) {
    // CREATE
    case CREATE_VALIDATOR_SUCCESS:
      return {
        ...state,
        [hash]: action.payload,
      };
    // PAUSE && START
    case DEPOSIT_VALIDATOR_REQUEST:
    case FETCH_VALIDATOR_REQUEST:
    case PAUSE_VALIDATOR_REQUEST:
    case START_VALIDATOR_REQUEST:
    case WITHDRAW_VALIDATOR_REQUEST:
      return {
        ...state,
        [hash]: {
          ...validator,
          isFetching: true,
        },
      };
    case DEPOSIT_VALIDATOR_FAILURE:
    case FETCH_VALIDATOR_FAILURE:
    case PAUSE_VALIDATOR_FAILURE:
    case START_VALIDATOR_FAILURE:
    case WITHDRAW_VALIDATOR_FAILURE:
      return has(state, hash) ? {
        ...state,
        [hash]: {
          ...validator,
          error: action.error,
          isFetching: false,
        },
      } : state;
    case DEPOSIT_VALIDATOR_SUCCESS:
      return {
        ...state,
        [hash]: {
          ...validator,
          deposit: get(validator, 'deposit', 0) + action.deposit,
          isFetching: false,
        }
      };
    case FETCH_VALIDATOR_SUCCESS:
      return {
        ...state,
        [hash]: {
          ...validator,
          ...action.payload,
          isFetching: false,
        },
      };
    case PAUSE_VALIDATOR_SUCCESS:
      return {
        ...state,
        [hash]: {
          ...validator,
          isFetching: false,
          pauseCause: PAUSE_CAUSE_VOLUNTARILY,
        },
      };
    case START_VALIDATOR_SUCCESS:
      return {
        ...state,
        [hash]: {
          ...validator,
          isFetching: false,
          pauseCause: PAUSE_NOT_PAUSED,
        },
      };
    // UPDATE
    case UPDATE_VALIDATOR:
      return {
        ...state,
        [hash]: {
          ...validator,
          ...action.payload,
        },
      };
    case WITHDRAW_VALIDATOR_SUCCESS:
      return omit(state, action.hash);
    default:
      return state;
  }
}
