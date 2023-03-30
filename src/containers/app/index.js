import React, { useState, useLayoutEffect } from 'react';

import AppScreen from './screen';
import { AppTitleProvider } from '@context';
import { navigation } from '@constants';

import './styles.scss';

const sidebarData = [
  {
    path: navigation.index.path,
    name: navigation.index.name,
    icon: 'dashboard'
  },
  {
    path: navigation.users.path,
    name: navigation.users.name,
    icon: 'users'
  },
  {
    path: navigation.settings.path,
    name: navigation.settings.name,
    icon: 'settings'
  }
];

const headerData = [
  {
    path: navigation.profile.path,
    name: navigation.profile.name,
    icon: 'account'
  },
  {
    path: navigation.settings.path,
    name: navigation.settings.name,
    icon: 'settings'
  },
  {
    path: navigation.about.path,
    name: navigation.about.name,
    icon: 'info'
  },
  {
    path: navigation.contactUs.path,
    name: navigation.contactUs.name,
    icon: 'contact-us'
  },
  {
    path: navigation.privacyPolicy.path,
    name: navigation.privacyPolicy.name,
    icon: 'privacy'
  },
  {
    path: navigation.termsConditions.path,
    name: navigation.termsConditions.name,
    icon: 'terms'
  }
];

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

const App = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AppTitleProvider>
      <AppScreen dimensions={windowDimensions} sidebarData={sidebarData} headerData={headerData} />
    </AppTitleProvider>
  );
};

export default App;
