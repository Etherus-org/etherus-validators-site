// @flow
import classNames from 'classnames';
import { get, has, last } from 'lodash';
import { DateTime } from 'luxon';
import Ansi from 'ansi-to-react';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { reduxForm, SubmissionError } from 'redux-form';

// Components
import Button from 'components/Button';
import Form, { Input } from 'components/Form';
import Modal from 'components/Modal';

// Ducks
import {
  VALIDATOR_CREATE_MODAL_ID,
  VALIDATOR_NODE_FORM_ID,
  VALIDATOR_NODE_MODAL_ID,
} from '../ducks';

// Services
import { closeModal, openModal } from 'services/modals';

// Styles
import { COLOR, GRADIENT } from 'styles';
import styles from './Common.scss';

// Utils
import validate, { isHost, isNumber, max, min, required } from 'utils/validate';

const ValidatorsNodeForm: React.Element<Form> = ({
  error,
  handleSubmit,
  onCancel,
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

    <div className={styles.Actions}>
      <Button
        color={COLOR.SECONDARY}
        onClick={onCancel}
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
  reduxForm({
    form: VALIDATOR_NODE_FORM_ID,
    validate: validate({
      host: [isHost()],
      port: [isNumber(), max(65535), min(0)],
      password: [required()],
    }),
  }),
)(ValidatorsNodeForm);

const ValidatorsNode: React.Element<Modal> = ({
  error,
  messages,
  progress,
  retry,
  vPub,
  // Handlers
  handleCancel,
  handleCreateValidator,
  handleReset,
  handleSubmit,
  // State
  isLoading,
  isProcessing,
  isSuccess,
}) => (
  <Modal
    classNames={{
      container: classNames(styles.Container, {
        [styles.ContainerConsole]: isProcessing,
      }),
    }}
    id={VALIDATOR_NODE_MODAL_ID}
    title={isSuccess ? 'Узел развёрнут!' : isProcessing ? 'Узел разворачивается' : 'Развернуть узел'}
  >
    {isProcessing ? (
      <Fragment>
        <div className={styles.Console} id="console">
          <div id="wrapper">
           {messages.map(({ date, msg, result }, index) => (
              <div className={styles.Message} key={index}>
                <span className={styles.MessageDate}>
                  [
                  {date.toLocaleString({
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  })}]:&nbsp;
                </span>

                {index === messages.length - 1 && retry ? (
                  <Fragment>
                    <span className={styles.Retry}>
                      {`[${get(retry, '1', 0) - get(retry, '0', 0)}/${get(retry, '1', 0)}]`}
                    </span>

                    {progress && (
                      <span className={styles.Progress}>
                        {`[${get(progress, '0', 0)}/${get(progress, '1', 0)}]`}
                      </span>
                    )}
                  </Fragment>

                ) : null}

                <Ansi
                  className={classNames(styles.MessageText, {
                    [styles.MessageTextIsFailure]: result === 'failure',
                    [styles.MessageTextIsSuccess]: result === 'success',
                  })}
                >
                  {msg}
                </Ansi>
              </div>
            ))}

            {error && (
              <div className={styles.Error}>
                [Error]: {error}
              </div>
            )}

            {vPub && (
              <div className={styles.MessagePub}>
                ############################## vPub READY! ###############################<br/>
                ### {vPub} ###<br />
                ##########################################################################
              </div>
            )}
          </div>
        </div>

        {!isLoading && (
          <div className={classNames(styles.Actions, styles.ActionsConsole)}>
            <Button
              color={COLOR.DANGER}
              onClick={handleCancel}
            >
              Закрыть
            </Button>

            {isSuccess ? (
              <Button
                color={COLOR.PRIMARY}
                onClick={handleCreateValidator}
              >
                Зарегистрировать валидатор
              </Button>
            ) : (
              <Button
                color={GRADIENT.PURPLE}
                onClick={handleReset}
              >
                Попробовать ещё раз
              </Button>
            )}
          </div>
        )}
      </Fragment>
    ) : (
      <ComposedValidatorsNodeForm
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    )}
  </Modal>
);

export default compose(
  connect(null, { closeModal, openModal }),
  withState('error', 'setError', false),
  withState('isLoading', 'setLoad', false),
  withState('isProcessing', 'setProcess', false),
  withState('isSuccess', 'setSuccess', false),
  withState('messages', 'setMessages', []),
  withState('progress', 'setProgress', null),
  withState('retry', 'setRetry', null),
  withState('vPub', 'setVPub', null),
  withHandlers({
    handleReset: ({ setError, setLoad, setMessages, setProcess, setProgress, setRetry, setSuccess, setVPub }): Function =>
      (event: Object): void => {
        setError(false);
        setLoad(false);
        setMessages([]);
        setProcess(false);
        setProgress(null);
        setRetry(null);
        setSuccess(false);
        setVPub(null);
      },
  }),
  withHandlers({
    handleCancel: ({ closeModal, handleReset }): Function =>
      (event: Object): void => {
        closeModal(VALIDATOR_NODE_MODAL_ID);
        handleReset();
      },
    handleCreateValidator: ({ closeModal, handleReset, openModal, vPub }): Function =>
      (event: Object): void => {
        closeModal(VALIDATOR_NODE_MODAL_ID);
        openModal(VALIDATOR_CREATE_MODAL_ID, { vPub });
        handleReset();
      },
    handleSubmit: ({ setError, setLoad, setMessages, setProcess, setProgress, setRetry, setSuccess, setVPub }): Function =>
      (values: Function): Promise =>
        new Promise((resolve: Function, reject: Function) => {
          setProcess(true);

          const messages = [];
          const socket = new WebSocket('wss://api.etherus.org/nd');

          socket.onerror = (error: Object): void => {
            reject(error);
            setLoad(false);
            socket.close();
          }

          socket.onmessage = (event: Object): void => {
            try {
              const { data, msg, result } = JSON.parse(get(event, 'data'));

              if (result) {
                setLoad(false);
                socket.close();
                messages.push({ msg, date: DateTime.local(), result });

                if (result === 'success') {
                  resolve();
                  setSuccess(true);
                  setVPub(get(data, 'vPub'));
                } else {
                  setError(get(data, 'err'));
                  reject(msg);
                }
              } else {
                setProgress(get(data, 'progress', null));
                setRetry(get(data, 'retry', null));

                if (has(data, 'retry')) {
                  const retry = get(data, 'retry.1') - get(data, 'retry.0');

                  if (retry === 0) {
                    messages.push({ msg, date: DateTime.local(), result });
                  } else {
                    const lastMessage = last(messages);
                    messages[messages.length - 1] = {
                      ...lastMessage,
                      date: DateTime.local(),
                    };
                  }
                } else {
                  messages.push({ msg, date: DateTime.local(), result });
                }
              }

              setMessages(messages);
            } catch (error) {
              reject(error);
              setLoad(false);
              setProcess(false);
              socket.close();
            }

            const $console = document.getElementById('console');
            const $wrapper = document.getElementById('wrapper');

            $console.scrollTop = $wrapper.clientHeight;
          }

          socket.onopen = (): void => {
            setLoad(true);

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
