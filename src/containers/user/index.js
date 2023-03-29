import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';
import { navigation } from '@constants';

import { useAppTitle } from '@context';
import UserScreen from './screen';
import { NotFound } from '@containers';

const User = ({ title }) => {
  const { setTitle } = useAppTitle();
  const { id } = useParams();

  const { state } = useLocation();
  const user = (state && state.user) || null;

  const userTitle = state === null ? navigation.notFound.name : user && user.username ? user.username : title;

  useEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    setTitle(userTitle);
  }, []);

  return user ? <UserScreen /> : <NotFound title={navigation.notFound.name} />;
};

User.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

User.defaultProps = {
  title: null
};

export default User;
