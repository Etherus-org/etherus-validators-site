// @flow
import { get } from 'lodash';

export const getValidatorsView: Function = (state: Object): Object =>
  get(state, 'views.validators');
