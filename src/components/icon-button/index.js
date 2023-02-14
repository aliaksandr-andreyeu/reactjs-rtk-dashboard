import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const IconButton = ({ disabled, label, onClick, className, children }) => {
  const getClassName = (...args) => Array.from(args).filter(Boolean).join(' ');

  return children ? (
    <button
      className={getClassName('cmp-icon-button', className)}
      type={'button'}
      disabled={disabled}
      onClick={onClick}
    >
      {children} {label && <span>{label}</span>}
    </button>
  ) : null;
};

IconButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

IconButton.defaultProps = {
  className: '',
  label: '',
  disabled: false,
  onClick: (event) => event
};

export default IconButton;
