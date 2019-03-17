import { get, values } from 'lodash';

export const getValidatorList: Function = (state: Object): Array<Object> =>
  values(get(state, 'entities.validators', {}));
