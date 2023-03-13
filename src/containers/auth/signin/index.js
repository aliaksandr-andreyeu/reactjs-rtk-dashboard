import React from 'react';
import SignInScreen from './screen';
import { actions } from '@store';
import { useDispatch } from 'react-redux';

const SignIn = () => {
  const {
    auth: { signin }
  } = actions;

  const dispatch = useDispatch();

  return <SignInScreen signin={signin} dispatch={dispatch} />;
};

export default SignIn;
