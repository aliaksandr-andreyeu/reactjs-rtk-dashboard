import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Input, SvgIcon } from '@components';
import { navigation } from '@constants';

import { validateEmail } from '@helpers';
import { errors } from '@constants';

import { Link } from 'react-router-dom';

import './styles.scss';

const {
  validation: { passwordRequired }
} = errors;

const SignInScreen = ({ signin, dispatch }) => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');

  const [userNameError, setUserNameError] = useState('');
  const [userPassError, setUserPassError] = useState('');

  const checkEmail = (value) => {
    validateEmail(value, setUserNameError);
    setUserName(value);
  };

  const checkPass = (value) => {
    const error = value ? '' : passwordRequired;
    setUserPassError(error);
    setUserPass(value);
  };

  const handleSignin = () => {
    checkEmail(userName);
    checkPass(userPass);

    if (userName && userPass && !userNameError && !userPassError) {
      const payload = {
        username: userName,
        password: userPass
      };
      dispatch(signin(payload));
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
        <Button color={'accent'} label={'Sign in'} type={'button'} className={'btn'} onClick={handleSignin} />
        <Link className='auth-link' to={navigation.signup}>
          Sign up
        </Link>
      </div>
    </div>
  );
};

SignInScreen.propTypes = {
  signin: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

SignInScreen.defaultProps = {
  signin: () => {},
  dispatch: () => {}
};

export default SignInScreen;
