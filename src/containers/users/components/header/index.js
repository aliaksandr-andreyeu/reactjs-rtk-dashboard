import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { actions } from '@store';

import { IconButton, SvgIcon } from '@components';
import { ProfileMenu } from '../../components';

import { getClassName } from '@helpers';

import './styles.scss';

const Header = ({ toggleMenu, isMenu }) => {
  const [profileOpen, setProfileOpen] = useState(false);

  const dispatch = useDispatch();
  const {
    auth: { logout }
  } = actions;

  const onLogout = () => {
    dispatch(logout());
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <div className='cmp-header'>
      <div className='title'>
        <IconButton
          className='icon-button'
          onClick={() => {
            toggleMenu();
          }}
        >
          <SvgIcon name={isMenu ? 'menuBack' : 'menu'} />
        </IconButton>

        <h1>Title</h1>
      </div>

      <div className={'profile'}>
        <IconButton
          className='icon-button'
          onClick={(e) => {
            console.log('profile', e);
            toggleProfile();
          }}
        >
          <SvgIcon name='profile' />

          <ProfileMenu className={getClassName(profileOpen && 'open')} />
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

Header.propTypes = {
  toggleMenu: PropTypes.func,
  isMenu: PropTypes.bool
};

Header.defaultProps = {
  toggleMenu: () => null,
  isMenu: false
};

export default Header;
