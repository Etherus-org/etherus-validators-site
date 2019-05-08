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
import NodeForm from '../components/Form';
import Modal from 'components/Modal';

// Ducks
import {
  VALIDATOR_CREATE_MODAL_ID,
  VALIDATOR_NODE_MODAL_ID,
  VALIDATOR_NODE_FROM_MODAL_ID,
} from '../ducks';

// Services
import { closeModal, openModal } from 'services/modals';

// Styles
import { COLOR, GRADIENT } from 'styles';
import styles from './Common.scss';

// Utils
import validate, { isPrivateKey, required } from 'utils/validate';

const ValidatorsNodeFormPrivate = ({
  error,
  handleClose,
  handleSubmit,
  onCancel,
  onTrigger,
}) => (
  <Form
    error={error}
    onSubmit={handleSubmit}
  >
    <Fragment>
      <Input label="Приватный ключ" name="privateKey" />
    </Fragment>

    <div className={styles.Actions}>
      <Button
        color={COLOR.SECONDARY}
        onClick={onCancel}
      >
        Отменить
      </Button>

      <Button color={COLOR.DANGER} onClick={onTrigger}>
        Использовать форму
      </Button>

      <Button
        color={GRADIENT.GREEN}
        type="submit"
      >
        Далее
      </Button>
    </div>
  </Form>
);

const ComposedValidatorsNodeFormPrivate= compose(
  reduxForm({
    form: 'privateForm',
    validate: validate({
      privateKey: [required(), isPrivateKey()],
    })
  }),
)(ValidatorsNodeFormPrivate);

const ValidatorsNodeFrom = ({
  handleCancel,
  handleSubmit,
  handleTrigger,
  isPrivate,
}) => (
  <Modal
    classNames={{
      container: styles.Container
    }}
    id={VALIDATOR_NODE_FROM_MODAL_ID}
    title="Откуда нужно перенести ноду?"
  >
    {({ from, privateKey }) => isPrivate ? (
      <ComposedValidatorsNodeFormPrivate
        initialValues={{ privateKey }}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        onTrigger={handleTrigger}
      />
    ) : (
      <NodeForm
        initialValues={{ from }}
        isFrom
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        onTrigger={handleTrigger}
      />
    )}
  </Modal>
);

export const NodeFrom = compose(
  connect(null, { closeModal, openModal }),
  withState('isPrivate', 'setPrivate', false),
  withHandlers({
    handleCancel: ({ closeModal, handleReset }): Function =>
      (event: Object): void => {
        closeModal(VALIDATOR_NODE_FROM_MODAL_ID);
      },
    handleSubmit: ({ closeModal, openModal, isPrivate }): Function => (values) => {
      closeModal(VALIDATOR_NODE_FROM_MODAL_ID);
      openModal(VALIDATOR_NODE_MODAL_ID, isPrivate ? { privateKey: get(values, 'privateKey') } : { from: {
        host: get(values, 'host', 'localhost'),
        port: get(values, 'port', 22),
        username: get(values, 'username', 'root'),
        password: get(values, 'password'),
      }});
    },
    handleTrigger: ({ isPrivate, setPrivate }) => () => setPrivate(!isPrivate),
  }),
)(ValidatorsNodeFrom)

const ValidatorsNode: React.Element<Modal> = ({
  error,
  messages,
  progress,
  retry,
  token,
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
    title={isSuccess ? `Узел развёрнут! ${token}` : isProcessing ? `Узел разворачивается: ${token}` : null}
  >
    {({ from, isRestart, privateKey }) => isProcessing ? (
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
              <Fragment>
                {!from && !privateKey && !isRestart && (
                  <Button
                    color={COLOR.PRIMARY}
                    onClick={handleCreateValidator}
                  >
                    Зарегистрировать валидатор
                  </Button>
                )}
              </Fragment>
            ) : (
              <Button
                color={GRADIENT.PURPLE}
                onClick={handleReset({ from, privateKey })}
              >
                Попробовать ещё раз
              </Button>
            )}
          </div>
        )}
      </Fragment>
    ) : (
      <NodeForm
        initialValues={{ isRestart }}
        isRestart={isRestart}
        onCancel={handleCancel}
        onSubmit={(values) => handleSubmit({ ...values, from, privateKey })}
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
  withState('token', 'setToken', null),
  withState('vPub', 'setVPub', null),
  withHandlers({
    handleReset: ({ closeModal, openModal, setError, setLoad, setMessages, setProcess, setProgress, setRetry, setSuccess, setVPub }): Function => ({ from, privateKey } = {}) =>
      (event: Object): void => {
        setError(false);
        setLoad(false);
        setMessages([]);
        setProcess(false);
        setProgress(null);
        setRetry(null);
        setSuccess(false);
        setVPub(null);

        if (from || privateKey) {
          closeModal(VALIDATOR_NODE_MODAL_ID);
          openModal(VALIDATOR_NODE_FROM_MODAL_ID, { from, privateKey });
        }
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
    handleSubmit: ({ setError, setLoad, setMessages, setProcess, setProgress, setRetry, setSuccess, setToken, setVPub }): Function =>
      ({ from, isRestart, privateKey, ...values }): Promise =>
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

              if (has(data, 'execution.token')) {
                setToken(get(data, 'execution.token'));
              }

              if (result) {
                setLoad(false);
                socket.close();
                messages.push({ msg, date: DateTime.local(), result });

                if (result === 'success') {
                  resolve();
                  setSuccess(true);
                  setVPub(get(data, 'vPub'));
                } else {
                  const error = get(data, 'err');

                  setError(typeof error === 'string' ? error : 'Unknown error!');
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

            if ($console && $wrapper) {
              $console.scrollTop = $wrapper.clientHeight;
            }
          }

          socket.onopen = (): void => {
            setLoad(true);

            const to = {
              host: get(values, 'host', 'localhost'),
              port: get(values, 'port', 22),
              username: get(values, 'username', 'root'),
              password: get(values, 'password'),
            }

            socket.send(JSON.stringify({
              command: isRestart ? 'reset' : (from || privateKey) ? 'migrate' : 'install',
              data: (from || privateKey) ? { from, key: privateKey, to } : to,
            }));
          }
        })
          .catch((error: Object): void => {
            throw new SubmissionError({ _error: error });
          }),
  }),
)(ValidatorsNode);
