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
  PAUSE_CAUSE_VOLUNTARILY,
  PAUSE_NOT_PAUSED,
  pauseValidator,
  startValidator,
  withdrawValidator,
} from 'entities/validators';

// Services
import { openModal } from 'services/modals';
import {
  getBlockNumber,
  isConnected,
  isOwner,
  isValidatorOwner,
} from 'services/session';

// Styles
import styles from './Actions.scss';

type ValidatorsActionsType = {
  hash: string,
  isDisabled: bool,
  pauseCause: string,
};

const ValidatorsActions: React.Element<'div'> = ({
  blockNumber,
  hash,
  pauseBlockNumber,
  pauseCause,
  // Handlers
  handleDeposit,
  handlePause,
  handleStart,
  handleWithdraw,
  // State
  isConnected,
  isFetching,
  isDisabled,
  isOwner,
  isValidatorOwner,
  ...props,
}: ValidatorsActionsType) => isConnected && (isOwner || isValidatorOwner) && !isDisabled && (
  <Fragment>
    {isFetching ? <Progress size={20} /> : (
      <div className={styles.Root}>
        {pauseCause !== PAUSE_NOT_PAUSED ? (
          isValidatorOwner && (
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
          )
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

        {isValidatorOwner && (
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
        )}

        {
          isValidatorOwner &&
          pauseCause === PAUSE_CAUSE_VOLUNTARILY &&
          (blockNumber - pauseBlockNumber > 6000) &&
        (
          <Tooltip title="Забрать деньги">
            <Button
              classNames={{
                root: classNames(styles.Button, styles.ButtonVariantWithdraw),
                icon: styles.Icon,
              }}
              icon="fas fa-hand-holding-usd"
              onClick={handleWithdraw}
            />
          </Tooltip>
        )}
      </div>
    )}
  </Fragment>
);

const mapStateToProps: Function = (state: Object, { address }): Object => ({
  blockNumber: getBlockNumber(state),
  isConnected: isConnected(state),
  isOwner: isOwner(state),
  isValidatorOwner: isValidatorOwner(state, address),
});

export default compose(
  connect(mapStateToProps, {
    openModal,
    pauseValidator,
    startValidator,
    withdrawValidator,
  }),
  withHandlers({
    handleDeposit: ({ hash, openModal }): Function =>
      (event: Object): void =>
        openModal(VALIDATOR_DEPOSIT_MODAL_ID, { hash }),
    handlePause: ({ hash, isValidatorOwner, openModal, pauseValidator }): Function =>
      (event: Object): void =>
        isValidatorOwner
          ? pauseValidator({ hash })
          : openModal(VALIDATOR_PAUSE_MODAL_ID, { hash }),
    handleStart: ({ hash, startValidator }): Function =>
      (event: Object): void =>
        startValidator(hash),
    handleWithdraw: ({ hash, withdrawValidator }): Function =>
      (event: Object): void =>
        withdrawValidator(hash),
  }),
)(ValidatorsActions);
