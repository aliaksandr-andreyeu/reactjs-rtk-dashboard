import React, { Fragment, useState } from 'react';

import { Link } from 'react-router-dom';
import { navigation } from '@constants';

import { Input, Button, SvgIcon } from '@components';

import './styles.scss';

const ResetPasswordScreen = () => {
  const [resetPass, setResetPass] = useState(false);

  return (
    <div className='auth-box reset-password'>
      <div className='auth-inbox'>
        <div className='logo'>
          <SvgIcon className='logo-icon' name='logo' />
          <h1>Company</h1>
        </div>
        <h2>Reset password</h2>
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
        {resetPass && (
          <Fragment>
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
          </Fragment>
        )}
        <Button
          label={resetPass ? 'Change password' : 'Reset password'}
          type={'button'}
          className={'btn'}
          onClick={(event) => {
            !resetPass &&
              (() => {
                setResetPass(!resetPass);
                event.target.blur();
              })();
          }}
        />
        <Link className='auth-link' to={navigation.signin}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordScreen;
