import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppTitleContext = createContext();

export const AppTitleProvider = ({ children }) => {
  const [title, setTitle] = useState(null);

  return children ? (
    <AppTitleContext.Provider
      value={{
        title,
        setTitle
      }}
    >
      {children}
    </AppTitleContext.Provider>
  ) : null;
};

AppTitleProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export const useAppTitle = () => useContext(AppTitleContext);
