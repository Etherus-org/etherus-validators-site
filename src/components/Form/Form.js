import PropTypes from 'prop-types';
import React from 'react';

// Styles
import { Typography } from 'styles';
import styles from './Form.scss';

const Form = ({
  children,
  className,
  error,
  onSubmit,
}) => (
  <form
    autoComplete="off"
    className={className}
    onSubmit={onSubmit}
  >
    {error && (
      <Typography className={styles.Error}>
        {error}
      </Typography>
    )}

    <div className={styles.Container}>
      {children}
    </div>
  </form>
);

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Form;
