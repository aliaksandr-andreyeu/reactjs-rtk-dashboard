import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { actions } from '@store';

import { IconButton, SvgIcon } from '@components';

import './styles.scss';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const dispatch = useDispatch();
  const {
    auth: { logout }
  } = actions;

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='cmp-header'>
      <div className='title'>
        <IconButton
          className='icon-button'
          onClick={(e) => {
            console.log('sidebarOpen', e);
            setSidebarOpen(!sidebarOpen);
          }}
        >
          <SvgIcon name={sidebarOpen ? 'menuBack' : 'menu'} />
        </IconButton>

        <h1>Title</h1>
      </div>

      <div className='profile'>
        <IconButton
          className='icon-button'
          onClick={(e) => {
            console.log('profile', e);
          }}
        >
          <SvgIcon name='profile' />
        </IconButton>

        <IconButton
          className='icon-button'
          onClick={(e) => {
            console.log('logout', e);
            onLogout();
          }}
        >
          <SvgIcon name='logout' />
        </IconButton>
      </div>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
