import React, { useEffect } from 'react';
import UsersScreen from './screen';
import { actions } from '@store';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {
  const { usersData, deleteUserData } = useSelector((state) => state.users);

  const { overview } = useSelector((state) => state.account);

  const data = usersData.data;
  const loading = usersData.loading || deleteUserData.loading;
  const error = usersData.error || deleteUserData.error;

  const {
    users: { getUsers, deleteUser }
  } = actions;

  const dispatch = useDispatch();

  const getUsersData = () => dispatch(getUsers());
  const handleDeleteUser = (payload) => dispatch(deleteUser(payload));

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

      <UsersScreen users={data} deleteUser={handleDeleteUser} currentUser={overview} loading={loading} error={error} />
    </>
  );
};

export default Users;
