import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getClassName } from '@helpers';

import './styles.scss';

const Button = ({ loading, className, color, disabled, label, onClick, stroke, type }) => {
  const ref = useRef(null);

  let timer = null;
  const delay = 300;

  useEffect(() => {
    !loading && ref.current && ref.current.blur();
  }, [loading]);

  const setTimer = () => {
    timer = setTimeout(() => {
      ref.current && ref.current.blur();
    }, delay);
  };

  const clearTimer = () => {
    timer && clearTimeout(timer);
  };

  const handleClick = (event) => {
    if (disabled) return;

    if (!loading) {
      clearTimer();
      setTimer();

      Boolean(onClick) && onClick(event);
    }
  };

  return (
    Boolean(label) && (
      <button
        ref={ref}
        className={getClassName(
          'cmp-button',
          color && color,
          stroke && 'stroke',
          disabled && 'disabled',
          loading && 'loading',
          className
        )}
        type={type}
        disabled={disabled}
        onClick={handleClick}
      >
        <span className='gap left' />
        {label}
        <span className='gap right'>{loading && <span className='loader' />}</span>
      </button>
    )
  );
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'accent']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  stroke: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  className: '',
  disabled: false,
  loading: false,
  label: '',
  onClick: (event) => event,
  stroke: false,
  type: 'button'
};

export default Button;
