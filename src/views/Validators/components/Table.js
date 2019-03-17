import React from 'react';

// Components
import Table from 'components/Table';
import Actions from './Actions';
import Field, { VARIANT } from './Field';

type ValidatorsTableType = {
  data: Array<Object>,
};

const MAX_ROWS = 128;
const COLUMNS = [
  {
    accessor: 'index',
    Cell: ({ index }) => (
      <Field
        isDisabled={index >= MAX_ROWS}
        title={index + 1}
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
    sortable: false,
    width: 220,
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
    sortable: false,
    width: 220,
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
    Header: 'Пауза',
    sortable: false,
    width: 160,
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
    width: 120,
  }
];

const ValidatorsTable: React.Element<'div'> = ({
  data
}: ValidatorsTableType) => (
  <Table
    columns={COLUMNS}
    data={data}
    minRows={0}
    resizable={false}
    showPagination={false}
  />
);

export default ValidatorsTable;
