import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import { useAppTitle } from '@context';
import TermsConditionsScreen from './screen';

const TermsConditions = ({ title }) => {
  const { setTitle } = useAppTitle();

  useLayoutEffect(() => {
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
