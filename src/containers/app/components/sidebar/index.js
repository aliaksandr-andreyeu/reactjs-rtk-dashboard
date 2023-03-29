import React from 'react';
import { NavLink } from 'react-router-dom';

import { SvgIcon } from '@components';
import { getClassName } from '@helpers';
import { navigation } from '@constants';

import theme from '@constants/styles/theme.module.scss';

import './styles.scss';

const Sidebar = () => {
  const linkClassName = ({ isActive }) => getClassName(isActive && 'active');

  return (
    <div className='cmp-sidebar'>
      <div className='logo'>
        <SvgIcon className='icon' name='logo' color={theme.whiteColor} />
        <h1>{REACT_ENV.BRAND || 'Company'}</h1>
      </div>
      <div className='inbox'>
        <ul className='menu'>
          <li>
            <NavLink to={navigation.index.path} className={linkClassName}>
              <SvgIcon name='dashboard' />
              <span>{navigation.index.name}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={navigation.users.path} className={linkClassName}>
              <SvgIcon name='users' />
              <span>{navigation.users.name}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={navigation.settings.path} className={linkClassName}>
              <SvgIcon name='settings' />
              <span>{navigation.settings.name}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
