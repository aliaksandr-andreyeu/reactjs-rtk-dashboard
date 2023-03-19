import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SvgIcon } from '@components';
import { getClassName, preventDefault } from '@helpers';

import './styles.scss';

const Alert = ({ message, className, type }) => {
  const [visible, setVisible] = useState(Boolean(message));

  useEffect(() => {
    setVisible(Boolean(message));
  }, [message]);

  const closeHandler = (event) => {
    preventDefault(event);
    setVisible(false);
  };

  const getIconName = () => {
    return type === 'success'
      ? 'checkbox-circle'
      : type === 'warning'
      ? 'alert'
      : type === 'error'
      ? 'alert-octagon'
      : 'info-filled';
  };

  return (
    visible && (
      <div className={getClassName('cmp-alert-tip', type && type, className)}>
        <SvgIcon className='icon' name={getIconName()} />
        <span className='cmp-alert'>{message}</span>
        <a className='cmp-close' onClick={closeHandler}>
          <SvgIcon name='close' />
        </a>
      </div>
    )
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  type: PropTypes.oneOf(['error', 'success', 'warning', 'info'])
};

Alert.defaultProps = {
  className: '',
  message: null,
  type: 'info'
};

export default Alert;
