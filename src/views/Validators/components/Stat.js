// @flow
import classNames from 'classnames';
import { get } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';

// API
import CONFIG from 'api/config';

// Ducks
import { getStatById } from '../ducks';

// Styles
import { Typography } from 'styles';
import styles from './Stat.scss';

const ValidatorsStat = ({
  stat,
}): React.Element<'div'> => {
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
          className={classNames(styles.Value)}
          variant={Typography.VARIANT.H5}
        >
          {`0x${get(stat, 'receiver', '').toLowerCase()}`}
        </Typography>
      </div>

      <div className={styles.List}>
        <div className={styles.Item}>
          <Typography
            className={styles.Label}
            variant={Typography.VARIANT.SUBTITLE1}
          >
            Кол-во ответов:
          </Typography>

          <Typography
            className={classNames(styles.Value, {
              [styles.ValueColorAlert]: responses > 40 && responses < 75,
              [styles.ValueColorDanger]: responses <= 40,
              [styles.ValueColorSuccess]: responses >= 75,
            })}
            variant={Typography.VARIANT.H3}
          >
            {`${responses}%`}
          </Typography>
        </div>

        <div className={styles.Item}>
          <Typography
            className={styles.Label}
            variant={Typography.VARIANT.SUBTITLE1}
          >
            Кол-во ответов (за 64 блока):
          </Typography>

          <Typography
            className={classNames(styles.Value, {
              [styles.ValueColorAlert]: responses64 > 40 && responses64 < 75,
              [styles.ValueColorDanger]: responses64 <= 40,
              [styles.ValueColorSuccess]: responses64 >= 75,
            })}
            variant={Typography.VARIANT.H3}
          >
            {`${responses64}%`}
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
            {`${get(stat, 'earned', 0) / Math.pow(10, 18)} ${CONFIG.SYMBOL}`}
          </Typography>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps: Function = (state: Object, { original }) => ({
  stat: getStatById(state, get(original, 'hash')),
});

export default connect(mapStateToProps)(ValidatorsStat);
