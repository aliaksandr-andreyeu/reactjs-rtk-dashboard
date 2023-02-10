import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { navigation } from '@constants';
import { actions } from '@store';
import { Input, Button, SvgIcon } from '@components';

import './styles.scss';

const SignInScreen = () => {
  const {
    auth: { login }
  } = actions;

  const dispatch = useDispatch();

  return (
    <div className='auth-box signin'>
      <div className='logo'>
        <SvgIcon className='logo-icon' name='logo' />
        <h1>Company</h1>
      </div>
      <h2>Sign in</h2>
      <Input
        label={'Enter email'}
        type={'text'}
        containerClassName={'input-box'}
        placeholder={'Email'}
        name={'username'}
        onChange={(event) => {
          console.log('event.target.value', event.target.value);
        }}
      />
      <Input
        label={'Enter password'}
        type={'password'}
        containerClassName={'input-box'}
        placeholder={'Password'}
        name={'userpass'}
        onChange={(event) => {
          console.log('event.target.value', event.target.value);
        }}
      />
      <div className='reset-box'>
        <Link to={navigation.resetPassword}>Forgot password</Link>
      </div>
      <Button
        label={'Sign in'}
        type={'button'}
        className={'btn'}
        onClick={() => {
          dispatch(login());
        }}
      />
      <Link className='auth-link' to={navigation.signup}>
        Sign up
      </Link>
    </div>
  );
};

export default SignInScreen;
