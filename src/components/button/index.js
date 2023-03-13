import React from 'react';
import PropTypes from 'prop-types';

import { getClassName } from '@helpers';

import './styles.scss';

const Button = ({ className, color, disabled, label, onClick, stroke, type }) => {
  let timer = null;
  const delay = 300;

  const setTimer = (event) => {
    timer = setTimeout(() => {
      event.target.blur();
    }, delay);
  };

  const clearTimer = () => {
    timer && clearTimeout(timer);
  };

  const handleClick = (event) => {
    if (disabled) return;

    clearTimer();
    setTimer(event);

    Boolean(onClick) && onClick(event);
  };
  return (
    Boolean(label) && (
      <button
        className={getClassName('cmp-button', color && color, stroke && 'stroke', disabled && 'disabled', className)}
        type={type}
        disabled={disabled}
        onClick={handleClick}
      >
        {label}
      </button>
    )
  );
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'accent']),
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  stroke: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  onClick: (event) => event,
  stroke: false,
  type: 'button'
};

export default Button;
