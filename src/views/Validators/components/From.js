import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

// Components
import { Select, Item } from 'components/Form';

// Entities
import { getValidatorListByAddress } from 'entities/validators';

// Services
import { getAddress } from 'services/session';

const ValidatorsFrom: React.Element<Select> = ({
  label,
  name,
  validators,
  value,
}) => (
  <Select
    format={(hash: string): Object => hash && ({ label: hash, value: hash })}
    label={label}
    name={name}
    parse={(validator: Object): string => get(validator, 'value')}
    placeholder="32 Bytes"
  >
    {({ inputValue, onClick, value }): React.Element<Item> =>
      validators
        .filter(({ hash }): bool => hash.toLowerCase().indexOf(inputValue) > -1)
        .map(({ hash }) => (
          <Item
            key={hash}
            label={hash}
            onClick={onClick}
            value={hash}
          />
        ))}
  </Select>
);

const mapStateToProps: Function = (state: Object, { value }): Object => ({
  validators: getValidatorListByAddress(state,
    getAddress(state)),
});

export default connect(mapStateToProps)(ValidatorsFrom);
