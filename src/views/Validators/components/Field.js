import { get } from 'lodash';
import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// API
import CONFIG from 'api/config';

// Components
import Button from 'components/Button';
import Tooltip from 'components/Tooltip';

// Entities
import { PAUSE_NOT_PAUSED } from 'entities/validators';

// Services
import { getBlockNumber } from 'services/session';

// Utils
import {
  parseDeposit,
  parsePause,
} from 'utils/parse';

// Styles
import { Typography } from 'styles';
import styles from './Field.scss';

type ValidatorsFieldType = {
  children: React.Node,
  isDisabled: bool,
  title: string,
  variant: string,
};

const VARIANT = {
  DEFAULT: 'default',
  DEPOSIT: 'deposit',
  HASH: 'hash',
  HEALTH: 'health',
  PAUSE: 'pause',
};

const ValidatorsField: React.Element<'div'> = ({
  children,
  currentBlockNumber,
  isDisabled,
  original,
  title,
  variant = VARIANT.DEFAULT,
  // Handlers
  handleCopy,
}: ValidatorsFieldType) => {
  const rootClassNames: string = classNames(styles.Root,
  !isDisabled && variant === VARIANT.PAUSE && {
    [styles.RootColorError]: !isDisabled && title !== PAUSE_NOT_PAUSED,
    [styles.RootColorSuccess]: !isDisabled && title === PAUSE_NOT_PAUSED,
  }, {
    [styles.RootIsDisabled]: isDisabled,
  }, {
    [styles.RootVariantHash]: variant === VARIANT.HASH,
  });

  return (
    <Typography
      className={rootClassNames}
      variant={Typography.VARIANT.BODY2}
    >
      {variant === VARIANT.HASH && (
        <Tooltip title="Копировать">
          <Button
            classNames={{
              root: styles.Copy,
              icon: styles.Icon,
            }}
            icon="fal fa-copy"
            onClick={handleCopy}
          />
        </Tooltip>
      )}

      <div className={styles.Text}>
        {variant === VARIANT.DEPOSIT && `${parseDeposit(title).toFixed(4)} ${CONFIG.SYMBOL}`}
        {variant === VARIANT.PAUSE && parsePause(title)}
        {variant === VARIANT.HASH && (title || children)}
        {variant === VARIANT.DEFAULT && (title || children)}

        {variant === VARIANT.HEALTH && (
          <div className={styles.Health}>
            <div className={styles.HealthBar}>
              {(title || '').split('').map((word: string, index: number) => {
                const wordClassName = classNames(styles.Word, {
                  [styles.WordVariantRed]: word === 'R',
                  [styles.WordVariantOrange]: word === 'O',
                  [styles.WordVariantYellow]: word === 'Y',
                  [styles.WordVariantLight]: word === 'L',
                  [styles.WordVariantGreen]: word === 'G',
                });
               
                return (
                  <span className={wordClassName} key={index} />
                );
              })}
            </div>

            <div className={styles.HealthIndex}>
              <div>
                {get(original, 'responses64', 0) > 0
                  ? `${Math.round(get(original, 'responses64', 0) * 100)}%`
                  : `Не отвечает ${currentBlockNumber - get(original, 'blockLastVoted', 0)} блоков`}
              </div>
            </div>
          </div>
        )}
      </div>
    </Typography>
  );
}

const mapStateToProps: Function = (state: Object) => ({
  currentBlockNumber: getBlockNumber(state),
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
    handleCopy: ({ title }): Function =>
      (event: Object): void => {
        const $el = document.createElement('textarea');
        $el.value = title;
        document.body.appendChild($el);
        $el.select();
        document.execCommand('copy');
        document.body.removeChild($el);
      },
  }),
)(ValidatorsField);
export { VARIANT };
