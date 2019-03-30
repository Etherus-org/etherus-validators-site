// @flow
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';

// API
import CONFIG from 'api/config';

// Components
import Button from 'components/Button';
import Form, { Input } from 'components/Form';
import Metamask from 'components/Metamask';
import Modal from 'components/Modal';

// Ducks
import {
  VALIDATOR_CREATE_FORM_ID,
  VALIDATOR_CREATE_MODAL_ID,
} from '../ducks';

// Entities
import { createValidator } from 'entities/validators';

// Services
import { closeModal } from 'services/modals';
import { getAddress } from 'services/session';

// Utils
import validate, { isHash, isNumber, min, required } from 'utils/validate';

// Styles
import { COLOR } from 'styles';
import styles from './Common.scss';

const ValidatorsCreate = ({
  error,
  handleCancel,
  handleSubmit,
  submitting,
}) => (
  <Form
    error={error}
    onSubmit={handleSubmit}
  >
    {submitting && <Metamask />}

    <Input label="Депозит" name="deposit" placeholder="ETR" />
    <Input label="vPub" name="hash" placeholder="32 Bytes" />
    <Input label="Node Addr" name="node" placeholder="Address" readOnly />
    <Input label="Receiver" name="address" placeholder="Address" />

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
        Создать
      </Button>
    </div>
  </Form>
);

const mapStateToProps = (state: Object): Object => ({
  initialValues: {
    address: getAddress(state),
    node: getAddress(state),
  },
});

const ComposedValidatorsCreate = compose(
  connect(mapStateToProps, { closeModal }),
  reduxForm({
    form: VALIDATOR_CREATE_FORM_ID,
    validate: validate({
      address: [required(), isHash(40)],
      deposit: [
        required(),
        isNumber(),
        min(CONFIG.MIN_DEPOSIT_INCREMENT, `Must be more than ${CONFIG.MIN_DEPOSIT_INCREMENT} ${CONFIG.SYMBOL}`),
      ],
      hash: [required(), isHash(64)],
      node: [required(), isHash(40)],
    }),
  }),
  withHandlers({
    handleCancel: ({ closeModal }): Function =>
      (event: Object): void =>
        closeModal(VALIDATOR_CREATE_MODAL_ID),
  }),
)(ValidatorsCreate)

const ValidatorsCreateModal = ({
  handleSubmit,
}) => (
  <Modal
    classNames={{ container: styles.Container }}
    id={VALIDATOR_CREATE_MODAL_ID}
    title="Создать валидатор"
  >
    <ComposedValidatorsCreate
      onSubmit={handleSubmit}
    />
  </Modal>
);

export default compose(
  connect(null, { createValidator }),
  withHandlers({
    handleSubmit: ({ createValidator }): Function =>
      (values: Object): void =>
        createValidator(values),
  }),
)(ValidatorsCreateModal);
