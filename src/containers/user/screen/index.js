import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { Input, Button } from '@components';
import { navigation } from '@constants';

import './styles.scss';

const UserScreen = ({ data }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(navigation.users.path);
  };

  return (
    <div className='data-container user'>
      <div className='row'>
        <div className='col'>
          <div className='cell'>
            <Input
              label={'Username'}
              type={'text'}
              containerClassName={'input-box'}
              placeholder={'Username'}
              name={'username'}
              value={data.username || ''}
              disabled={true}
            />
          </div>
          <div className='cell'>
            <Input
              label={'Name'}
              type={'text'}
              containerClassName={'input-box'}
              placeholder={'Name'}
              name={'name'}
              value={data.name || ''}
              disabled={true}
            />
          </div>
          <div className='cell'>
            <Input
              label={'Surname'}
              type={'text'}
              containerClassName={'input-box'}
              placeholder={'Surname'}
              name={'surname'}
              value={data.surname || ''}
              disabled={true}
            />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='cell'>
            <Input
              label={'Age'}
              type={'number'}
              containerClassName={'input-box'}
              placeholder={'Age'}
              name={'age'}
              value={data.age || ''}
              disabled={true}
            />
          </div>
          <div className='cell'>
            <Input
              label={'Job'}
              type={'text'}
              containerClassName={'input-box'}
              placeholder={'Job'}
              name={'job'}
              value={data.job || ''}
              disabled={true}
            />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col items-center'>
          <Button color={'primary'} label={'Back'} type={'button'} className={'btn'} onClick={goBack} />
        </div>
      </div>
    </div>
  );
};

UserScreen.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])])
};

UserScreen.defaultProps = {
  data: null
};

export default UserScreen;
