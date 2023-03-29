import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { useAppTitle } from '@context';
import ProfileScreen from './screen';

const Profile = ({ title }) => {
  const { setTitle } = useAppTitle();

  const { overview } = useSelector((state) => state.account);
  const userTitle = (overview && overview.username) || title;

  useEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    setTitle(userTitle);
  }, []);

  return <ProfileScreen />;
};

Profile.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

Profile.defaultProps = {
  title: null
};

export default Profile;
