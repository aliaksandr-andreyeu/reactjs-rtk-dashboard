import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Empty = ({ visible }) =>
  visible ? (
    <div className='cmp-users-empty'>
      <p>Sorry, we haven&apos;t found any users.</p>
    </div>
  ) : null;

Empty.propTypes = {
  visible: PropTypes.bool
};

Empty.defaultProps = {
  visible: false
};

export default Empty;
