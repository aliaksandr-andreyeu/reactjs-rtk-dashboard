import React from 'react';
import ResetPasswordScreen from './screen';

import { actions } from '@store';
import { useSelector, useDispatch } from 'react-redux';

const ResetPassword = () => {
  const {
    auth: { resetPassword, resetPasswordState }
  } = actions;

  const { resetPasswordData } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleResetPassword = (payload) => dispatch(resetPassword(payload));
  const resetState = () => dispatch(resetPasswordState());

  return (
    <ResetPasswordScreen
      resetPassword={handleResetPassword}
      resetState={resetState}
      error={resetPasswordData.error}
      message={resetPasswordData.message}
    />
  );
};

export default ResetPassword;
