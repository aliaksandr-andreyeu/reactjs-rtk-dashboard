import React, { createRef, useState, useEffect, useCallback } from 'react';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { actions } from '@store';

import { IconButton, SvgIcon } from '@components';
import { ProfileMenu } from '../../components';

import { getClassName } from '@helpers';

import './styles.scss';

const Header = ({ toggleMenu, isMenu, title }) => {
  const [profileOpen, setProfileOpen] = useState(false);

  const dispatch = useDispatch();
  const {
    auth: { logout }
  } = actions;

  const onLogout = () => {
    dispatch(logout());
  };

  const toggleProfile = useCallback(() => {
    setProfileOpen(!profileOpen);
  }, [profileOpen]);

  const btnRef = createRef();
  const menuRef = createRef();

  const menuOutsideHandler = useCallback(
    (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        btnRef.current &&
        !btnRef.current.contains(event.target) &&
        profileOpen
      ) {
        toggleProfile();
      }
    },
    [menuRef, btnRef, profileOpen, toggleProfile]
  );

  useEffect(() => {
    document.addEventListener('click', menuOutsideHandler);
    return () => {
      document.removeEventListener('click', menuOutsideHandler);
    };
  }, [menuRef, btnRef, menuOutsideHandler]);

  return (
    <div className='cmp-header'>
      <div className='title'>
        <IconButton className='icon-button' onClick={toggleMenu}>
          <SvgIcon name={isMenu ? 'menuBack' : 'menu'} />
        </IconButton>
        {title && <h1>{title}</h1>}
      </div>
      <div className='profile'>
        <IconButton ref={btnRef} className='icon-button' onClick={toggleProfile}>
          <SvgIcon name='profile' />
        </IconButton>
        <ProfileMenu
          ref={menuRef}
          isProfile={profileOpen}
          toggleProfile={toggleProfile}
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
