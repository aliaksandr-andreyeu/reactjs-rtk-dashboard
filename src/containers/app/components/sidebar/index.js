import './styles.scss';
import React from 'react';
import { SvgIcon } from '@components';
import theme from '@constants/styles/theme.module.scss';
import { getClassName } from '@helpers';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

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

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
