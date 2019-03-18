import classNames from 'classnames';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// Components
import Button from 'components/Button';
import Progress from 'components/Progress';
import Tooltip from 'components/Tooltip';

// Ducks
import {
  VALIDATOR_DEPOSIT_MODAL_ID,
  VALIDATOR_PAUSE_MODAL_ID,
} from '../ducks';

// Entities
import {
  PAUSE_NOT_PAUSED,
  startValidator,
} from 'entities/validators';

// Services
import { openModal } from 'services/modals';
import {
  isConnected,
  isOwner,
} from 'services/session';

// Styles
import styles from './Actions.scss';

type ValidatorsActionsType = {
  hash: string,
  isDisabled: bool,
  pauseCause: string,
};

const ValidatorsActions: React.Element<'div'> = ({
  hash,
  pauseCause,
  // Handlers
  handleDeposit,
  handlePause,
  handleStart,
  // State
  isConnected,
  isFetching,
  isDisabled,
  isOwner,
}: ValidatorsActionsType) => isConnected && isOwner && !isDisabled && (
  <Fragment>
    {isFetching ? <Progress size={20} /> : (
      <div className={styles.Root}>
        {pauseCause !== PAUSE_NOT_PAUSED ? (
          <Tooltip title="Запустить">
            <Button
              classNames={{
                root: classNames(styles.Button, styles.ButtonVariantPlay),
                icon: styles.Icon,
              }}
              icon="fas fa-play"
              onClick={handleStart}
            />
          </Tooltip>
        ) : (
          <Tooltip title="Остановить">
            <Button
              classNames={{
                root: classNames(styles.Button, styles.ButtonVariantPause),
                icon: styles.Icon,
              }}
              icon="fas fa-pause"
              onClick={handlePause}
            />
          </Tooltip>
        )}

        <Tooltip title="Пополнить">
          <Button
            classNames={{
              root: classNames(styles.Button, styles.ButtonVariantDeposit),
              icon: styles.Icon,
            }}
            icon="fas fa-usd-circle"
            onClick={handleDeposit}
          />
        </Tooltip>
      </div>
    )}
  </Fragment>
);

const mapStateToProps: Function = (state: Object, { address }): Object => ({
  isConnected: isConnected(state),
  isOwner: isOwner(state, address),
});

export default compose(
  connect(mapStateToProps, {
    openModal,
    startValidator,
  }),
  withHandlers({
    handleDeposit: ({ hash, openModal }): Function =>
      (event: Object): void =>
        openModal(VALIDATOR_DEPOSIT_MODAL_ID, { hash }),
    handlePause: ({ hash, openModal }): Function =>
      (event: Object): void =>
        openModal(VALIDATOR_PAUSE_MODAL_ID, { hash }),
    handleStart: ({ hash, startValidator }): Function =>
      (event: Object): void =>
        startValidator(hash),
  }),
)(ValidatorsActions);
