import React from 'react';
import PropTypes from 'prop-types';

import theme from '@constants/styles/theme.module.scss';

const SvgIcon = ({ name, color, ...props }) => {
  const getColor = (clr) => {
    return clr || theme.blackColor;
  };
  const icons = {
    logo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 32.1 36.7'
        enableBackground='new 0 0 32.1 36.7'
        preserveAspectRatio='xMidYMid meet'
        {...props}
      >
        <g>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            fill={color || theme.primaryDarkColor}
            d='M27.7,0c-3.3,0.8-5.9,1.8-7,3c3.8,0,7.6,0,11.4,0v3.2c-4.3,1.7-17,2.3-19.6,3.1c-0.2-0.4-0.3-0.9-0.4-1.3V7.3c0.2-2.5,3.4-4.9,8.8-6.3C23.1,0.5,25.4,0.1,27.7,0L27.7,0z M25.3,33.8h-4c3.3-2,5.4-4.3,6-6.7C28.8,29.4,28.5,31.8,25.3,33.8z'
          />
        </g>
        <g>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            fill={color || theme.primaryColor}
            d='M32.1,6.2v27.6h-6.8c1.9-2.1,2.6-4.4,2-6.7c0.7-2.9-0.5-5.9-4.1-8.7c-2.9-2.2-5.8-4.5-8.6-6.7c-0.5-0.4-0.9-0.7-1.2-1.1C13,10,12.7,9.6,12.5,9.2c1-2,4-3.8,8.4-5c2.2-0.6,4.5-0.9,6.8-1c-3.3,0.8-5.9,1.8-7,3C24.5,6.2,28.3,6.2,32.1,6.2z'
          />
        </g>
        <g>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            fill={color || theme.accentDarkColor}
            d='M0,6.2V3h10.8c-1.7,1-3,2.1-4,3.2L2.1,7.7L0,6.2L0,6.2z M4.8,12.9c0.5,1.9,1.8,3.8,4.1,5.5c2.9,2.2,5.8,4.5,8.6,6.7c0.5,0.4,0.9,0.7,1.2,1.1c1.3,1.5,1.5,3,0.8,4.4C11.1,27.6-3,24.7,4.8,12.9z'
          />
        </g>
        <g>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            fill={color || theme.accentColor}
            d='M4.4,36.7c3.3-0.8,5.9-1.8,7-3c-3.8,0-7.6,0-11.4,0V6.2h6.8c-1.9,2.1-2.6,4.4-2,6.7c-0.8,2.9,0.5,5.9,4.1,8.7c2.9,2.2,5.8,4.5,8.6,6.7c0.5,0.4,0.9,0.7,1.2,1.1c0.4,0.4,0.6,0.8,0.8,1.2c-1,2-4,3.8-8.4,5C9,36.3,6.7,36.6,4.4,36.7z'
          />
        </g>
      </svg>
    ),
    menu: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 24 24'
        enableBackground='new 0 0 24 24'
        preserveAspectRatio='xMidYMid meet'
      >
        <path fill={getColor(color)} d='M3,6h18v2H3V6 M3,11h18v2H3V11 M3,16h18v2H3V16z' />
      </svg>
    ),

    profile: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 24 24'
        enableBackground='new 0 0 24 24'
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          fill={getColor(color)}
          d='M12,19.2c-2.5,0-4.7-1.3-6-3.2c0-2,4-3.1,6-3.1s6,1.1,6,3.1C16.7,17.9,14.5,19.2,12,19.2 M12,5c1.7,0,3,1.3,3,3s-1.3,3-3,3S9,9.7,9,8S10.3,5,12,5 M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z'
        />
      </svg>
    ),

    menuBack: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 24 24'
        enableBackground='new 0 0 24 24'
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          fill={getColor(color)}
          d='M5,13l4,4l-1.4,1.4L1.2,12l6.4-6.4L9,7l-4,4h16v2H5 M21,6v2H11V6H21 M21,16v2H11v-2H21z'
        />
      </svg>
    ),

    logout: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 24 24'
        enableBackground='new 0 0 24 24'
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          fill={getColor(color)}
          d='M14.1,15.6l2.6-2.6H7v-2h9.7l-2.6-2.6L15.5,7l5,5l-5,5L14.1,15.6 M19,3c1.1,0,2,0.9,2,2v4.7l-2-2V5H5v14h14v-2.7l2-2V19c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2H19z'
        />
      </svg>
    ),

    users: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 24 24'
        enableBackground='new 0 0 24 24'
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          fill={getColor(color)}
          d='M16,17v2H2v-2c0,0,0-4,7-4S16,17,16,17 M12.5,7.5C12.5,5.6,10.9,4,9,4S5.5,5.6,5.5,7.5S7.1,11,9,11S12.5,9.4,12.5,7.5 M15.9,13c1.2,1,2,2.4,2.1,4v2h4v-2C22,17,22,13.4,15.9,13 M15,4c-0.7,0-1.4,0.2-1.9,0.6c1.2,1.7,1.2,4.1,0,5.8c0.6,0.4,1.2,0.6,1.9,0.6c1.9,0,3.5-1.6,3.5-3.5S16.9,4,15,4z'
        />
      </svg>
    )
  };

  return name && icons[name] ? icons[name] : null;
};

SvgIcon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
};

SvgIcon.defaultProps = {
  name: ''
};

export default SvgIcon;
