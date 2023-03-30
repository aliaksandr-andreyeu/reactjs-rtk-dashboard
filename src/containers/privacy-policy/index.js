import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import { useAppTitle } from '@context';
import PrivacyPolicyScreen from './screen';

const PrivacyPolicy = ({ title }) => {
  const { setTitle } = useAppTitle();

  useLayoutEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    setTitle(title);
  }, []);

  return <PrivacyPolicyScreen />;
};

PrivacyPolicy.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

PrivacyPolicy.defaultProps = {
  title: null
};

export default PrivacyPolicy;
