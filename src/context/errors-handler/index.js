import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ErrorsWrapper } from './components';
import { v4 as uuidv4 } from 'uuid';

const ErrorsHandlerContext = createContext({
  rejectHandler: (error) => {}
});

export const ErrorsHandlerProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);

  const removeError = (id) => {
    const data = errors.filter((item) => item.id !== id);
    setErrors(data);
  };

  const rejectHandler = (error) => {
    console.log('rejectHandler: ', error, errors);

    const errorData = {
      id: uuidv4(),
      error: error
    };

    error && setErrors([...errors, errorData]);
  };

  useEffect(() => {
    console.log('********************************** errors data: ', errors);
  }, [errors]);

  return children ? (
    <ErrorsHandlerContext.Provider
      value={{
        rejectHandler
      }}
    >
      {children}
      <ErrorsWrapper removeError={removeError} errors={errors} />
    </ErrorsHandlerContext.Provider>
  ) : null;
};

ErrorsHandlerProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export const useErrorsHandler = () => useContext(ErrorsHandlerContext);
