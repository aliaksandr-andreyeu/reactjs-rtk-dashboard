import React, { useCallback, useEffect, useRef, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { actions } from '@store';
import { ProfileMenu } from '../../components';
import { IconButton, SvgIcon } from '@components';
import { getClassName } from '@helpers';

import './styles.scss';

const Header = ({ data, isMenu, title, toggleMenu }) => {
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const canBack = Boolean(location.key !== 'default' && /(\/users\/)(.*)/.test(location.pathname));

  const goBack = () => {
    navigate(-1);
  };

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
        {canBack && (
          <IconButton className='icon-button' onClick={goBack}>
            <SvgIcon name='chevron-left' />
          </IconButton>
        )}
        {title && <h1>{title}</h1>}
      </div>
      <div className='profile'>
        {data && data.length > 0 && (
          <Fragment>
            <IconButton ref={btnRef} className='icon-button' onClick={toggleProfile}>
              <SvgIcon name='profile' />
            </IconButton>
            <ProfileMenu
              ref={menuRef}
              isProfile={profileOpen}
              toggleProfile={toggleProfile}
              className={getClassName(profileOpen && 'open')}
              data={data}
            />
          </Fragment>
        )}
        <IconButton className='icon-button' onClick={onSignOut}>
          <SvgIcon name='logout' />
        </IconButton>
      </div>
    </div>
  );
};

Header.propTypes = {
  data: PropTypes.array.isRequired,
  isMenu: PropTypes.bool,
  title: PropTypes.string,
  toggleMenu: PropTypes.func
};

Header.defaultProps = {
  data: [],
  isMenu: false,
  title: '',
  toggleMenu: () => null
};

export default Header;
