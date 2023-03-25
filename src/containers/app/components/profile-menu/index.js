import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { navigation } from '@constants';

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
            <NavLink to={navigation.profile.path} className={linkClassName}>
              <SvgIcon name='account' />
              <span>{navigation.profile.name}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={navigation.settings.path} className={linkClassName}>
              <SvgIcon name='settings' />
              <span>{navigation.settings.name}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={navigation.about.path} className={linkClassName}>
              <SvgIcon name='info' />
              <span>{navigation.about.name}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={navigation.contactUs.path} className={linkClassName}>
              <SvgIcon name='contact-us' />
              <span>{navigation.contactUs.name}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={navigation.privacyPolicy.path} className={linkClassName}>
              <SvgIcon name='privacy' />
              <span>{navigation.privacyPolicy.name}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={navigation.termsConditions.path} className={linkClassName}>
              <SvgIcon name='terms' />
              <span>{navigation.termsConditions.name}</span>
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
