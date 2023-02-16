import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { SvgIcon } from '@components';
import { getClassName } from '@helpers';

import './styles.scss';

const useOutsideAlerter = (ref, toggleProfile, isProfile) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log('You clicked outside of me!', isProfile, toggleProfile);
        // isProfile && toggleProfile();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, isProfile]);
};

const ProfileMenu = ({ toggleProfile, isProfile, className }) => {
  const ref = useRef(null);

  // console.log(isProfile, toggleProfile);

  useOutsideAlerter(ref, toggleProfile, isProfile);

  const linkClassName = ({ isActive }) => getClassName(isActive && 'active');

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      ref={ref}
      className={getClassName('cmp-profile-menu', className)}
    >
      <div className='inbox'>
        <ul>
          <li>
            <NavLink to='/profile' className={linkClassName}>
              <SvgIcon name='account' />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/settings' className={linkClassName}>
              <SvgIcon name='settings' />
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={linkClassName}>
              <SvgIcon name='info' />
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/privacy-policy' className={linkClassName}>
              <SvgIcon name='privacy' />
              <span>Privacy Policy</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/terms-and-conditions' className={linkClassName}>
              <SvgIcon name='terms' />
              <span>Terms and Conditions</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

ProfileMenu.propTypes = {
  className: PropTypes.string,
  isProfile: PropTypes.bool,
  toggleProfile: PropTypes.func
};

ProfileMenu.defaultProps = {
  className: '',
  isProfile: false,
  toggleProfile: () => null
};

export default ProfileMenu;
