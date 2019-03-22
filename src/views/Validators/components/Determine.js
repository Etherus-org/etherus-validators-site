// @flow
import classNames from 'classnames';
import React from 'react';

// Styles
import { Typography } from 'styles';
import styles from './Determine.scss';

type ValidatorsDetermineType = {
  children: React.Node,
  isSelected: bool,
  title: string,
};

const ValidatorsDetermine: React.Element<'div'> = ({
  children,
  isSelected,
  title,
}: ValidatorsDetermineType): Function => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootIsSelected]: !!isSelected,
  });

  return (
    <div className={rootClassNames}>
      <Typography
        className={styles.Title}
        variant={Typography.VARIANT.H6}
      >
        {title}
      </Typography>

      <Typography
        className={styles.Content}
        variant={Typography.VARIANT.BODY1}
      >
        {children}
      </Typography>
    </div>
  );
}

export default ValidatorsDetermine;
