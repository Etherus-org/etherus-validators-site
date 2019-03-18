import { get, values } from 'lodash';

export const getValidatorList: Function = (state: Object): Array<Object> =>
  values(get(state, 'entities.validators', {}));

export const getValidatorListByAddress: Function = (state: Object, address: string): Array<Object> =>
  getValidatorList(state).filter(({ address: nodeAddress }): bool => nodeAddress === address);
