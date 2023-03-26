import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { navigation } from '@constants';

import { Checkbox, IconButton, SvgIcon } from '@components';

const Item = ({ user, onUpdate, onRemove, currentUser }) => {
  const navigate = useNavigate();

  const goToUserDetails = () => navigate(`${navigation.users.path}/${user.id}`, { state: { user } });

  const disabled = Boolean(currentUser && currentUser.id && currentUser.id === user.id);

  const handleRemove = () => {
    onRemove(user);
  };

  const handleUpdate = (checked) => {
    onUpdate(user, {
      isActive: checked
    });
  };

  return user ? (
    <tr>
      <td className='tight'>
        <IconButton className='details-button' onClick={goToUserDetails}>
          <SvgIcon name='user-details' />
        </IconButton>
      </td>
      <td className='tight'>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.age}</td>
      <td>{user.job}</td>
      <td className='tight'>
        <Checkbox disabled={disabled} onClick={handleUpdate} checked={user.isActive} />
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
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

Item.defaultProps = {
  currentUser: {},
  user: null,
  onRemove: (user) => user,
  onUpdate: (user) => user
};

export default Item;
