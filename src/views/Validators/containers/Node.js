// @flow
import { get } from 'lodash';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { reduxForm, SubmissionError } from 'redux-form';


// Components
import Button from 'components/Button';
import Form, { Input } from 'components/Form';
import Modal from 'components/Modal';
import Progress from 'components/Progress';

// Ducks
import {
  VALIDATOR_NODE_FORM_ID,
  VALIDATOR_NODE_MODAL_ID,
} from '../ducks';

// Services
import { closeModal } from 'services/modals';

// Styles
import { COLOR, GRADIENT, Typography } from 'styles';
import styles from './Common.scss';

// Utils
import validate, { isHost, isNumber, max, min, required } from 'utils/validate';

const ValidatorsNodeForm: React.Element<Form> = ({
  error,
  handleCancel,
  handleSubmit,
  submittin,
}) => (
  <Form
    error={error}
    onSubmit={handleSubmit}
  >
    <Input label="Хост" name="host" placeholder="localhost" />
    <Input label="Порт" name="port" placeholder="22" />
    <Input label="Имя пользователь" name="username" placeholder="root" />
    <Input label="Пароль" name="password" type="password" />
    {console.log(error)}
    <div className={styles.Actions}>
      <Button
        color={COLOR.SECONDARY}
        onClick={handleCancel}
      >
        Отменить
      </Button>

      <Button
        color={GRADIENT.PURPLE}
        type="submit"
      >
        Развернуть
      </Button>
    </div>
  </Form>
);

const ComposedValidatorsNodeForm = compose(
  connect(null, { closeModal }),
  reduxForm({
    form: VALIDATOR_NODE_FORM_ID,
    validate: validate({
      host: [isHost()],
      port: [isNumber(), max(65535), min(0)],
      password: [required()],
    }),
  }),
  withHandlers({
    handleCancel: ({ closeModal }): Function =>
      (event: Object): void =>
        closeModal(VALIDATOR_NODE_MODAL_ID),
  }),
)(ValidatorsNodeForm);

const ValidatorsNode: React.Element<Modal> = ({
  message,
  vPub,
  // Handlers
  handleSubmit,
  // State
  isLoading,
  isSuccess,
}) => (
  <Modal
    classNames={{ container: styles.Container }}
    id={VALIDATOR_NODE_MODAL_ID}
    title={isSuccess ? 'Узел развёрнут! vPub:' : 'Развернуть узел'}
  >
    {!isSuccess ? (
      <Fragment>
        <ComposedValidatorsNodeForm onSubmit={handleSubmit} />

        {isLoading && (
          <div className={styles.Loading}>
            <div className={styles.Spinner}>
              <Progress />
            </div>

            <Typography
              className={styles.Message}
              variant={Typography.VARIANT.SUBTITLE1}
            >
              {message}
            </Typography>
          </div>
        )}
      </Fragment>
    ) : (
      <Typography
        className={styles.Message}
        variant={Typography.VARIANT.SUBTITLE1}
      >
        {vPub}
      </Typography>
    )}
  </Modal>
);

export default compose(
  withState('isLoading', 'setLoad', false),
  withState('isSuccess', 'setSuccess', false),
  withState('message', 'setMessage', ''),
  withState('vPub', 'setVPub', null),
  withHandlers({
    handleSubmit: ({ setLoad, setMessage, setSuccess, setVPub }): Function =>
      (values: Function): Promise =>
        new Promise((resolve: Function, reject: Function) => {
          setLoad(true);

          const socket = new WebSocket('wss://api.etherus.org/nd');

          socket.onerror = (error: Object): void => {
            reject(error);
            setLoad(false);
          }

          socket.onmessage = (event: Object): void => {
            try {
              const { data, msg, result } = JSON.parse(get(event, 'data'));
              setMessage(msg);

              if (result) {
                setLoad(false);
                if (result === 'success') {
                  resolve();
                  setSuccess();
                  setVPub(get(data, 'vPub'));
                } else {
                  reject(msg);
                }
              }
            } catch (error) {
              reject(error);
              setLoad(false);
            }
          }

          socket.onopen = (): void => {
            socket.send(JSON.stringify({
              command: 'install',
              data: {
                host: get(values, 'host', 'localhost'),
                port: get(values, 'port', 22),
                username: get(values, 'username', 'root'),
                password: get(values, 'password'),
              }
            }));
          }
        })
          .catch((error: Object): void => {
            throw new SubmissionError({ _error: error });
          }),
  }),
)(ValidatorsNode);
