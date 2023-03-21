import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { Header, Sidebar, Empty, Item } from '../components';
import { Modal, Loader } from '@components';

import { getClassName } from '@helpers';

import './styles.scss';

const UsersScreen = ({ users, loading, error, currentUser }) => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [removeModal, setRemoveModal] = useState(false);
  const [removeConfirm, setRemoveConfirm] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const setConfirm = () => {
    console.log('setConfirm', removeConfirm);
    setRemoveConfirm(!removeConfirm);
  };

  const onRemove = (user) => {
    console.log('onRemove user', user);

    setUser(user);
    setRemoveModal(!removeModal);
  };

  console.log('*********************** users:', users);

  const isData = Boolean(users && users.length > 0);

  return (
    <Fragment>
      <div className={getClassName('users-box', menuOpen && 'menu-open')}>
        <Sidebar />
        <div className='users-content'>
          <Header title={'Template Name'} isMenu={menuOpen} toggleMenu={toggleMenu} />
          <div className={getClassName('users-container', (loading || !isData) && 'empty')}>
            <Loader visible={loading} />
            <Empty visible={!isData && !loading} />
            {Boolean(isData && !loading) && (
              <table className='data-table'>
                <thead>
                  <tr>
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
                    <Item currentUser={currentUser} onRemove={onRemove} user={user} key={key} />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <Modal
        visible={removeModal}
        title='Remove user'
        toggleVisible={() => setRemoveModal(!removeModal)}
        onOK={() => {
          setRemoveConfirm(true);
        }}
        onCancel={() => {
          setRemoveModal(false);
        }}
      >
        {user && (
          <Fragment>
            <p>You remove {user.username}</p>
            {(user.name || user.surname) && <p>{[user.name, user.surname].join(' ')}</p>}
          </Fragment>
        )}
      </Modal>
      <Modal
        confirm={true}
        title='Confirm remove'
        visible={removeConfirm}
        toggleVisible={setConfirm}
        onOK={() => {
          setRemoveConfirm(false);
          setRemoveModal(false);
        }}
        onCancel={() => {
          setRemoveConfirm(false);
        }}
      />
    </Fragment>
  );
};

UsersScreen.propTypes = {
  currentUser: PropTypes.object,
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.oneOf([null])]),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

UsersScreen.defaultProps = {
  currentUser: {},
  users: null,
  loading: false,
  error: null
};

export default UsersScreen;
