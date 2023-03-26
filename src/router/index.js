import React, { useLayoutEffect } from 'react';
import { navigation } from '@constants';
import {
  NotFound,
  ResetPassword,
  SignIn,
  SignUp,
  Users,
  User,
  App,
  TermsConditions,
  Profile,
  Settings,
  About,
  PrivacyPolicy,
  ContactUs
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

  const getPath = (path) => {
    return path.substring(1);
  };

  return isLoading ? (
    <Loader visible={isLoading} />
  ) : token ? (
    <Routes>
      <Route exact path={navigation.index.path} element={<App />}>
        <Route index element={<Users />} />
        <Route exact path={getPath(navigation.users.path)} element={<Users />} />
        <Route exact path={getPath(navigation.user.path)} element={<User />} />
        <Route exact path={getPath(navigation.profile.path)} element={<Profile />} />
        <Route exact path={getPath(navigation.contactUs.path)} element={<ContactUs />} />
        <Route exact path={getPath(navigation.settings.path)} element={<Settings />} />
        <Route exact path={getPath(navigation.about.path)} element={<About />} />
        <Route exact path={getPath(navigation.privacyPolicy.path)} element={<PrivacyPolicy />} />
        <Route exact path={getPath(navigation.termsConditions.path)} element={<TermsConditions />} />
        <Route path='*' element={<NotFound />} />
      </Route>
      <Route exact path={navigation.signin.path} element={<Navigate to={navigation.index.path} replace />} />
      <Route exact path={navigation.signup.path} element={<Navigate to={navigation.index.path} replace />} />
      <Route exact path={navigation.resetPassword.path} element={<Navigate to={navigation.index.path} replace />} />
      <Route path='*' element={<Navigate to={navigation.index.path} replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route exact path={navigation.signin.path} element={<SignIn />} />
      <Route exact path={navigation.signup.path} element={<SignUp />} />
      <Route exact path={navigation.resetPassword.path} element={<ResetPassword />} />
      <Route path='*' element={<Navigate to={navigation.signin.path} replace />} />
    </Routes>
  );
};

export default Router;
