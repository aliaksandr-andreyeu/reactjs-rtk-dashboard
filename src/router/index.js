import React, { useLayoutEffect } from 'react';
import { navigation } from '@constants';
import { NotFound, ResetPassword, SignIn, SignUp, Users } from '@containers';
import { Loader } from '@components';
import { actions } from '@store';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

const Router = () => {
  const dispatch = useDispatch();

  const {
    auth: { refreshToken }
  } = actions;

  const handleRefreshToken = () => dispatch(refreshToken());

  useLayoutEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    handleRefreshToken();
  }, []);

  const auth = useSelector((state) => state.auth);

  const token = auth.token;
  const isLoading = auth.isLoading;

  return isLoading ? (
    <Loader visible={isLoading} />
  ) : token ? (
    <Routes>
      <Route path={navigation.index} element={<Users />} />
      <Route path={'/users'} element={<Users />} />
      <Route path={'/profile'} element={<Users />} />
      <Route path={'/settings'} element={<Users />} />
      <Route path={'/about'} element={<Users />} />
      <Route path={'/privacy-policy'} element={<Users />} />
      <Route path={'/terms-and-conditions'} element={<Users />} />
      <Route path={navigation.signin} element={<Navigate to={navigation.index} replace />} />
      <Route path={navigation.signup} element={<Navigate to={navigation.index} replace />} />
      <Route path={navigation.resetPassword} element={<Navigate to={navigation.index} replace />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  ) : (
    <Routes>
      <Route path={navigation.signin} element={<SignIn />} />
      <Route path={navigation.signup} element={<SignUp />} />
      <Route path={navigation.resetPassword} element={<ResetPassword />} />
      <Route path='*' element={<Navigate to={navigation.signin} replace />} />
    </Routes>
  );
};

export default Router;
