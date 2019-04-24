// @flow
// Types
import { SET_STATS } from './types';

export const setStats: Function = (payload: Object) =>
  ({ type: SET_STATS, payload });
