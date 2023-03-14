import React from 'react';
import SignUpScreen from './screen';
import { actions } from '@store';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const {
    auth: { signUp }
  } = actions;

  const dispatch = useDispatch();

  const handleSignUp = (payload) => dispatch(signUp(payload));

  return <SignUpScreen signUp={handleSignUp} />;
};

export default SignUp;
