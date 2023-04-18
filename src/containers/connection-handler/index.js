import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import ConnectionHandlerScreen from './screen';
import { errors } from '@constants';

const {
  common: { connectionFailure }
} = errors;

const getOnLineStatus = () =>
  typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean' ? navigator.onLine : true;

const ConnectionHandler = ({ children }) => {
  const [status, setStatus] = useState(getOnLineStatus());

  const setOnline = () => setStatus(true);
  const setOffline = () => setStatus(false);

  useEffect(() => {
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);

  return children ? (
    <Fragment>
      {children}
      <ConnectionHandlerScreen visible={!status} message={connectionFailure} />
    </Fragment>
  ) : null;
};

ConnectionHandler.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default ConnectionHandler;
