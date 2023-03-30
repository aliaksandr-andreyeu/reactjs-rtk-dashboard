import React from 'react';
import SignInScreen from './screen';
import { actions } from '@store';
import { useSelector, useDispatch } from 'react-redux';

const SignIn = () => {
  const {
    auth: { signIn, resetSignInState }
  } = actions;

  const {
    signInData: { error, loading }
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSignIn = (payload) => dispatch(signIn(payload));
  const handleResetState = () => dispatch(resetSignInState());

  return <SignInScreen signIn={handleSignIn} resetState={handleResetState} loading={loading} error={error} />;
};

export default SignIn;
