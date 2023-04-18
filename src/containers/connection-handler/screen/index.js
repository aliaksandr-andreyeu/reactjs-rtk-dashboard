import React from 'react';
import PropTypes from 'prop-types';

import { getClassName } from '@helpers';
import './styles.scss';

const ConnectionHandlerScreen = ({ visible, message }) => (
  <div className={getClassName('connection-error', visible && Boolean(message) && 'open')}>
    <span className='title'>{message}</span>
  </div>
);

ConnectionHandlerScreen.propTypes = {
  visible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

ConnectionHandlerScreen.defaultProps = {
  visible: false,
  message: ''
};

export default ConnectionHandlerScreen;
