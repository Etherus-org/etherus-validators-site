// @flow
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// Components
import Button from 'components/Button';
import Modal from 'components/Modal';

// Ducks
import { VALIDATOR_CONFIRM_MODAL_ID } from '../ducks';

// Services
import { closeModal } from 'services/modals';

// Entities
import {
  startValidator,
} from 'entities/validators';

// Styles
import { COLOR, Typography } from 'styles';
import styles from './Common.scss';

const ValidatorsConfirm: React.Element<Modal> = ({
  handleCancel,
  handleStart,
}) => (
  <Modal
    classNames={{ container: styles.Container }}
    id={VALIDATOR_CONFIRM_MODAL_ID}
    title="Внимание!"
  >
    {({ hash }) => (
      <Fragment>
        <Typography variant={Typography.VARIANT.BODY1}>
          Прежде чем активировать валидатора, убедитесь, что он включен, 
          синхронизирован с сетью и готов включиться в работу. В противном 
          случае он может быть принудительно деактивирован со 
          штрафом или полным изъятием депозита.
        </Typography>

        <div className={styles.Actions}>
          <Button
            color={COLOR.SECONDARY}
            onClick={handleCancel}
          >
            Отмена
          </Button>

          <Button
            color={COLOR.DANGER}
            onClick={() => handleStart(hash)}
          >
            Подтвердить
          </Button>
        </div>
      </Fragment>
    )}
  </Modal>
);

export default compose(
  connect(null, { closeModal, startValidator }),
  withHandlers({
    handleCancel: ({ closeModal }): Function =>
      (event: Object): void =>
        closeModal(VALIDATOR_CONFIRM_MODAL_ID),
    handleStart: ({ closeModal, startValidator }): Function =>
      (hash: string): void => {
        closeModal(VALIDATOR_CONFIRM_MODAL_ID);
        startValidator(hash);
      },
  }),
)(ValidatorsConfirm);
