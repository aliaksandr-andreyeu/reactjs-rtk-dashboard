import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { App } from '@containers';
import { navigation } from '@constants';

const Router = () => {
  return (
    <Routes>
      <Route path={navigation.index} element={<App />} />
    </Routes>
  );
};

export default Router;
