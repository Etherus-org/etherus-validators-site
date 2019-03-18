import MetamaskLogo from 'metamask-logo';
import React from 'react';
import { compose, lifecycle, withHandlers } from 'recompose';

// Styles
import { Typography } from 'styles';
import styles from './Metamask.scss';

const Metamask: React.Element<'div'> = ({
  registerLogo,
}) => (
  <div className={styles.Root}>
    <div className={styles.Cover} />

    <div className={styles.Container}>
      <div className={styles.Logo} ref={registerLogo} />

      <Typography
        className={styles.Title}
        variant={Typography.VARIANT.H6}
      >
        Ожидание авторизации...
      </Typography>
    </div>
  </div>
);

export default compose(
  withHandlers((): Object => {
    let $logo: HTMLElementDiv = null;

    return {
      drawLogo: (): Function =>
        (): Function => {
          const viewer = MetamaskLogo({
            followMouse: true,
            height: 160,
            pxNotRatio: true,
            slowDrift: false,
            width: 160,
          });

          $logo.appendChild(viewer.container);
        },
      registerLogo: (): Function =>
        (node: HTMLElementDiv): void => {
          $logo = node;
        },
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.drawLogo();
    },
  }),
)(Metamask);
