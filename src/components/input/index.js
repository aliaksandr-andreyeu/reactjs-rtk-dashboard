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
      error,
      textArea
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);

    const handleChange = (event) => {
      const value = event.target.value;
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

    const Component = textArea ? 'textarea' : 'input';

    return (
      <div
        className={getClassName(
          'cmp-input-box',
          Boolean(error && !disabled) && 'error',
          textArea && 'textarea',
          Boolean(security && !disabled) && 'security',
          disabled && 'disabled',
          containerClassName
        )}
      >
        {Boolean(label) && <label className={getClassName('cmp-input-label', labelClassName)}>{label}</label>}
        <Component
          {...(!textArea && { type: getType(type) })}
          ref={ref}
          className={getClassName('cmp-input', inputClassName)}
          autoFocus={autoFocus}
          value={value !== undefined ? value : ''}
          tabIndex={tabIndex}
          disabled={disabled}
          readOnly={readonly}
          onChange={handleChange}
          placeholder={placeholder}
          {...(name && { name })}
        />
        {Boolean(security && !disabled) && (
          <a onClick={switchHandle} className='cmp-switch'>
            <SvgIcon className='icon' name={visible ? 'eye' : 'eye-off'} />
          </a>
        )}
        {Boolean(error && !disabled) && <span className='cmp-error'>{error}</span>}
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
  textArea: PropTypes.bool,
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
  error: '',
  textArea: false
};

Input.displayName = 'Input';

export default Input;
