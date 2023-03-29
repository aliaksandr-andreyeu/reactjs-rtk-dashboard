import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useAppTitle } from '@context';
import TermsConditionsScreen from './screen';

const TermsConditions = ({ title }) => {
  const { setTitle } = useAppTitle();

  useEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    setTitle(title);
  }, []);

  return <TermsConditionsScreen />;
};

TermsConditions.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

TermsConditions.defaultProps = {
  title: null
};

export default TermsConditions;
