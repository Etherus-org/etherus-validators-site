import { combineReducers } from 'redux';

// Reducers
import { reducer as validators } from './Validators';

const viewsReducer = combineReducers({
  validators,
});

export default (state = {}, action: Object) => {
  switch (action.type) {
    default:
      return viewsReducer(state, action);
  }
};
