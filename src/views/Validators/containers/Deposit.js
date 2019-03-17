// @flow
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';

// Components
import Button from 'components/Button';
import Form, { Input } from 'components/Form';
import Modal from 'components/Modal';

// Ducks
import {
  VALIDATOR_DEPOSIT_FORM_ID,
  VALIDATOR_DEPOSIT_MODAL_ID,
} from '../ducks';

// Entities
import { depositValidator } from 'entities/validators';

// Services
import { closeModal } from 'services/modals';

// Utils
import validate, { isNumber, required } from 'utils/validate';

// Styles
import { COLOR } from 'styles';
import styles from './Common.scss';

const ValidatorsDeposit: React.Element<Form> = ({
  handleCancel,
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <Input label="Депозит" name="deposit" placeholder="Ether" />

    <div className={styles.Actions}>
      <Button
        color={COLOR.SECONDARY}
        onClick={handleCancel}
      >
        Отменить
      </Button>

      <Button
        color={COLOR.PRIMARY}
        type="submit"
      >
        Пополнить
      </Button>
    </div>
  </Form>
);

const ComposedValidatorsDeposit = compose(
  connect(null, { closeModal }),
  reduxForm({
    form: VALIDATOR_DEPOSIT_FORM_ID,
    validate: validate({
      amount: [required(), isNumber()],
    }),
  }),
  withHandlers({
    handleCancel: ({ closeModal }): Function =>
      (event: Object): void =>
        closeModal(VALIDATOR_DEPOSIT_MODAL_ID),
  }),
)(ValidatorsDeposit)

const ValidatorsDepositModal: React.Element<Modal> = ({
  handleSubmit,
}) => (
  <Modal
    classNames={{
      container: styles.Container,
    }}
    id={VALIDATOR_DEPOSIT_MODAL_ID}
    title="Пополнить"
  >
    {({ hash }) => (
      <ComposedValidatorsDeposit
        initialValues={{ hash }}
        onSubmit={handleSubmit}
      />
    )}
  </Modal>
)

export default compose(
  connect(null, { depositValidator }),
  withHandlers({
    handleSubmit: ({ depositValidator }): Function =>
      (values: Object): void =>
        depositValidator(values),
  })
)(ValidatorsDepositModal);
