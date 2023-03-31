import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from '@components';
import { preventDefault, validateEmail } from '@helpers';

import './styles.scss';

const ProfileScreen = ({ overview, changePassword, getAccount, editAccount, loading }) => {
  const [edit, setEdit] = useState(false);

  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [job, setJob] = useState('');

  const [userNameError, setUserNameError] = useState('');

  const checkEmail = (value) => {
    validateEmail(value, setUserNameError);
    setUserName(value);
  };

  const handleSubmit = (event) => {
    resetState();

    Boolean(event) && preventDefault(event);

    checkEmail(userName);
    checkPass(userPass);

    if (userName && userPass && !userNameError && !userPassError) {
      const payload = {
        username: userName,
        password: userPass
      };
      signIn(payload)
        .then(unwrapResult)
        .then((data) => {
          console.log('****************************************** signIn data', data);
        })
        .catch((err) => {
          console.log('****************************************** signIn err', err);
        });
    }
  };

  return (
    <div className='data-container'>
      <form className='data-form' onSubmit={handleSubmit}>
        <Input
          label={'Username'}
          type={'text'}
          containerClassName={'input-box'}
          placeholder={'Username'}
          name={'username'}
          onChange={checkEmail}
          error={userNameError}
          value={userName}
          disabled={!edit}
        />

        <Input
          label={'Name'}
          type={'text'}
          containerClassName={'input-box'}
          placeholder={'Name'}
          name={'name'}
          // onChange={checkEmail}
          // error={userNameError}
          // value={userName}
          disabled={!edit}
        />

        <Input
          label={'Surname'}
          type={'text'}
          containerClassName={'input-box'}
          placeholder={'Surname'}
          name={'surname'}
          // onChange={checkEmail}
          // error={userNameError}
          // value={userName}
          disabled={!edit}
        />

        <Input
          label={'Age'}
          type={'text'}
          containerClassName={'input-box'}
          placeholder={'Age'}
          name={'age'}
          // onChange={checkEmail}
          // error={userNameError}
          // value={userName}
          disabled={!edit}
        />

        <Input
          label={'Job'}
          type={'text'}
          containerClassName={'input-box'}
          placeholder={'Job'}
          name={'job'}
          // onChange={checkEmail}
          // error={userNameError}
          // value={userName}
          disabled={!edit}
        />

        <Button
          // loading={loading}
          color={'accent'}
          label={'asdasdasd'}
          type={'submit'}
          className={'btn'}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

ProfileScreen.propTypes = {
  changePassword: PropTypes.func.isRequired,
  getAccount: PropTypes.func.isRequired,
  editAccount: PropTypes.func.isRequired,
  overview: PropTypes.object,
  loading: PropTypes.bool
};

ProfileScreen.defaultProps = {
  changePassword: (payload) => payload,
  getAccount: () => {},
  editAccount: (payload) => payload,
  overview: {},
  loading: false
};

export default ProfileScreen;
