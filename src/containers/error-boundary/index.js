import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorBoundaryScreen from './screen';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    name: null,
    message: null
  };

  static getDerivedStateFromError = (error) => {
    console.error(' ~~~ getDerivedStateFromError. Error:', error);
    return { hasError: true, name: error.name, message: error.message };
  };

  componentDidCatch = (error, errorInfo) => {
    /* TODO: send error to the Logger (error, errorInfo) */
    console.error(' ~~~ componentDidCatch. Error:', error);
    console.error(' ~~~ componentDidCatch. ErrorInfo:', errorInfo);
  };

  render = () => {
    const { hasError, name, message } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorBoundaryScreen name={name} message={message} /> : children ? children : null;
  };
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default ErrorBoundary;
