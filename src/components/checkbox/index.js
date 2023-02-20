import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { SvgIcon } from '@components';

import { getClassName } from '@helpers';

import './styles.scss';

const Checkbox = ({ disabled, checked, label, containerClassName, labelClassName, checkboxClassName, onClick }) => {
  const [selected, setSelected] = useState(checked);

  const handleClick = (event) => {
    if (disabled) return;

    setSelected(!selected);
    Boolean(onClick) && onClick(event);
  };

  return (
    <div className={getClassName('cmp-checkbox-container', disabled && 'disabled', containerClassName)}>
      <span className={getClassName('checkbox', selected && 'checked', checkboxClassName)} onClick={handleClick}>
        {selected && <SvgIcon className='icon' name='checkbox' />}
      </span>
      {Boolean(label) && (
        <span className={getClassName('label', labelClassName)} onClick={handleClick}>
          {label}
        </span>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  labelClassName: PropTypes.string,
  checkboxClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Checkbox.defaultProps = {
  label: '',
  labelClassName: '',
  checkboxClassName: '',
  containerClassName: '',
  checked: false,
  disabled: false,
  onClick: (event) => event
};

export default Checkbox;
