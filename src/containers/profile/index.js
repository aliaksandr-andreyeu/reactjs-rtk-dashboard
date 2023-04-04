import React, { useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import { actions } from '@store';
import { useSelector, useDispatch } from 'react-redux';
import { useAppTitle, useErrorsHandler } from '@context';
import ProfileScreen from './screen';

const Profile = ({ title }) => {
  const { rejectHandler } = useErrorsHandler();
  const { setTitle } = useAppTitle();

  const {
    account: { changePassword, editAccount, resetEditAccountState, resetChangePasswordState },
    auth: { refreshToken }
  } = actions;

  const { overview, editAccountData, changePasswordData } = useSelector((state) => state.account);

  const editAccountError = editAccountData.error;
  const changePasswordError = changePasswordData.error;

  const dispatch = useDispatch();
  const handleChangePassword = (payload) => dispatch(changePassword(payload));
  const handleEditAccount = (payload) => dispatch(editAccount(payload));
  const handleRefreshToken = () => dispatch(refreshToken());

  const resetEditAccount = () => dispatch(resetEditAccountState());
  const resetChangePassword = () => dispatch(resetChangePasswordState());

  const resetState = () => {
    resetEditAccount();
    resetChangePassword();
  };

  const userTitle = (overview && overview.username) || title;

  /* eslint-disable react-hooks/exhaustive-deps */
  useLayoutEffect(() => {
    setTitle(userTitle);
    resetState();

    return () => {
      resetState();
    };
  }, []);

  useEffect(() => {
    editAccountError && rejectHandler(editAccountError, resetEditAccount);
  }, [editAccountError]);

  useEffect(() => {
    changePasswordError && rejectHandler(changePasswordError, resetChangePassword);
  }, [changePasswordError]);

  return (
    <ProfileScreen
      overview={overview}
      resetState={resetState}
      changePass={handleChangePassword}
      changePassLoading={changePasswordData.loading}
      changePassMessage={changePasswordData.message}
      editAcc={handleEditAccount}
      editAccLoading={editAccountData.loading}
      editAccMessage={editAccountData.message}
      refreshToken={handleRefreshToken}
    />
  );
};

Profile.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

Profile.defaultProps = {
  title: null
};

export default Profile;
