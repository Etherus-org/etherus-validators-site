// @flow
import classNames from 'classnames';
import { get } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';

// API
import CONFIG from 'api/config';

// Ducks
import { getStatById } from '../ducks';

// Services
import { getBlockNumber } from 'services/session';

// Styles
import { Typography } from 'styles';
import styles from './Stat.scss';

const ValidatorsStat = ({
  currentBlockNumber,
  original,
  stat,
}): React.Element<'div'> => {
  const isPunished = get(original, 'pauseCause', 0) > 1;
  const isFine = get(original, 'pauseCause', 0) === 3;
  const ping = get(stat, 'timediff', 0);
  const responses = Math.round(get(stat, 'responses', 0) * 100);
  const responses64 = Math.round(get(stat, 'responses64', 0) * 100);

  return (
    <div className={styles.Root}>
      <div className={styles.Receiver}>
        <Typography
          className={styles.Label}
          variant={Typography.VARIANT.SUBTITLE1}
        >
          Получатель (receiver):
        </Typography>

        <Typography
          className={styles.Value}
          variant={Typography.VARIANT.H5}
        >
          {`0x${get(stat, 'receiver', '').toLowerCase()}`}
        </Typography>
      </div>

      <div className={styles.Ping}>
        <Typography
          className={styles.Label}
          variant={Typography.VARIANT.SUBTITLE1}
        >
          Разница во времени:
        </Typography>

        <Typography
          className={classNames(styles.Value, {
            [styles.ValueColorDanger]: Math.abs(ping) > 2000,
            [styles.ValueColorOrange]: Math.abs(ping) > 1000 && Math.abs(ping) <= 2000,
            [styles.ValueColorAlert]: Math.abs(ping) > 500 && Math.abs(ping) <= 1000,
            [styles.ValueColorSuccess]: Math.abs(ping) >= 0 && Math.abs(ping) <= 500,
          })}
          variant={Typography.VARIANT.H5}
        >
          {`${ping} ms`}
        </Typography>

        <Typography
          className={styles.Description}
          variant={Typography.VARIANT.CAPTION}
        >
          Если разница во времени с вашим узлом достигает более 1000 миллисекунд: <br />
          вам необходимо настроить на сервере узла синхронизацию с мировым временем.
        </Typography>
      </div>

      <div className={styles.List}>
        <div className={styles.Item}>
          <Typography
            className={styles.Label}
            variant={Typography.VARIANT.SUBTITLE1}
          >
            {isPunished ? 'Блок остановки ' : 'Кол-во ответов'}:
          </Typography>

          <Typography
            className={classNames(styles.Value, {
              [styles.ValueColorAlert]: responses > 40 && responses < 75,
              [styles.ValueColorDanger]: responses <= 40 || isPunished,
              [styles.ValueColorSuccess]: responses >= 75,
            })}
            variant={Typography.VARIANT.H3}
          >
            {isPunished ? `${get(original, 'pauseBlockNumber', 0)}` : `${responses}%`}
          </Typography>
        </div>

        <div className={styles.Item}>
          <Typography
            className={styles.Label}
            variant={Typography.VARIANT.SUBTITLE1}
          >
            {isPunished ? isFine ? 'Штраф' : 'Осталось блоков' : 'Кол-во ответов (за 64 блока)'}:
          </Typography>

          <Typography
            className={classNames(styles.Value, {
              [styles.ValueColorAlert]: responses64 > 40 && responses64 < 75,
              [styles.ValueColorDanger]: responses64 <= 40,
              [styles.ValueColorSuccess]: responses64 >= 75,
            })}
            variant={Typography.VARIANT.H3}
          >
            {isPunished
              ? isFine
                ? `${(get(original, 'punishValue', 0) / Math.pow(10, 18)).toFixed(2)} ${CONFIG.SYMBOL}`
                : `${Math.max(0, (parseInt(get(original, 'pauseBlockNumber', 0), 10) + parseInt(get(original, 'punishValue', 0), 10)) - currentBlockNumber)}`
              : `${responses64}%`}
          </Typography>
        </div>

        <div className={styles.Item}>
          <Typography
            className={styles.Label}
            variant={Typography.VARIANT.SUBTITLE1}
          >
            Блоков создано:
          </Typography>

          <Typography
            className={classNames(styles.Value, styles.ValueColorPrimary)}
            variant={Typography.VARIANT.H3}
          >
            {get(stat, 'proposed', 0)}
          </Typography>
        </div>

        <div className={styles.Item}>
          <Typography
            className={styles.Label}
            variant={Typography.VARIANT.SUBTITLE1}
          >
            Заработано:
          </Typography>

          <Typography
            className={styles.Value}
            variant={Typography.VARIANT.H3}
          >
            {`${(get(stat, 'earned', 0) / Math.pow(10, 18)).toFixed(2)} ${CONFIG.SYMBOL}`}
          </Typography>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps: Function = (state: Object, { original }) => ({
  currentBlockNumber: getBlockNumber(state),
  stat: getStatById(state, get(original, 'hash')),
});

export default connect(mapStateToProps)(ValidatorsStat);
