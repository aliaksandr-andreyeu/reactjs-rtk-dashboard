import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { unwrapResult } from '@reduxjs/toolkit';

import { Button, Input, SvgIcon, Alert } from '@components';
import { navigation } from '@constants';
import { validateEmail, preventDefault } from '@helpers';

import './styles.scss';

const ResetPasswordScreen = ({ resetPassword, resetState, error, message }) => {
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');

  /* eslint-disable react-hooks/exhaustive-deps */
  useLayoutEffect(() => {
    resetState();

    return () => {
      resetState();
    };
  }, []);

  const checkEmail = (value) => {
    validateEmail(null, value, setUserNameError);
    setUserName(value);
  };

  const handleResetPassword = (event) => {
    resetState();

    Boolean(event) && preventDefault(event);

    checkEmail(userName);

    if (userName && !userNameError) {
      const payload = {
        username: userName
      };
      resetPassword(payload)
        .then(unwrapResult)
        .then((data) => {
          console.log('****************************************** resetPassword data', data);
        })
        .catch((err) => {
          console.log('****************************************** resetPassword err', err);
        });
    }
  };

  return (
    <div className='auth-box reset-password'>
      <div className='auth-inbox'>
        <form className='auth-form' onSubmit={handleResetPassword}>
          <div className='logo'>
            <SvgIcon className='logo-icon' name='logo' />
            <h1>{REACT_ENV.BRAND || 'Company'}</h1>
          </div>
          <h2>Reset password</h2>
          <Alert className='alert-box' message={error} type='error' />
          <Alert className='alert-box' message={message} type='success' />
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
          <Button
            color={'accent'}
            label={'Reset password'}
            type={'submit'}
            className={'btn'}
            onClick={handleResetPassword}
          />
          <Link className='auth-link' to={navigation.signin.path}>
            {navigation.signin.name}
          </Link>
        </form>
      </div>
    </div>
  );
};

ResetPasswordScreen.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

ResetPasswordScreen.defaultProps = {
  resetPassword: (payload) => payload,
  resetState: () => null,
  error: null,
  message: null
};

export default ResetPasswordScreen;
