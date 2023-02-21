import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getClassName } from '@helpers';

import './styles.scss';

const Input = ({
  autoFocus,
  containerClassName,
  disabled,
  inputClassName,
  label,
  labelClassName,
  name,
  onChange,
  placeholder,
  readonly,
  tabIndex,
  type,
  value
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
  autoFocus: PropTypes.bool,
  containerClassName: PropTypes.string,
  disabled: PropTypes.bool,
  inputClassName: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  tabIndex: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string
};

Input.defaultProps = {
  autoFocus: false,
  containerClassName: '',
  disabled: false,
  inputClassName: '',
  label: '',
  labelClassName: '',
  name: '',
  onChange: (event) => event,
  placeholder: '',
  readonly: false,
  tabIndex: 0,
  type: 'text',
  value: ''
};

export default Input;
