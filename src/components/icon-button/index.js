import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { getClassName } from '@helpers';

import './styles.scss';

const IconButton = forwardRef(({ disabled, label, onClick, className, children }, ref) => {
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
