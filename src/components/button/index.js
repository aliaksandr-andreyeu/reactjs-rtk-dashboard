import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Button = ({ disabled, type, label, className, onClick }) => {
  const getClassName = (...args) => Array.from(args).filter(Boolean).join(' ');

  return (
    Boolean(label) && (
      <button className={getClassName('cmp-button', className)} type={type} disabled={disabled} onClick={onClick}>
        {label}
      </button>
    )
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  label: '',
  className: '',
  type: 'button',
  disabled: false,
  onClick: (event) => event
};

export default Button;
