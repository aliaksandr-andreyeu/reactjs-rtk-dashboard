import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Input, SvgIcon, Alert } from '@components';
import { navigation, errors } from '@constants';
import { validateEmail, validateConfirm, preventDefault } from '@helpers';

import { unwrapResult } from '@reduxjs/toolkit';

import './styles.scss';

const {
  validation: { passwordRequired }
} = errors;

const SignUpScreen = ({ signUp, resetState, loading, error }) => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userConfirm, setUserConfirm] = useState('');

  const [userNameError, setUserNameError] = useState('');
  const [userPassError, setUserPassError] = useState('');
  const [userConfirmError, setUserConfirmError] = useState('');

  useEffect(() => {
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
    const error = value ? '' : passwordRequired;
    setUserPassError(error);
    setUserPass(value);
  };

  const checkConfirm = (value) => {
    validateConfirm(value, userPass, setUserConfirmError);
    setUserConfirm(value);
  };

  const handleSignUp = (event) => {
    resetState();

    Boolean(event) && preventDefault(event);

    checkEmail(userName);
    checkPass(userPass);
    checkConfirm(userConfirm);

    if (userName && userPass && userConfirm && !userNameError && !userPassError && !userConfirmError) {
      const payload = {
        username: userName,
        password: userPass
      };
      signUp(payload)
        .then(unwrapResult)
        .then((data) => {
          console.log('****************************************** signUp data', data);
        })
        .catch((err) => {
          console.log('****************************************** signUp err', err);
        });
    }
  };

  return (
    <div className='auth-box signup'>
      <div className='auth-inbox'>
        <form className='auth-form' onSubmit={handleSignUp}>
          <div className='logo'>
            <SvgIcon className='logo-icon' name='logo' />
            <h1>{REACT_ENV.BRAND || 'Company'}</h1>
          </div>
          <h2>Sign up</h2>
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
          <Button
            loading={loading}
            color={'accent'}
            label={navigation.signup.name}
            type={'submit'}
            className={'btn'}
            onClick={handleSignUp}
          />
          <Link className='auth-link' to={navigation.signin.path}>
            {navigation.signin.name}
          </Link>
        </form>
      </div>
    </div>
  );
};

SignUpScreen.propTypes = {
  signUp: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

SignUpScreen.defaultProps = {
  signUp: (payload) => payload,
  resetState: () => {},
  loading: false,
  error: null
};

export default SignUpScreen;
