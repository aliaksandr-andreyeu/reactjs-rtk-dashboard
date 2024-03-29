import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { navigation } from '@constants';

import { useAppTitle } from '@context';
import UserScreen from './screen';
import { NotFound } from '@containers';

const User = ({ title }) => {
  const { setTitle } = useAppTitle();

  const { state } = useLocation();
  const user = (state && state.user) || null;

  const userTitle = state === null ? navigation.notFound.name : user && user.username ? user.username : title;

  useLayoutEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    setTitle(userTitle);
  }, []);

  return user ? <UserScreen data={user} /> : <NotFound title={navigation.notFound.name} />;
};

User.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

User.defaultProps = {
  title: null
};

export default User;
