import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Loader = ({ visible }) =>
  visible ? (
    <div className='cmp-loader'>
      <span />
    </div>
  ) : null;

Loader.propTypes = {
  visible: PropTypes.bool
};

Loader.defaultProps = {
  visible: false
};

export default Loader;
