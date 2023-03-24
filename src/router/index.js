import React, { useLayoutEffect } from 'react';
import { navigation } from '@constants';
import {
  NotFound,
  ResetPassword,
  SignIn,
  SignUp,
  Users,
  App,
  TermsConditions,
  Profile,
  Settings,
  About,
  PrivacyPolicy
} from '@containers';
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

  const { token, isLoading } = useSelector((state) => state.auth);

  return isLoading ? (
    <Loader visible={isLoading} />
  ) : token ? (
    <Routes>
      <Route path={navigation.index} element={<App />}>
        <Route index element={<Users />} />
        <Route path={'users'} element={<Users />} />
        <Route path={'profile'} element={<Profile />} />
        <Route path={'settings'} element={<Settings />} />
        <Route path={'about'} element={<About />} />
        <Route path={'privacy-policy'} element={<PrivacyPolicy />} />
        <Route path={'terms-and-conditions'} element={<TermsConditions />} />
        <Route path='*' element={<NotFound />} />
      </Route>
      <Route path={navigation.signin} element={<Navigate to={navigation.index} replace />} />
      <Route path={navigation.signup} element={<Navigate to={navigation.index} replace />} />
      <Route path={navigation.resetPassword} element={<Navigate to={navigation.index} replace />} />
      <Route path='*' element={<Navigate to={navigation.index} replace />} />
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
