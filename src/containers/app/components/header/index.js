import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { actions } from '@store';

import { ProfileMenu } from '../../components';
import { IconButton, SvgIcon } from '@components';

import { getClassName } from '@helpers';

import './styles.scss';

const Header = ({ isMenu, title, toggleMenu }) => {
  const [profileOpen, setProfileOpen] = useState(false);

  const dispatch = useDispatch();
  const {
    auth: { signOut }
  } = actions;

  const onSignOut = () => {
    dispatch(signOut());
  };

  const toggleProfile = useCallback(() => {
    setProfileOpen(!profileOpen);
  }, [profileOpen]);

  const btnRef = useRef(null);
  const menuRef = useRef(null);

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
          <SvgIcon name={isMenu ? 'menu-back' : 'menu'} />
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
        <IconButton className='icon-button' onClick={onSignOut}>
          <SvgIcon name='logout' />
        </IconButton>
      </div>
    </div>
  );
};

Header.propTypes = {
  isMenu: PropTypes.bool,
  title: PropTypes.string,
  toggleMenu: PropTypes.func
};

Header.defaultProps = {
  isMenu: false,
  title: '',
  toggleMenu: () => null
};

export default Header;
