import classNames from 'classnames';
import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';

// Components
import Table from 'components/Table';
import Actions from './Actions';
import Field, { VARIANT } from './Field';

// Services
import { getAddress } from 'services/session';

// Styles
import styles from './Table.scss';

type ValidatorsTableType = {
  data: Array<Object>,
};

const MAX_ROWS = 128;
const COLUMNS = [
  {
    accessor: 'index',
    Cell: ({ index, original }) => (
      <Field
        isDisabled={index >= MAX_ROWS}
        title={get(original, 'pauseCause') === 0 ? (index + 1) : ''}
      />
    ),
    Header: '#',
    sortable: false,
    width: 64,
  },
  {
    accessor: 'hash',
    Cell: ({ index, value }) => (
      <Field
        isDisabled={index >= MAX_ROWS}
        title={value}
        variant={VARIANT.HASH}
      />
    ),
    Header: 'vPub',
    minWidth: 160,
    sortable: false,
  },
  {
    accessor: 'address',
    Cell: ({ index, value }) => (
      <Field
        isDisabled={index >= MAX_ROWS}
        title={value}
        variant={VARIANT.HASH}
      />
    ),
    Header: 'Node Address',
    minWidth: 160,
    sortable: false,
  },
  {
    accessor: 'voted64',
    Cell: ({ index, original, value }) => (
      <Field
        isDisabled={index >= MAX_ROWS}
        original={original}
        title={value}
        variant={VARIANT.HEALTH}
      />
    ),
    Header: 'Здоровье',
    sortable: false,
    width: 240,
  },
  {
    accessor: 'deposit',
    Cell: ({ index, value }) => (
      <Field
        isDisabled={index >= MAX_ROWS}
        title={value}
        variant={VARIANT.DEPOSIT}
      />
    ),
    Header: 'Депозит',
    sortable: false,
    width: 160,
  },
  {
    accessor: 'pauseCause',
    Cell: ({ index, value }) => (
      <Field
        isDisabled={index >= MAX_ROWS}
        title={value}
        variant={VARIANT.PAUSE}
      />
    ),
    Header: 'Состояние',
    sortable: false,
    width: 120,
  },
  {
    accessor: 'actions',
    Cell: ({ index, original }) => (
      <Actions {...original}
        isDisabled={index >= MAX_ROWS}
      />
    ),
    Header: 'Действия',
    sortable: false,
    width: 160,
  }
];

const ValidatorsTable: React.Element<'div'> = ({
  formattedData,
  ownerAddress,
}: ValidatorsTableType) => (
  <Table
    columns={ownerAddress ? COLUMNS : [...COLUMNS].slice(0, -1)}
    data={formattedData}
    defaultPageSize={100000}
    getTrGroupProps={(state: Object, { index, original }): Object => ({
      className: classNames(styles.Root, {
        [styles.RootIsFavorite]: get(original, 'address') === ownerAddress,
        [styles.RootIsDisabled]: get(original, 'pauseCause') !== 0 || index > MAX_ROWS,
      }),
      id: get(original, 'hash'),
    })}
    minRows={0}
    resizable={false}
    showPagination={false}
  />
);

const mapStateToProps: Function = (state: Object): Object => ({
  ownerAddress: getAddress(state),
});

export default compose(
  connect(mapStateToProps),
  withProps(({ data, stats = {} }) => ({
    formattedData: data.map((item: Object) => ({
      ...item,
      ...get(stats, get(item, 'hash')),
    })),
  })),
)(ValidatorsTable);
