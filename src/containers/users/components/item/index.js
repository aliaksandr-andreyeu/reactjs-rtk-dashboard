import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox, IconButton, SvgIcon } from '@components';

const Item = ({ user, onRemove, currentUser }) => {
  const handleRemove = () => {
    onRemove(user);
  };

  console.log('currentUser: ', currentUser);

  const disabled = Boolean(currentUser && currentUser.id && currentUser.id === user.id);

  return user ? (
    <tr>
      <td className='tight'>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.age}</td>
      <td>{user.job}</td>
      <td className='tight'>
        <Checkbox
          disabled={disabled}
          onClick={(event) => {
            console.log('onClick', event, event.target, event.target.value);
          }}
          checked={true}
        />
      </td>
      <td className='tight'>
        <IconButton className='icon-button' onClick={handleRemove} disabled={disabled}>
          <SvgIcon name='remove' />
        </IconButton>
      </td>
    </tr>
  ) : null;
};

Item.propTypes = {
  currentUser: PropTypes.object,
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  onRemove: PropTypes.func
};

Item.defaultProps = {
  currentUser: {},
  user: null,
  onRemove: (user) => user
};

export default Item;
