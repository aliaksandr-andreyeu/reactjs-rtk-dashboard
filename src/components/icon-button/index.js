import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { getClassName } from '@helpers';

import './styles.scss';

const IconButton = forwardRef(({ children, className, disabled, label, onClick }, ref) => {
  const handleClick = (event) => {
    if (disabled) return;

    Boolean(onClick) && onClick(event);
  };

  return children ? (
    <div ref={ref} className={getClassName('cmp-icon-button', disabled && 'disabled', className)} onClick={handleClick}>
      <span className='icon'>{children}</span>
      {Boolean(label) && <span className='label'>{label}</span>}
    </div>
  ) : null;
});

IconButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func
};

IconButton.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  onClick: (event) => event
};

IconButton.displayName = 'IconButton';

export default IconButton;
