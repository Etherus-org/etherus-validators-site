import { schema } from 'normalizr';

export const validator = new schema.Entity('validators', {}, { idAttribute: 'hash' });
