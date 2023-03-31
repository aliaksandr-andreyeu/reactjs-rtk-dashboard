import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import { unwrapResult } from '@reduxjs/toolkit';

import { Input, Button, Alert } from '@components';
import { preventDefault, validateField } from '@helpers';

import './styles.scss';

const ContactUsScreen = ({ contactUs, resetState, loading, err, msg }) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');

  useLayoutEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    resetState();
    return () => {
      resetState();
    };
  }, []);

  const checkSubject = (value) => {
    validateField('Subject', value, setSubjectError);
    setSubject(value);
  };

  const checkMessage = (value) => {
    validateField('Message', value, setMessageError);
    setMessage(value);
  };

  const handleSubmit = (event) => {
    resetState();

    Boolean(event) && preventDefault(event);

    checkSubject(subject);
    checkMessage(message);

    if (subject && message && !subjectError && !messageError) {
      const payload = {
        subject,
        message
      };
      contactUs(payload)
        .then(unwrapResult)
        .then((data) => {
          console.log('****************************************** contactUs data', data);
        })
        .catch((err) => {
          console.log('****************************************** contactUs err', err);
        });
    }
  };

  return (
    <div className='data-container contact-us'>
      <form className='data-form' onSubmit={handleSubmit}>
        <Alert
          className='alert-box'
          message={msg ? msg : err ? err : null}
          type={msg ? 'success' : err ? 'error' : 'info'}
        />
        <Input
          label={'Subject'}
          type={'text'}
          containerClassName={'input-box'}
          placeholder={'Subject'}
          name={'subject'}
          onChange={checkSubject}
          error={subjectError}
          value={subject}
        />
        <Input
          textArea={true}
          label={'Message'}
          type={'text'}
          containerClassName={'input-box'}
          placeholder={'Message'}
          name={'message'}
          onChange={checkMessage}
          error={messageError}
          value={message}
        />
        <Button
          loading={loading}
          color={'accent'}
          label={'Submit'}
          type={'submit'}
          className={'btn'}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

ContactUsScreen.propTypes = {
  contactUs: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  err: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  msg: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

ContactUsScreen.defaultProps = {
  contactUs: (payload) => payload,
  resetState: () => {},
  loading: false,
  err: null,
  msg: null
};

export default ContactUsScreen;
