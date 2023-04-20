import React, { useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import UsersScreen from './screen';
import { actions } from '@store';
import { useAppTitle, useErrorsHandler } from '@context';

const Users = ({ title }) => {
  const { rejectHandler } = useErrorsHandler();
  const { setTitle } = useAppTitle();

  const { usersData, deleteUserData, updateUserData } = useSelector((state) => state.users);

  const { overview } = useSelector((state) => state.account);

  const loading = usersData.loading || deleteUserData.loading || updateUserData.loading;

  const data = usersData.data
    ? usersData.data.filter((user) => Boolean(overview && overview.id && overview.id !== user.id))
    : [];

  const getUsersError = usersData.error;
  const deleteUserError = deleteUserData.error;
  const updateError = updateUserData.error;

  const {
    users: { getUsers, deleteUser, updateUser, resetGetUsersState, resetUpdateUserState, resetDeleteUserState }
  } = actions;

  const dispatch = useDispatch();

  const getUsersData = () => dispatch(getUsers());
  const handleDeleteUser = (payload) => dispatch(deleteUser(payload));
  const handleUpdateUser = (payload) => dispatch(updateUser(payload));

  const resetGetUsers = () => dispatch(resetGetUsersState());
  const resetUpdateUser = () => dispatch(resetUpdateUserState());
  const resetDeleteUser = () => dispatch(resetDeleteUserState());

  /* eslint-disable react-hooks/exhaustive-deps */
  useLayoutEffect(() => {
    setTitle(title);
  }, []);

  useEffect(() => {
    getUsersData();

    return () => {
      resetGetUsers();
      resetUpdateUser();
      resetDeleteUser();
    };
  }, []);

  useEffect(() => {
    getUsersError && rejectHandler(getUsersError, resetGetUsers);
  }, [getUsersError]);

  useEffect(() => {
    updateError && rejectHandler(updateError, resetUpdateUser);
  }, [updateError]);

  useEffect(() => {
    deleteUserError && rejectHandler(deleteUserError, resetDeleteUser);
  }, [deleteUserError]);

  return <UsersScreen users={data} updateUser={handleUpdateUser} deleteUser={handleDeleteUser} loading={loading} />;
};

Users.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

Users.defaultProps = {
  title: null
};

export default Users;
