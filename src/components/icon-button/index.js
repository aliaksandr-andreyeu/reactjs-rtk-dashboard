import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { getClassName } from '@helpers';

import './styles.scss';

const IconButton = forwardRef(({ disabled, label, onClick, className, children }, ref) => {
  return children ? (
    <button
      ref={ref}
      className={getClassName('cmp-icon-button', className)}
      type={'button'}
      disabled={disabled}
      onClick={onClick}
    >
      {children} {label && <span>{label}</span>}
    </button>
  ) : null;
});

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

IconButton.displayName = 'IconButton';

export default IconButton;
