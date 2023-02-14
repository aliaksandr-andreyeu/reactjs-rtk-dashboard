import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { SvgIcon } from '@components';

import theme from '@constants/styles/theme.module.scss';

import './styles.scss';

const Sidebar = () => {
  const getClassName = ({ isActive }) => (isActive ? 'active' : null);

  return (
    <div className='cmp-sidebar'>
      <div className='logo'>
        <SvgIcon className='icon' name='logo' color={theme.whiteColor} />
        <h1>Company</h1>
      </div>
      <div className='inbox'>
        <ul className='menu'>
          <li>
            <NavLink to='/' className={getClassName}>
              <SvgIcon name='users' />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/users' className={getClassName}>
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
