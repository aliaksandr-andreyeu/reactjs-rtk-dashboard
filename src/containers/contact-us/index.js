import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useAppTitle } from '@context';
import ContactUsScreen from './screen';

const ContactUs = ({ title }) => {
  const { setTitle } = useAppTitle();

  useEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    setTitle(title);
  }, []);

  return <ContactUsScreen />;
};

ContactUs.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

ContactUs.defaultProps = {
  title: null
};

export default ContactUs;
