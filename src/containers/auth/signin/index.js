import React from 'react';
import SignInScreen from './screen';
import { actions } from '@store';
import { useDispatch } from 'react-redux';

const SignIn = () => {
  const {
    auth: { signIn }
  } = actions;

  const dispatch = useDispatch();

  const handleSignIn = (payload) => dispatch(signIn(payload));

  return <SignInScreen signIn={handleSignIn} />;
};

export default SignIn;
