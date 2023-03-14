import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { SvgIcon } from '@components';
import { getClassName, preventDefault } from '@helpers';

import './styles.scss';

const Input = forwardRef(
  (
    {
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
      value,
      error
    },
    ref
  ) => {
    const [val, setVal] = useState(value !== undefined ? value : '');
    const [visible, setVisible] = useState(false);

    const handleChange = (event) => {
      const value = event.target.value;
      setVal(value);
      Boolean(onChange) && onChange(value);
    };

    const security = Boolean(type === 'password');

    const switchHandle = (event) => {
      preventDefault(event);
      setVisible(!visible);
    };

    const getType = (type) => {
      return security && visible ? 'text' : type;
    };

    return (
      <div
        className={getClassName('cmp-input-box', Boolean(error) && 'error', security && 'security', containerClassName)}
      >
        {Boolean(label) && <label className={getClassName('cmp-input-label', labelClassName)}>{label}</label>}
        <input
          ref={ref}
          className={getClassName('cmp-input', inputClassName)}
          autoFocus={autoFocus}
          tabIndex={tabIndex}
          disabled={disabled}
          readOnly={readonly}
          type={getType(type)}
          placeholder={placeholder}
          value={val}
          onChange={handleChange}
          {...(name && { name })}
        />
        {security && (
          <a onClick={switchHandle} className='cmp-switch'>
            <SvgIcon className='icon' name={visible ? 'eye' : 'eyeOff'} />
          </a>
        )}
        {Boolean(error) && <span className='cmp-error'>{error}</span>}
      </div>
    );
  }
);

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
  value: PropTypes.string,
  error: PropTypes.string
};

Input.defaultProps = {
  autoFocus: false,
  containerClassName: '',
  disabled: false,
  inputClassName: '',
  label: '',
  labelClassName: '',
  name: '',
  onChange: (el) => el,
  placeholder: '',
  readonly: false,
  tabIndex: 0,
  type: 'text',
  value: '',
  error: ''
};

Input.displayName = 'Input';

export default Input;
