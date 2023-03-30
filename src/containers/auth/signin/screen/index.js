import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { unwrapResult } from '@reduxjs/toolkit';

import { Button, Input, SvgIcon, Alert } from '@components';
import { navigation, errors } from '@constants';
import { validateEmail, preventDefault } from '@helpers';

import './styles.scss';

const {
  validation: { passwordRequired }
} = errors;

const SignInScreen = ({ signIn, resetState, loading, error }) => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');

  const [userNameError, setUserNameError] = useState('');
  const [userPassError, setUserPassError] = useState('');

  useLayoutEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    resetState();
    return () => {
      resetState();
    };
  }, []);

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
    <div className='auth-box signin'>
      <div className='auth-inbox'>
        <form className='auth-form' onSubmit={handleSignIn}>
          <div className='logo'>
            <SvgIcon className='logo-icon' name='logo' />
            <h1>{REACT_ENV.BRAND || 'Company'}</h1>
          </div>
          <h2>Sign in</h2>
          <Alert className='alert-box' message={error} type='error' />
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
            <Link to={navigation.resetPassword.path}>{navigation.resetPassword.name}</Link>
          </div>
          <Button
            loading={loading}
            color={'accent'}
            label={navigation.signin.name}
            type={'submit'}
            className={'btn'}
            onClick={handleSignIn}
          />
          <Link className='auth-link' to={navigation.signup.path}>
            {navigation.signup.name}
          </Link>
        </form>
      </div>
    </div>
  );
};

SignInScreen.propTypes = {
  signIn: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

SignInScreen.defaultProps = {
  signIn: (payload) => payload,
  resetState: () => {},
  loading: false,
  error: null
};

export default SignInScreen;
