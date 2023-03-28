import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ErrorItem } from '../../components';

const ErrorsWrapper = ({ errors, removeError }) =>
  errors && errors.length > 0
    ? errors.map((error) => createPortal(<ErrorItem removeError={removeError} data={error} />, document.body))
    : null;

ErrorsWrapper.propTypes = {
  errors: PropTypes.array.isRequired,
  removeError: PropTypes.func.isRequired
};

ErrorsWrapper.defaultProps = {
  errors: [],
  removeError: (id) => id
};

export default ErrorsWrapper;
