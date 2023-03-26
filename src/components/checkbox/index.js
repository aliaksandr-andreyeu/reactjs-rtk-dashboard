import React from 'react';
import PropTypes from 'prop-types';

import { SvgIcon } from '@components';
import { getClassName } from '@helpers';

import './styles.scss';

const Checkbox = ({ checkboxClassName, checked, containerClassName, disabled, label, labelClassName, onClick }) => {
  const handleClick = () => {
    if (disabled) return;

    Boolean(onClick) && onClick(!checked);
  };

  return (
    <div className={getClassName('cmp-checkbox-container', disabled && 'disabled', containerClassName)}>
      <span className={getClassName('checkbox', checked && 'checked', checkboxClassName)} onClick={handleClick}>
        {checked && <SvgIcon className='icon' name='checkbox' />}
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
  checkboxClassName: PropTypes.string,
  checked: PropTypes.bool,
  containerClassName: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  onClick: PropTypes.func
};

Checkbox.defaultProps = {
  checkboxClassName: '',
  checked: false,
  containerClassName: '',
  disabled: false,
  label: '',
  labelClassName: '',
  onClick: (checked) => checked
};

export default Checkbox;
