import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ResetPassword, SignIn, SignUp, Users } from '@containers';
import { Header, Sidebar } from '../components';
import { Outlet } from 'react-router-dom';

import { getClassName } from '@helpers';

import './styles.scss';

const AppScreen = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='content'>
      <div className={getClassName('data-box', menuOpen && 'menu-open')}>
        <Sidebar />
        <div className='data-content'>
          <Header title={'Template Name'} isMenu={menuOpen} toggleMenu={toggleMenu} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppScreen;
