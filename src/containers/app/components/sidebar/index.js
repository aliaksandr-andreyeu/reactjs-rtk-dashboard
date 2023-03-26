import React from 'react';
import { NavLink } from 'react-router-dom';

import { SvgIcon } from '@components';
import { getClassName } from '@helpers';

import theme from '@constants/styles/theme.module.scss';

import './styles.scss';

const Sidebar = () => {
  const linkClassName = ({ isActive }) => getClassName(isActive && 'active');

  return (
    <div className='cmp-sidebar'>
      <div className='logo'>
        <SvgIcon className='icon' name='logo' color={theme.whiteColor} />
        <h1>Company</h1>
      </div>
      <div className='inbox'>
        <ul className='menu'>
          <li>
            <NavLink to='/' className={linkClassName}>
              <SvgIcon name='users' />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/users' className={linkClassName}>
              <SvgIcon name='users' />
              <span>Users</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
