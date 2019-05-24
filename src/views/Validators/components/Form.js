// @flow
import React, { Fragment } from 'react';
import { compose} from 'recompose';
import { reduxForm } from 'redux-form';


// Components
import Button from 'components/Button';
import Form, { Input } from 'components/Form';


// Ducks
import {
  VALIDATOR_NODE_FORM_ID,
} from '../ducks';

// Styles
import { COLOR, GRADIENT } from 'styles';
import styles from './Form.scss';

// Utils
import validate, { isHost, isNumber, max, min, required } from 'utils/validate';

const ValidatorsForm: React.Element<Form> = ({
  error,
  handleSubmit,
  isFrom,
  isRestart,
  onCancel,
  onTrigger,
  submittin,
}) => (
  <Form
    error={error}
    onSubmit={handleSubmit}
  >
    <Fragment>
      <Input label="Хост" name="host" placeholder="localhost" />
      <Input label="Порт" name="port" placeholder="22" />
      <Input label="Имя пользователя" name="username" placeholder="root" />
      <Input label="Пароль" name="password" type="password" />
    </Fragment>

    <div className={styles.Actions}>
      <Button
        color={COLOR.SECONDARY}
        onClick={onCancel}
      >
        Отменить
      </Button>

      {isFrom && (
        <Button color={COLOR.DANGER} onClick={onTrigger}>
          Использовать ключ
        </Button>
      )}

      <Button
        color={isRestart ? GRADIENT.RED : isFrom ? GRADIENT.GREEN : GRADIENT.PURPLE}
        type="submit"
      >
        {isRestart ? 'Перезагрузить' : isFrom ? 'Далее' : 'Развернуть'}
      </Button>
    </div>
  </Form>
);

export default compose(
  reduxForm({
    form: VALIDATOR_NODE_FORM_ID,
    validate: validate({
      host: [isHost()],
      port: [isNumber(), max(65535), min(0)],
      password: [required()],
    })
  }),
)(ValidatorsForm);
