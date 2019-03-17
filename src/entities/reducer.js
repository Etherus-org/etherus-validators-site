import { merge } from 'lodash';
import { combineReducers } from 'redux';

// Models
import validators from './validators';

// Types
import { UPDATE_ENTITIES } from './types';

const modelsReducer: Object = combineReducers({
  validators,
});

export default (state: Object = {}, action: Object): Object => {
  switch (action.type) {
    case UPDATE_ENTITIES:
      return action.force
        ? { ...state, ...action.data.entities }
        : merge({}, state, action.data.entities);
    default:
      return modelsReducer(state, action);
  }
};
