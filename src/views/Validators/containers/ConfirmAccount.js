// @flow
import React, { Fragment } from 'react';

// Components
import Button from 'components/Button';
import Modal from 'components/Modal';

// Ducks
import { VALIDATOR_CONFIRM_ACCOUNT_MODAL_ID } from '../ducks';

// Styles
import { COLOR, Typography } from 'styles';
import styles from './Common.scss';

const ValidatorsConfirmAccount: React.Element<Modal> = () => (
  <Modal
    classNames={{ container: styles.Container }}
    id={VALIDATOR_CONFIRM_ACCOUNT_MODAL_ID}
    title="Внимание!"
  >
    {({ onReject, onResolve }) => (
      <Fragment>
        <Typography className={styles.Alert} variant={Typography.VARIANT.BODY1}>
          Вы собираетесь создать валидатор прикреплённый к кошельку,
          который не совпадает с вашим текущим аккаунтом Metamask.
          <br />
          <br />
          Хотите продолжить?
        </Typography>

        <div className={styles.Actions}>
          <Button
            color={COLOR.SECONDARY}
            onClick={onReject}
          >
            Отмена
          </Button>

          <Button
            color={COLOR.DANGER}
            onClick={onResolve}
          >
            Подтвердить
          </Button>
        </div>
      </Fragment>
    )}
  </Modal>
);

export default ValidatorsConfirmAccount;
