// @flow
import classNames from 'classnames';
import { get } from 'lodash';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';

// API
import config from 'api/config';

// Components
import Button from 'components/Button';
import Progress from 'components/Progress';
import Table from './components/Table';

// Containers
import Confirm from './containers/Confirm';
import ConfirmAccount from './containers/ConfirmAccount';
import Create from './containers/Create';
import Deposit from './containers/Deposit';
import Guide from './containers/Guide';
import Node, { NodeFrom } from './containers/Node';
import Pause from './containers/Pause';

// Ducks
import {
  setStats,
  getValidatorsView,
  VALIDATOR_CREATE_MODAL_ID,
  VALIDATOR_GUIDE_MODAL_ID,
  VALIDATOR_NODE_MODAL_ID,
  VALIDATOR_NODE_FROM_MODAL_ID,
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
  handleGuide: Function,
  hasAccount: bool,
  isConnected: bool,
  isConnecting: bool,
  isFetching: bool,
  isOwner: bool,
  isSupported: bool,
  networkId: string,
  validators: Array<Object>,
};

const Validators: React.Element<'div'> = ({
  address,
  networkId,
  stats,
  validators,
  // Handlers
  handleConnect,
  handleCreate,
  handleGuide,
  handleInstall,
  handleMove,
  handleRestart,
  // State
  isConnected,
  isConnecting,
  isFetching,
  isOwner,
  isSupported,
  hasAccount,
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
                : `Подключено: ${address}`
              : 'Для редактирования нужна авторизация'}
          </Typography>
        </div>

        <div className={styles.HeaderRight}>
          {isConnecting ? (
            <div className={styles.Connecting}>
              <Progress size={20} />
            </div>
          ) : (
            !isConnected ? (
              isSupported && networkId === config.NETWORK_ID ? (
                <Button
                  color={GRADIENT.GREEN}
                  onClick={handleConnect}
                >
                  Подключить Metamask
                </Button>
              ) : (
                <Button
                  color={GRADIENT.ORANGE}
                  onClick={handleGuide}
                >
                  {!isSupported && 'Как подключить Metamask?'}
                  {isSupported && !hasAccount && 'Как добавить аккаунт в Metamask?'}
                  {isSupported && hasAccount && networkId !== config.NETWORK_ID && 'Как добавить сеть Etherus?'}
                </Button>
              )
            ) : (
              <div className={styles.Actions}>
                <div>
                  <Button
                    color={COLOR.PRIMARY}
                    onClick={handleCreate}
                  >
                    Зарегистрировать валидатор
                  </Button>
                </div>

                <div className={styles.NodeActions}>
                  <Button
                    color={GRADIENT.RED}
                    onClick={handleRestart}
                  >
                    Перезагрузить узел
                  </Button>

                  <Button
                    color={GRADIENT.GREEN}
                    onClick={handleMove}
                  >
                    Перенести узел
                  </Button>

                  <Button
                    color={GRADIENT.PURPLE}
                    onClick={handleInstall}
                  >
                    Развернуть узел
                  </Button>
                </div>
              </div>
            )
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
          <Table data={validators} stats={stats} />
        </div>
      )}

      <Guide />
      <Node />
      <NodeFrom />

      {isConnected && (
        <Fragment>
          <Confirm />
          <ConfirmAccount />
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
    .sort(({ deposit, pauseCause }, { deposit: depositB, pauseCause: pauseCauseB }): number =>
      pauseCause > pauseCauseB
        ? 1
        : pauseCause < pauseCauseB
          ? -1
          : deposit < depositB
            ? 1
            : deposit > depositB
              ? -1
              : 0),
});

export default compose(
  connect(mapStateToProps, {
    connectMetamask,
    fetchValidators,
    openModal,
    setStats,
  }),
  withHandlers({
    // Fetch
    fetchStats: ({ setStats }): Function => () =>
      fetch('https://api.etherus.org/vl/stats')
          .then((res: Object) => res.json())
          .then((res: Object) => {
            const stats = get(res, 'stats');
            const normalizedData = {};

            stats.forEach((item: Object) => {
              normalizedData[`0x${get(item, 'vPub')}`] = item;
            });

            setStats(normalizedData);
        }),
    // handlers
    handleConnect: ({ connectMetamask }): Function =>
      (event: Object): void =>
        connectMetamask(),
    handleCreate: ({ openModal }): Function =>
      (event: Object): void =>
        openModal(VALIDATOR_CREATE_MODAL_ID),
    handleGuide: ({
      hasAccount,
      isSupported,
      networkId,
      openModal,
    }): Function =>
      (event: Object): void =>
        openModal(VALIDATOR_GUIDE_MODAL_ID, {
          sectionId: !isSupported
            ? 1
            : isSupported && !hasAccount
              ? 2
              : 3
        }),
    handleInstall: ({ openModal }): Function =>
      (event: Object): void =>
        openModal(VALIDATOR_NODE_MODAL_ID, { title: 'Развернуть ноду' }),
    handleMove: ({ openModal }): Function =>
      (event: Object): void =>
        openModal(VALIDATOR_NODE_FROM_MODAL_ID),
    handleRestart: ({ openModal }): Function =>
      (event: Object): void =>
        openModal(VALIDATOR_NODE_MODAL_ID, { isRestart: true, title: 'Перезагрузить ноду' }),
  }),
  lifecycle({
    componentDidMount() {
      const { fetchStats, fetchValidators } = this.props;

      fetchStats();
      fetchValidators();

      setInterval(fetchStats, 15000);
    },
  }),
)(Validators);
