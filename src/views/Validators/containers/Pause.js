// @flow
import { get } from 'lodash';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { formValueSelector, reduxForm } from 'redux-form';

// Components
import Button from 'components/Button';
import Form, { Input, Item, Select } from 'components/Form';
import Metamask from 'components/Metamask';
import Modal from 'components/Modal';

import From from '../components/From';

// Ducks
import {
  VALIDATOR_PAUSE_FORM_ID,
  VALIDATOR_PAUSE_MODAL_ID,
} from '../ducks';

// Entities
import {
  PAUSE_CAUSE_VOLUNTARILY,
  PAUSE_CAUSE_UNTIL_BLOCK,
  PAUSE_CAUSE_UNTIL_FINE,
  PAUSE_CAUSE_PUNISHMENT,
  pauseValidator,
} from 'entities/validators';

// Services
import { closeModal } from 'services/modals';
import { isOwner } from 'services/session';

// Utils

import { parsePause } from 'utils/parse';
import validate, { isHash, isNumber, isUint, required } from 'utils/validate';

// Styles
import { COLOR } from 'styles';
import styles from './Common.scss';

const ValidatorsPause: React.Element<Form> = ({
  handleCancel,
  handleSubmit,
  pauseCause,
  submitting,
  // State
  isOwner,
}) => (
  <Form onSubmit={handleSubmit}>
    {submitting && <Metamask />}
    <From label="vFrom" name="from" />

    {isOwner && (
      <Fragment>
        <Select
          format={(id: number): Object => ({ label: parsePause(id), value: id })}
          label="Тип паузы"
          name="pauseCause"
          parse={(item: Object): number => get(item, 'value')}
        >
          {[
            PAUSE_CAUSE_VOLUNTARILY,
            PAUSE_CAUSE_UNTIL_BLOCK,
            PAUSE_CAUSE_UNTIL_FINE,
            PAUSE_CAUSE_PUNISHMENT,
          ].map((id: number): React.Element<Item> => (
            <Item
              key={id}
              label={parsePause(id)}
              value={id}
            />
          ))}
        </Select>

        {(pauseCause === PAUSE_CAUSE_UNTIL_BLOCK || pauseCause === PAUSE_CAUSE_UNTIL_FINE) && (
          <Input label="PUNISH VALUE" name="punishValue" />
        )}
      </Fragment>
    )}

    <div className={styles.Actions}>
      <Button
        color={COLOR.SECONDARY}
        onClick={handleCancel}
      >
        Отменить
      </Button>

      <Button
        color={COLOR.DANGER}
        type="submit"
      >
        Остановить
      </Button>
    </div>
  </Form>
);

const selector = formValueSelector(VALIDATOR_PAUSE_FORM_ID);
const mapStateToProps: Function = (state: Object): Object => ({
  isOwner: isOwner(state),
  pauseCause: selector(state, 'pauseCause'),
});

const ComposedValidatorsPause = compose(
  connect(mapStateToProps, { closeModal }),
  reduxForm({
    form: VALIDATOR_PAUSE_FORM_ID,
    validate: validate({
      from: [required(), isHash(64)],
      pauseCause: [required(), isNumber(), isUint(8)],
      punishValue: [isNumber()],
    }),
  }),
  withHandlers({
    handleCancel: ({ closeModal }): Function =>
      (event: Object): void =>
        closeModal(VALIDATOR_PAUSE_MODAL_ID),
  }),
)(ValidatorsPause)

const ValidatorsPauseModal: React.Element<Modal> = ({
  handleSubmit,
}) => (
  <Modal
    classNames={{
      container: styles.Container,
    }}
    id={VALIDATOR_PAUSE_MODAL_ID}
    title="Остановить"
  >
    {({ hash }) => (
      <ComposedValidatorsPause
        initialValues={{
          hash,
          pauseCause: PAUSE_CAUSE_VOLUNTARILY,
          punishValue: 0,
        }}
        onSubmit={handleSubmit}
      />
    )}
  </Modal>
);

export default compose(
  connect(null, { pauseValidator }),
  withHandlers({
    handleSubmit: ({ pauseValidator }): Function =>
      (values: Object): void =>
        pauseValidator(values),
  })
)(ValidatorsPauseModal);
