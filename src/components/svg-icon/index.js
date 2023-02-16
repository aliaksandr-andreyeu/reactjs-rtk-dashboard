import React from 'react';
import PropTypes from 'prop-types';

import theme from '@constants/styles/theme.module.scss';

import './styles.scss';

const SvgIcon = ({ name, color, className, ...props }) => {
  const getColor = (tint) => {
    return tint || 'currentColor';
  };

  const getClassName = (...args) => {
    return Array.from(args).filter(Boolean).join(' ');
  };

  const icons = {
    info: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 24 24'
        enableBackground='new 0 0 24 24'
        preserveAspectRatio='xMidYMid meet'
        className={getClassName('cmp-icon', className)}
        {...props}
      >
        <g>
          <path
            fill={getColor(color)}
            d='M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z'
          />
        </g>
      </svg>
    ),
    settings: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 24 24'
        enableBackground='new 0 0 24 24'
        preserveAspectRatio='xMidYMid meet'
        className={getClassName('cmp-icon', className)}
        {...props}
      >
        <g>
          <path
            fill={getColor(color)}
            d='M15.9,18.45C17.25,18.45 18.35,17.35 18.35,16C18.35,14.65 17.25,13.55 15.9,13.55C14.54,13.55 13.45,14.65 13.45,16C13.45,17.35 14.54,18.45 15.9,18.45M21.1,16.68L22.58,17.84C22.71,17.95 22.75,18.13 22.66,18.29L21.26,20.71C21.17,20.86 21,20.92 20.83,20.86L19.09,20.16C18.73,20.44 18.33,20.67 17.91,20.85L17.64,22.7C17.62,22.87 17.47,23 17.3,23H14.5C14.32,23 14.18,22.87 14.15,22.7L13.89,20.85C13.46,20.67 13.07,20.44 12.71,20.16L10.96,20.86C10.81,20.92 10.62,20.86 10.54,20.71L9.14,18.29C9.05,18.13 9.09,17.95 9.22,17.84L10.7,16.68L10.65,16L10.7,15.31L9.22,14.16C9.09,14.05 9.05,13.86 9.14,13.71L10.54,11.29C10.62,11.13 10.81,11.07 10.96,11.13L12.71,11.84C13.07,11.56 13.46,11.32 13.89,11.15L14.15,9.29C14.18,9.13 14.32,9 14.5,9H17.3C17.47,9 17.62,9.13 17.64,9.29L17.91,11.15C18.33,11.32 18.73,11.56 19.09,11.84L20.83,11.13C21,11.07 21.17,11.13 21.26,11.29L22.66,13.71C22.75,13.86 22.71,14.05 22.58,14.16L21.1,15.31L21.15,16L21.1,16.68M6.69,8.07C7.56,8.07 8.26,7.37 8.26,6.5C8.26,5.63 7.56,4.92 6.69,4.92A1.58,1.58 0 0,0 5.11,6.5C5.11,7.37 5.82,8.07 6.69,8.07M10.03,6.94L11,7.68C11.07,7.75 11.09,7.87 11.03,7.97L10.13,9.53C10.08,9.63 9.96,9.67 9.86,9.63L8.74,9.18L8,9.62L7.81,10.81C7.79,10.92 7.7,11 7.59,11H5.79C5.67,11 5.58,10.92 5.56,10.81L5.4,9.62L4.64,9.18L3.5,9.63C3.41,9.67 3.3,9.63 3.24,9.53L2.34,7.97C2.28,7.87 2.31,7.75 2.39,7.68L3.34,6.94L3.31,6.5L3.34,6.06L2.39,5.32C2.31,5.25 2.28,5.13 2.34,5.03L3.24,3.47C3.3,3.37 3.41,3.33 3.5,3.37L4.63,3.82L5.4,3.38L5.56,2.19C5.58,2.08 5.67,2 5.79,2H7.59C7.7,2 7.79,2.08 7.81,2.19L8,3.38L8.74,3.82L9.86,3.37C9.96,3.33 10.08,3.37 10.13,3.47L11.03,5.03C11.09,5.13 11.07,5.25 11,5.32L10.03,6.06L10.06,6.5L10.03,6.94Z'
          />
        </g>
      </svg>
    ),
    terms: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 24 24'
        enableBackground='new 0 0 24 24'
        preserveAspectRatio='xMidYMid meet'
        className={getClassName('cmp-icon', className)}
        {...props}
      >
        <g>
          <path
            fill={getColor(color)}
            d='M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z'
          />
        </g>
      </svg>
    ),
    privacy: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 24 24'
        enableBackground='new 0 0 24 24'
        preserveAspectRatio='xMidYMid meet'
        className={getClassName('cmp-icon', className)}
        {...props}
      >
        <g>
          <path
            fill={getColor(color)}
            d='M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z'
          />
        </g>
      </svg>
    ),
    account: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 24 24'
        enableBackground='new 0 0 24 24'
        preserveAspectRatio='xMidYMid meet'
        className={getClassName('cmp-icon', className)}
        {...props}
      >
        <g>
          <path
            fill={getColor(color)}
            d='M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z'
          />
        </g>
      </svg>
    ),
    checkbox: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 24 24'
        enableBackground='new 0 0 24 24'
        preserveAspectRatio='xMidYMid meet'
        className={getClassName('cmp-icon', className)}
        {...props}
      >
        <g>
          <path fill='none' stroke={getColor(color)} d='M4.1,12.7 9,17.6 20.3,6.3' />
        </g>
      </svg>
    ),
    logo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 32.1 36.7'
        enableBackground='new 0 0 32.1 36.7'
        preserveAspectRatio='xMidYMid meet'
        className={getClassName('cmp-icon', className)}
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
        className={getClassName('cmp-icon', className)}
        {...props}
      >
        <g>
          <path fill={getColor(color)} d='M3,6h18v2H3V6 M3,11h18v2H3V11 M3,16h18v2H3V16z' />
        </g>
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
        className={getClassName('cmp-icon', className)}
        {...props}
      >
        <g>
          <path
            fill={getColor(color)}
            d='M12,19.2c-2.5,0-4.7-1.3-6-3.2c0-2,4-3.1,6-3.1s6,1.1,6,3.1C16.7,17.9,14.5,19.2,12,19.2 M12,5c1.7,0,3,1.3,3,3s-1.3,3-3,3S9,9.7,9,8S10.3,5,12,5 M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z'
          />
        </g>
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
        className={getClassName('cmp-icon', className)}
        {...props}
      >
        <g>
          <path
            fill={getColor(color)}
            d='M5,13l4,4l-1.4,1.4L1.2,12l6.4-6.4L9,7l-4,4h16v2H5 M21,6v2H11V6H21 M21,16v2H11v-2H21z'
          />
        </g>
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
        className={getClassName('cmp-icon', className)}
        {...props}
      >
        <g>
          <path
            fill={getColor(color)}
            d='M14.1,15.6l2.6-2.6H7v-2h9.7l-2.6-2.6L15.5,7l5,5l-5,5L14.1,15.6 M19,3c1.1,0,2,0.9,2,2v4.7l-2-2V5H5v14h14v-2.7l2-2V19c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2H19z'
          />
        </g>
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
        className={getClassName('cmp-icon', className)}
        {...props}
      >
        <g>
          <path
            fill={getColor(color)}
            d='M16,17v2H2v-2c0,0,0-4,7-4S16,17,16,17 M12.5,7.5C12.5,5.6,10.9,4,9,4S5.5,5.6,5.5,7.5S7.1,11,9,11S12.5,9.4,12.5,7.5 M15.9,13c1.2,1,2,2.4,2.1,4v2h4v-2C22,17,22,13.4,15.9,13 M15,4c-0.7,0-1.4,0.2-1.9,0.6c1.2,1.7,1.2,4.1,0,5.8c0.6,0.4,1.2,0.6,1.9,0.6c1.9,0,3.5-1.6,3.5-3.5S16.9,4,15,4z'
          />
        </g>
      </svg>
    )
  };

  return name && icons[name] ? icons[name] : null;
};

SvgIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string
};

SvgIcon.defaultProps = {
  className: '',
  name: ''
};

export default SvgIcon;
