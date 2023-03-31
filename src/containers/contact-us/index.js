import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { actions } from '@store';
import { useSelector, useDispatch } from 'react-redux';

import { useAppTitle } from '@context';
import ContactUsScreen from './screen';

const ContactUs = ({ title }) => {
  const { setTitle } = useAppTitle();

  const {
    account: { contactUs, resetContactUsState }
  } = actions;

  const {
    contactUsData: { error, loading, message }
  } = useSelector((state) => state.account);

  const dispatch = useDispatch();

  const handleContactUs = (payload) => dispatch(contactUs(payload));
  const handleResetState = () => dispatch(resetContactUsState());

  useLayoutEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    setTitle(title);
  }, []);

  return (
    <ContactUsScreen
      contactUs={handleContactUs}
      msg={message}
      resetState={handleResetState}
      loading={loading}
      err={error}
    />
  );
};

ContactUs.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

ContactUs.defaultProps = {
  title: null
};

export default ContactUs;
