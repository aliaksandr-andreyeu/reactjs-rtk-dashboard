import React, { useEffect } from 'react';
import UsersScreen from './screen';
import { actions } from '@store';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {
  const {
    usersData: { error, loading, data }
  } = useSelector((state) => state.users);
  const { overview } = useSelector((state) => state.account);

  const {
    users: { getUsers }
  } = actions;

  const dispatch = useDispatch();

  const getUsersData = () => dispatch(getUsers());

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
          // getUsersData();
          // getUsersData();
          // getUsersData();
          // getUsersData();
          // getUsersData();
          // getUsersData();
        }}
      >
        GO
      </button>
      <UsersScreen users={data} currentUser={overview} loading={loading} error={error} />
    </>
  );
};

export default Users;
