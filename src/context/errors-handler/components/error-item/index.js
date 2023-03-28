import React from 'react';
import PropTypes from 'prop-types';

import { Button, IconButton, SvgIcon } from '@components';
import { getClassName, stopPropagation } from '@helpers';

import './styles.scss';

const ErrorItem = ({ data, removeError }) => {
  const handleOK = () => {
    removeError && removeError(data.id);
  };

  return (
    <div onClick={handleOK} className={getClassName('cmp-errors-handler')}>
      <div onClick={stopPropagation} className='cmp-error-item'>
        <div className='header'>
          <h3>Error</h3>
          <IconButton className='icon-button' onClick={handleOK}>
            <SvgIcon name='close' />
          </IconButton>
        </div>
        {Boolean(data.error) && (
          <div className='body'>
            <p>{data.error}</p>
          </div>
        )}
        <div className='footer'>
          <Button className='btn' onClick={handleOK} color='accent' label='OK' />
        </div>
      </div>
    </div>
  );
};

ErrorItem.propTypes = {
  data: PropTypes.object.isRequired,
  removeError: PropTypes.func.isRequired
};

ErrorItem.defaultProps = {
  data: {},
  removeError: (id) => id
};

export default ErrorItem;
