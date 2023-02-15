import React from 'react';
import PropTypes from 'prop-types';
import { getClassName } from '@helpers';

import './styles.scss';

const ProfileMenu = ({ className }) => {
  return (
    <div className={getClassName('cmp-profile-menu', className)}>
      <div className='inbox'>
        <ul>
          <li>Name</li>
          <li>Surname</li>
          <li>Job</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

ProfileMenu.propTypes = {
  className: PropTypes.string
};

ProfileMenu.defaultProps = {
  className: ''
};

export default ProfileMenu;
