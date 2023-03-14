import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button, Input, SvgIcon } from '@components';
import { navigation, errors } from '@constants';
import { validateEmail, validateConfirm } from '@helpers';

import './styles.scss';

const {
  validation: { passwordRequired }
} = errors;

const SignUpScreen = ({ signUp }) => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userConfirm, setUserConfirm] = useState('');

  const [userNameError, setUserNameError] = useState('');
  const [userPassError, setUserPassError] = useState('');
  const [userConfirmError, setUserConfirmError] = useState('');

  const checkEmail = (value) => {
    validateEmail(value, setUserNameError);
    setUserName(value);
  };

  const checkPass = (value) => {
    const error = value ? '' : passwordRequired;
    setUserPassError(error);
    setUserPass(value);
  };

  const checkConfirm = (value) => {
    validateConfirm(value, userPass, setUserConfirmError);
    setUserConfirm(value);
  };

  const handleSignUp = () => {
    checkEmail(userName);
    checkPass(userPass);
    checkConfirm(userConfirm);

    if (userName && userPass && userConfirm && !userNameError && !userPassError && !userConfirmError) {
      const payload = {
        username: userName,
        password: userPass
      };
      signUp(payload);
    }
  };

  return (
    <div className='auth-box signup'>
      <div className='auth-inbox'>
        <div className='logo'>
          <SvgIcon className='logo-icon' name='logo' />
          <h1>Company</h1>
        </div>
        <h2>Sign up</h2>
        <Input
          label={'Enter email'}
          type={'text'}
          containerClassName={'input-box'}
          placeholder={'Email'}
          name={'username'}
          onChange={checkEmail}
          error={userNameError}
          value={userName}
        />
        <Input
          label={'Enter password'}
          type={'password'}
          containerClassName={'input-box'}
          placeholder={'Password'}
          name={'userpass'}
          onChange={checkPass}
          error={userPassError}
          value={userPass}
        />
        <Input
          label={'Confirm password'}
          type={'password'}
          containerClassName={'input-box'}
          placeholder={'Confirm'}
          name={'userpass'}
          onChange={checkConfirm}
          error={userConfirmError}
          value={userConfirm}
        />
        <Button color={'accent'} label={'Sign up'} type={'button'} className={'btn'} onClick={handleSignUp} />
        <Link className='auth-link' to={navigation.signin}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

SignUpScreen.propTypes = {
  signUp: PropTypes.func.isRequired
};

SignUpScreen.defaultProps = {
  signUp: (payload) => payload
};

export default SignUpScreen;
