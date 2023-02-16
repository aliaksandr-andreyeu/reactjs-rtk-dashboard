import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { actions } from '@store';

import { IconButton, SvgIcon } from '@components';
import { ProfileMenu } from '../../components';

import { getClassName } from '@helpers';

import './styles.scss';

const Header = ({ toggleMenu, isMenu, title }) => {
  const [profileOpen, setProfileOpen] = useState(true);

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
        <IconButton className='icon-button' onClick={toggleMenu}>
          <SvgIcon name={isMenu ? 'menuBack' : 'menu'} />
        </IconButton>
        {title && <h1>{title}</h1>}
      </div>
      <div className='profile'>
        <IconButton className='icon-button' onClick={toggleProfile}>
          <SvgIcon name='profile' />
        </IconButton>
        <ProfileMenu
          toggleProfile={toggleProfile}
          isProfile={profileOpen}
          className={getClassName(profileOpen && 'open')}
        />
        <IconButton className='icon-button' onClick={onLogout}>
          <SvgIcon name='logout' />
        </IconButton>
      </div>
    </div>
  );
};

Header.propTypes = {
  toggleMenu: PropTypes.func,
  isMenu: PropTypes.bool,
  title: PropTypes.string
};

Header.defaultProps = {
  toggleMenu: () => null,
  isMenu: false,
  title: ''
};

export default Header;
