// @flow
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';

// Components
import Button from 'components/Button';
import Form from 'components/Form';
import Metamask from 'components/Metamask';
import Modal from 'components/Modal';

import From from '../components/From';

// Ducks
import {
  VALIDATOR_PAUSE_FORM_ID,
  VALIDATOR_PAUSE_MODAL_ID,
} from '../ducks';

// Entities
import { pauseValidator } from 'entities/validators';

// Services
import { closeModal } from 'services/modals';

// Utils
import validate, { isHash, required } from 'utils/validate';

// Styles
import { COLOR } from 'styles';
import styles from './Common.scss';

const ValidatorsPause: React.Element<Form> = ({
  handleCancel,
  handleSubmit,
  submitting,
}) => (
  <Form onSubmit={handleSubmit}>
    {submitting && <Metamask />}
    <From label="vFrom" name="address" />

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

const ComposedValidatorsPause = compose(
  connect(null, { closeModal }),
  reduxForm({
    form: VALIDATOR_PAUSE_FORM_ID,
    validate: validate({
      address: [required(), isHash()],
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
        initialValues={{ hash }}
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
