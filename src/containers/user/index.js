import React, { useEffect } from 'react';
import UserScreen from './screen';
import { useParams, useLocation } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const { state } = useLocation();

  console.log('useParams id: ', id);
  console.log('useParams state: ', state);

  return <UserScreen />;
};

export default User;
