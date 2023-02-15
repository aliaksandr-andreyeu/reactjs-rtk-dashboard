import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getClassName } from '@helpers';

import './styles.scss';

const Input = ({
  label,
  type,
  inputClassName,
  labelClassName,
  containerClassName,
  autoFocus,
  tabIndex,
  disabled,
  readonly,
  placeholder,
  value,
  onChange,
  name
}) => {
  const [val, setVal] = useState(value !== undefined ? value : '');

  const handleChange = (event) => {
    setVal(event.target.value);
    Boolean(onChange) && onChange(event);
  };

  return (
    <div className={getClassName('cmp-input-box', containerClassName)}>
      {Boolean(label) && <label className={getClassName('cmp-input-label', labelClassName)}>{label}</label>}
      <input
        className={getClassName('cmp-input', inputClassName)}
        autoFocus={autoFocus}
        tabIndex={tabIndex}
        disabled={disabled}
        readOnly={readonly}
        type={type}
        placeholder={placeholder}
        value={val}
        onChange={handleChange}
        {...(name && { name })}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  autoFocus: PropTypes.bool,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  type: 'text',
  autoFocus: false,
  tabIndex: 0,
  disabled: false,
  readonly: false,
  value: '',
  label: '',
  name: '',
  inputClassName: '',
  labelClassName: '',
  containerClassName: '',
  placeholder: '',
  onChange: (event) => event
};

export default Input;
