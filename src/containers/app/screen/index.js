import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from '../components';
import { getClassName } from '@helpers';
import { useAppTitle } from '@context';

import './styles.scss';

const { innerWidth: width } = window;

const sidebarOpen = Boolean(width >= 1280);

const AppScreen = ({ dimensions, sidebarData, headerData }) => {
  const [menuOpen, setMenuOpen] = useState(sidebarOpen);

  const { title } = useAppTitle();

  useEffect(() => {
    const { width } = dimensions;

    setMenuOpen(Boolean(width >= 1280));
  }, [dimensions]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='content'>
      <div className={getClassName('data-box', menuOpen && 'menu-open')}>
        <Sidebar data={sidebarData} />
        <div className='data-content'>
          <Header data={headerData} title={title} isMenu={menuOpen} toggleMenu={toggleMenu} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

AppScreen.propTypes = {
  dimensions: PropTypes.object.isRequired,
  sidebarData: PropTypes.array.isRequired,
  headerData: PropTypes.array.isRequired
};

AppScreen.defaultProps = {
  dimensions: {},
  sidebarData: [],
  headerData: []
};

export default AppScreen;
