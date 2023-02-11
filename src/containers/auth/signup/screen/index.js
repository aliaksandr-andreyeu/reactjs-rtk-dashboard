import React from 'react';

import { Link } from 'react-router-dom';
import { navigation } from '@constants';

import { Input, Button, SvgIcon } from '@components';

import './styles.scss';

const SignUpScreen = () => {
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
        <Input
          label={'Confirm password'}
          type={'password'}
          containerClassName={'input-box'}
          placeholder={'Confirm'}
          name={'userpass'}
          onChange={(event) => {
            console.log('event.target.value', event.target.value);
          }}
        />
        <Button label={'Sign up'} type={'button'} className={'btn'} />
        <Link className='auth-link' to={navigation.signin}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUpScreen;
