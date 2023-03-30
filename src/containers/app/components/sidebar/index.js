import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { SvgIcon } from '@components';
import { getClassName } from '@helpers';

import theme from '@constants/styles/theme.module.scss';
import './styles.scss';

const Sidebar = ({ data }) => {
  const linkClassName = ({ isActive }) => getClassName(isActive && 'active');

  return (
    <div className='cmp-sidebar'>
      <div className='logo'>
        <SvgIcon className='icon' name='logo' color={theme.whiteColor} />
        <h1>{REACT_ENV.BRAND || 'Company'}</h1>
      </div>
      {data && data.length > 0 && (
        <div className='inbox'>
          <ul className='menu'>
            {data.map((item, key) => (
              <li key={`${item.name}-${key}`}>
                <NavLink to={item.path} className={linkClassName}>
                  <SvgIcon name={item.icon} />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
            ;
          </ul>
        </div>
      )}
    </div>
  );
};

Sidebar.propTypes = {
  data: PropTypes.array.isRequired
};

Sidebar.defaultProps = {
  data: []
};

export default Sidebar;
