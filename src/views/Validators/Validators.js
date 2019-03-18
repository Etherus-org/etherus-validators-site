// @flow
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';

// Components
import Button from 'components/Button';
import Progress from 'components/Progress';
import Table from './components/Table';

// Containers
import Create from './containers/Create';
import Deposit from './containers/Deposit';
import Pause from './containers/Pause';

// Ducks
import {
  getValidatorsView,
  VALIDATOR_CREATE_MODAL_ID,
} from './ducks';

// Entities
import {
  fetchValidators,
  getValidatorList,
} from 'entities/validators';

// Services
import { openModal } from 'services/modals';
import {
  connectMetamask,
  getSession,
} from 'services/session';

// Styles
import { COLOR, GRADIENT, Typography } from 'styles';
import styles from './Validators.scss';

type ValidatorsType = {
  address: string,
  isConnected: bool,
  isFetching: bool,
  validators: Array<Object>,
};

const Validators: React.Element<'div'> = ({
  address,
  isConnected,
  isFetching,
  validators,
  // Handlers
  handleConnect,
  handleCreate,
}: ValidatorsType) => {
  const rootClassNames: string = classNames(styles.Root, {
    [styles.RootIsConnected]: isConnected,
  });

  return (
    <div className={rootClassNames}>
      <div className={styles.Header}>
        <div className={styles.HeaderLeft}>
          <Typography
            variant={Typography.VARIANT.H6}
          >
            Валидаторы
          </Typography>

          <Typography
            className={styles.Status}
            variant={Typography.VARIANT.CAPTION}
          >
            {isConnected
              ? `Подключено: ${address.substr(0, 16)}...`
              : 'Для редактирования нужна авторизация'}
          </Typography>
        </div>

        <div className={styles.HeaderRight}>
          {!isConnected ? (
            <Button
              color={GRADIENT.GREEN}
              onClick={handleConnect}
            >
              Подключить Metamask
            </Button>
          ) : (
            <Button
              color={COLOR.PRIMARY}
              onClick={handleCreate}
            >
              Создать валидатор
            </Button>
          )}
        </div>
      </div>

      {isFetching && (
        <div className={styles.Progress}>
          <Progress />
        </div>
      )}

      {validators && validators.length > 0 && (
        <div className={styles.List}>
          <Table data={validators} />
        </div>
      )}

      {isConnected && (
        <Fragment>
          <Create />
          <Deposit />
          <Pause />
        </Fragment>
      )}
    </div>
  );
}

const mapStateToProps: Function = (state: Object): Object => ({
  ...getValidatorsView(state),
  ...getSession(state),
  validators: getValidatorList(state),
});

export default compose(
  connect(mapStateToProps, {
    connectMetamask,
    fetchValidators,
    openModal,
  }),
  withHandlers({
    handleConnect: ({ connectMetamask }): Function =>
      (event: Object): void =>
        connectMetamask(),
    handleCreate: ({ openModal }): Function =>
      (event: Object): void =>
        openModal(VALIDATOR_CREATE_MODAL_ID),
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchValidators();
    },
  }),
)(Validators);
