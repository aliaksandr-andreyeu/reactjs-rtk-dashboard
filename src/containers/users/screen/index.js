import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { Empty, Item } from '../components';
import { Modal, Loader } from '@components';

import { getClassName } from '@helpers';

import './styles.scss';

const UsersScreen = ({ deleteUser, updateUser, users, loading, currentUser }) => {
  const [user, setUser] = useState(null);

  const [removeModal, setRemoveModal] = useState(false);
  const [removeConfirm, setRemoveConfirm] = useState(false);

  const setConfirm = () => {
    setRemoveConfirm(!removeConfirm);
  };

  const setModal = () => {
    setRemoveModal(!removeModal);
  };

  const modalOK = () => {
    setRemoveConfirm(true);
  };

  const modalCancel = () => {
    setRemoveModal(false);
  };

  const onRemove = (user) => {
    setUser(user);
    setRemoveModal(true);
  };

  const onUpdate = (user, data) => {
    setUser(user);
    user && user.id && data && updateUser({ id: user.id, data });
  };

  const confirmOK = () => {
    setRemoveConfirm(false);
    setRemoveModal(false);
    user && user.id && deleteUser(user.id);
  };

  const confirmCancel = () => {
    setRemoveConfirm(false);
    setRemoveModal(false);
  };

  const isData = Boolean(users && users.length > 0);

  return (
    <Fragment>
      <div className={getClassName('users-container', !isData && 'empty')}>
        <Empty visible={!isData && !loading} />
        {Boolean(isData) && (
          <table className='data-table'>
            <thead>
              <tr>
                <th className='tight'>Details</th>
                <th className='tight'>ID</th>
                <th>Username</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Job</th>
                <th className='tight'>Active</th>
                <th className='tight'>Remove</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, key) => (
                <Item currentUser={currentUser} onUpdate={onUpdate} onRemove={onRemove} user={user} key={key} />
              ))}
            </tbody>
          </table>
        )}
        <Loader visible={loading} />
      </div>
      <Modal visible={removeModal} title='Remove user' toggleVisible={setModal} onOK={modalOK} onCancel={modalCancel}>
        {user && (
          <Fragment>
            <p>
              You remove user <strong>{user.username}</strong>
            </p>
          </Fragment>
        )}
      </Modal>
      <Modal
        confirm={true}
        visible={removeConfirm}
        title='Confirm remove'
        toggleVisible={setConfirm}
        onOK={confirmOK}
        onCancel={confirmCancel}
      >
        {user && (
          <Fragment>
            <p>
              Are you sure to remove user <strong>{user.username}</strong>?
            </p>
          </Fragment>
        )}
      </Modal>
    </Fragment>
  );
};

UsersScreen.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.oneOf([null])]),
  loading: PropTypes.bool
};

UsersScreen.defaultProps = {
  currentUser: {},
  deleteUser: (id) => id,
  updateUser: (payload) => payload,
  users: null,
  loading: false
};

export default UsersScreen;
