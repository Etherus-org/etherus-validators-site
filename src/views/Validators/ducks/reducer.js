// Entities
import {
  FETCH_VALIDATORS_REQUEST,
  FETCH_VALIDATORS_SUCCESS,
  FETCH_VALIDATORS_FAILURE,
} from 'entities/validators';

const initialState = {
  isFetching: false,
};

export default (state: Object = initialState, action: Object): Object => {
  switch (action.type) {
    case FETCH_VALIDATORS_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_VALIDATORS_SUCCESS:
    case FETCH_VALIDATORS_FAILURE:
      return { ...state, error: action.error, isFetching: false };
    default:
      return state;
  }
}
