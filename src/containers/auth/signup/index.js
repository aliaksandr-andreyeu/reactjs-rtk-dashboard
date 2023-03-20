import React from 'react';
import SignUpScreen from './screen';
import { actions, store } from '@store';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const {
    auth: { signUp, resetSignUpState }
  } = actions;

  const {
    auth: {
      signUpData: { error, loading }
    }
  } = store.getState();

  const dispatch = useDispatch();

  const handleSignUp = (payload) => dispatch(signUp(payload));
  const handleResetState = () => dispatch(resetSignUpState());

  return <SignUpScreen signUp={handleSignUp} resetState={handleResetState} loading={loading} error={error} />;
};

export default SignUp;
