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
  handleConnect: Function,
  handleCreate: Function,
  isConnected: bool,
  isFetching: bool,
  isOwner: bool,
  isSupported: bool,
  networkId: string,
  validators: Array<Object>,
};

const Validators: React.Element<'div'> = ({
  address,
  isConnected,
  isFetching,
  isOwner,
  isSupported,
  networkId,
  validators,
  // Handlers
  handleConnect,
  handleCreate,
}: ValidatorsType) => {
  const rootClassNames: string = classNames(styles.Root, {
    [styles.RootIsConnected]: isConnected,
    [styles.RootIsOwner]: isOwner,
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
              ? isOwner
                ? `OWNER`
                : `Подключено: ${address.substr(0, 16)}...`
              : 'Для редактирования нужна авторизация'}
          </Typography>
        </div>

        <div className={styles.HeaderRight}>
          {!isConnected ? (
            isSupported && networkId === '4' ? (
              <Button
                color={GRADIENT.GREEN}
                onClick={handleConnect}
              >
                Подключить Metamask
              </Button>
            ) : (
              <Typography
                className={styles.Hint}
                variant={Typography.VARIANT.CAPTION}
              >
                {!isSupported ? (
                  <Fragment>
                    Для работы установите расширение Metamask:<br />
                    <a
                      className={styles.Link}
                      href="https://metamask.io/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      https://metamask.io/
                    </a>
                  </Fragment>
                ) : 'Переключите Metamask на сеть RinkeBy'}
              </Typography>
            )
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
  validators: getValidatorList(state)
    .sort(({ pauseCause }, { pauseCause: pauseCauseB }): number =>
      pauseCause > pauseCauseB ? 1 : pauseCause < pauseCauseB ? -1 : 0),
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
