import React from 'react';
import AppScreen from './screen';
import { AppTitleProvider } from '@context';

import './styles.scss';

const App = () => (
  <AppTitleProvider>
    <AppScreen />
  </AppTitleProvider>
);

export default App;
