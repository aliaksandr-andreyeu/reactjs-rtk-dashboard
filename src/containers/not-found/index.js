import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import { useAppTitle } from '@context';
import NotFoundScreen from './screen';

const NotFound = ({ title }) => {
  const { setTitle } = useAppTitle();

  useLayoutEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    setTitle(title);
  }, []);

  return <NotFoundScreen />;
};

NotFound.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

NotFound.defaultProps = {
  title: null
};

export default NotFound;
