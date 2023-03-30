import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { SvgIcon } from '@components';
import { getClassName } from '@helpers';

import './styles.scss';

const ProfileMenu = forwardRef(({ data, className, toggleProfile }, ref) => {
  const linkClassName = ({ isActive }) => getClassName(isActive && 'active');

  return (
    <div ref={ref} className={getClassName('cmp-profile-menu', className)}>
      <div className='inbox'>
        <ul onClick={toggleProfile}>
          {data.map((item, key) => (
            <li key={`${item.name}-${key}`}>
              <NavLink to={item.path} className={linkClassName}>
                <SvgIcon name={item.icon} />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

ProfileMenu.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
  toggleProfile: PropTypes.func
};

ProfileMenu.defaultProps = {
  data: [],
  className: '',
  toggleProfile: () => null
};

ProfileMenu.displayName = 'ProfileMenu';

export default ProfileMenu;
