import React, { useEffect } from 'react';
import UsersScreen from './screen';
import { actions, store } from '@store';
import { useDispatch } from 'react-redux';

const Users = () => {
  const {
    users: { getUsers }
  } = actions;

  const {
    users: {
      usersData: { error, loading, data }
    },
    account: { overview }
  } = store.getState();

  const dispatch = useDispatch();

  const getUsersData = () => dispatch(getUsers());

  useEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    getUsersData();
  }, []);

  return <UsersScreen users={data} currentUser={overview} loading={loading} error={error} />;
};

export default Users;
