import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Input, SvgIcon, Alert } from '@components';
import { navigation, errors } from '@constants';
import { validateEmail, preventDefault } from '@helpers';

import { unwrapResult } from '@reduxjs/toolkit';

import './styles.scss';

const {
  validation: { passwordRequired }
} = errors;

const SignInScreen = ({ signIn, loading, error }) => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [message, setMessage] = useState(error);

  const [userNameError, setUserNameError] = useState('');
  const [userPassError, setUserPassError] = useState('');

  useEffect(() => {
    setMessage(error);
  }, [error]);

  const checkEmail = (value) => {
    validateEmail(value, setUserNameError);
    setUserName(value);
  };

  const checkPass = (value) => {
    const err = value ? '' : passwordRequired;
    setUserPassError(err);
    setUserPass(value);
  };

  const handleSignIn = (event) => {
    Boolean(event) && preventDefault(event);

    setMessage(null);
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
        <form className='auth-form' onSubmit={handleSignIn}>
          <div className='logo'>
            <SvgIcon className='logo-icon' name='logo' />
            <h1>Company</h1>
          </div>
          <h2>Sign in</h2>
          <Alert className='alert-box' message={message} type='error' />
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
            type={'submit'}
            className={'btn'}
            onClick={handleSignIn}
          />
          <Link className='auth-link' to={navigation.signup}>
            Sign up
          </Link>
        </form>
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
