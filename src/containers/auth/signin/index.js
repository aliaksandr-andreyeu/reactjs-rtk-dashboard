import React from 'react';
import SignInScreen from './screen';
import { actions, store } from '@store';

import { useDispatch } from 'react-redux';

const SignIn = () => {
  const {
    auth: { signIn }
  } = actions;

  const {
    auth: {
      signInData: { error, loading }
    }
  } = store.getState();

  const dispatch = useDispatch();

  const handleSignIn = (payload) => dispatch(signIn(payload));

  return <SignInScreen signIn={handleSignIn} loading={loading} error={error} />;
};

export default SignIn;
