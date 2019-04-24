// @flow
import { get } from 'lodash';

export const getStatById: Function = (state: Object, id: string): Object =>
  get(state, `views.validators.stats.${id}`);

export const getValidatorsView: Function = (state: Object): Object =>
  get(state, 'views.validators');
