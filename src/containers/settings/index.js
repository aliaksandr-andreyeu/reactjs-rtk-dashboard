import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useAppTitle } from '@context';
import SettingsScreen from './screen';

const Settings = ({ title }) => {
  const { setTitle } = useAppTitle();

  useEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    setTitle(title);
  }, []);

  return <SettingsScreen />;
};

Settings.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

Settings.defaultProps = {
  title: null
};

export default Settings;
