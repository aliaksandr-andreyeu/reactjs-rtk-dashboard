import React, { useEffect } from 'react';
import UsersScreen from './screen';
import { actions } from '@store';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {
  const { usersData, deleteUserData, updateUserData } = useSelector((state) => state.users);

  const { overview } = useSelector((state) => state.account);

  const data = usersData.data;
  const loading = usersData.loading || deleteUserData.loading || updateUserData.loading;

  const getUsersError = usersData.error;
  const deleteUserError = deleteUserData.error;
  const updateError = updateUserData.error;

  const {
    users: { getUsers, deleteUser, updateUser }
  } = actions;

  const dispatch = useDispatch();

  const getUsersData = () => dispatch(getUsers());
  const handleDeleteUser = (payload) => dispatch(deleteUser(payload));
  const handleUpdateUser = (payload) => dispatch(updateUser(payload));

  useEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    getUsersData();
  }, []);

  return (
    <>
      <button
        style={{ display: 'block', padding: '15px', margin: '12px 16px 24px' }}
        onClick={() => {
          getUsersData();
        }}
      >
        GO
      </button>

      <UsersScreen
        users={data}
        updateUser={handleUpdateUser}
        deleteUser={handleDeleteUser}
        currentUser={overview}
        loading={loading}
        getUsersError={getUsersError}
        deleteUserError={deleteUserError}
        updateError={updateError}
      />
    </>
  );
};

export default Users;
