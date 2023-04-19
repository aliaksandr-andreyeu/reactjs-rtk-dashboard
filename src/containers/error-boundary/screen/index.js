import React from 'react';
import PropTypes from 'prop-types';

import { errors } from '@constants';
import { Button } from '@components';

import './styles.scss';

const {
  common: { error }
} = errors;

const reload = () => location.reload(true);

const ErrorBoundaryScreen = ({ name, message }) => {
  return (
    <div className='error-boundary'>
      <div className='error-box'>
        <div className='header'>
          <h3>{error}</h3>
        </div>
        <div className='body'>
          <p>
            <strong>{name}:</strong>&nbsp; {message}
          </p>
        </div>
        <div className='footer'>
          <Button className='btn' onClick={reload} color='accent' label='Try Again' />
        </div>
      </div>
    </div>
  );
};

ErrorBoundaryScreen.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]).isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]).isRequired
};

ErrorBoundaryScreen.defaultProps = {
  name: null,
  message: null
};

export default ErrorBoundaryScreen;
