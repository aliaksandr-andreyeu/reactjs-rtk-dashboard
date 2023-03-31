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
    account: {
      changePassword,
      getAccount,
      editAccount,
      resetGetAccountState,
      resetEditAccountState,
      resetChangePasswordState
    }
  } = actions;

  const { overview, getAccountData, editAccountData, changePasswordData } = useSelector((state) => state.account);

  const loading = getAccountData.loading || editAccountData.loading || changePasswordData.loading;

  const getAccountError = getAccountData.error;
  const editAccountError = editAccountData.error;
  const changePasswordError = changePasswordData.error;

  const dispatch = useDispatch();
  const handleChangePassword = (payload) => dispatch(changePassword(payload));
  const handleGetAccount = () => dispatch(getAccount());
  const handleEditAccount = (payload) => dispatch(editAccount(payload));

  const resetGetAccount = () => dispatch(resetGetAccountState());
  const resetEditAccount = () => dispatch(resetEditAccountState());
  const resetChangePassword = () => dispatch(resetChangePasswordState());

  const userTitle = (overview && overview.username) || title;

  /* eslint-disable react-hooks/exhaustive-deps */
  useLayoutEffect(() => {
    setTitle(userTitle);
  }, []);

  useEffect(() => {
    getAccountError && rejectHandler(getAccountError, resetGetAccount);
  }, [getAccountError]);

  useEffect(() => {
    editAccountError && rejectHandler(editAccountError, resetEditAccount);
  }, [editAccountError]);

  useEffect(() => {
    changePasswordError && rejectHandler(changePasswordError, resetChangePassword);
  }, [changePasswordError]);

  return (
    <ProfileScreen
      overview={overview}
      changePassword={handleChangePassword}
      getAccount={handleGetAccount}
      editAccount={handleEditAccount}
      loading={loading}
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
