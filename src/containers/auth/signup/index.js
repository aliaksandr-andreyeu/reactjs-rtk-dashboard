import React from 'react';
import SignUpScreen from './screen';
import { actions } from '@store';
import { useSelector, useDispatch } from 'react-redux';

const SignUp = () => {
  const {
    auth: { signUp, resetSignUpState }
  } = actions;

  const {
    signUpData: { error, loading }
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSignUp = (payload) => dispatch(signUp(payload));
  const handleResetState = () => dispatch(resetSignUpState());

  return <SignUpScreen signUp={handleSignUp} resetState={handleResetState} loading={loading} error={error} />;
};

export default SignUp;
