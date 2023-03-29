import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from '../components';
import { getClassName } from '@helpers';
import { useAppTitle } from '@context';

import './styles.scss';

const sidebarOpen = Boolean(window.innerWidth >= 1280);

const AppScreen = () => {
  const [menuOpen, setMenuOpen] = useState(sidebarOpen);

  const { title } = useAppTitle();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='content'>
      <div className={getClassName('data-box', menuOpen && 'menu-open')}>
        <Sidebar />
        <div className='data-content'>
          <Header title={title} isMenu={menuOpen} toggleMenu={toggleMenu} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppScreen;
