import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { SvgIcon } from '@components';
import { getClassName } from '@helpers';

import './styles.scss';

const ProfileMenu = forwardRef(({ className, toggleProfile }, ref) => {
  const linkClassName = ({ isActive }) => getClassName(isActive && 'active');

  return (
    <div ref={ref} className={getClassName('cmp-profile-menu', className)}>
      <div className='inbox'>
        <ul onClick={toggleProfile}>
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
});

ProfileMenu.propTypes = {
  className: PropTypes.string,
  toggleProfile: PropTypes.func
};

ProfileMenu.defaultProps = {
  className: '',
  toggleProfile: () => null
};

ProfileMenu.displayName = 'ProfileMenu';

export default ProfileMenu;
