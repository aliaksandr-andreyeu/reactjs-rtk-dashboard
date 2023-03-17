import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Input, SvgIcon, ErrorTip } from '@components';
import { navigation, errors } from '@constants';
import { validateEmail } from '@helpers';

import { unwrapResult } from '@reduxjs/toolkit';

import './styles.scss';

const {
  validation: { passwordRequired }
} = errors;

const SignInScreen = ({ signIn, loading, error }) => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');

  const [userNameError, setUserNameError] = useState('');
  const [userPassError, setUserPassError] = useState('');

  const checkEmail = (value) => {
    validateEmail(value, setUserNameError);
    setUserName(value);
  };

  const checkPass = (value) => {
    const err = value ? '' : passwordRequired;
    setUserPassError(err);
    setUserPass(value);
  };

  const handleSignIn = () => {
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
          console.log('****************************************** data', data);
        })
        .catch((err) => {
          console.log('****************************************** err', err);
        });
    }
  };

  return (
    <div className='auth-box signin'>
      <div className='auth-inbox'>
        <div className='logo'>
          <SvgIcon className='logo-icon' name='logo' />
          <h1>Company</h1>
        </div>
        <h2>Sign in</h2>
        <ErrorTip error={error || 'Incorrect password'} />
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
        <div className='reset-box'>
          <Link to={navigation.resetPassword}>Forgot password</Link>
        </div>
        <Button
          loading={loading}
          color={'accent'}
          label={'Sign in'}
          type={'button'}
          className={'btn'}
          onClick={handleSignIn}
        />
        <Link className='auth-link' to={navigation.signup}>
          Sign up
        </Link>
      </div>
    </div>
  );
};

SignInScreen.propTypes = {
  signIn: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

SignInScreen.defaultProps = {
  signIn: (payload) => payload,
  loading: false,
  error: null
};

export default SignInScreen;
