import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import { Modal, Input } from '@components';
import { validateConfirm } from '@helpers';
import { errors } from '@constants';

import './styles.scss';

const {
  validation: { passwordRequired }
} = errors;

const ChangePasswordModal = ({ loading, visible, toggleModal, onOK, onCancel }) => {
  const [userPass, setUserPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const [userPassError, setUserPassError] = useState('');
  const [newPassError, setNewPassError] = useState('');
  const [confirmError, setConfirmError] = useState('');

  const clearState = () => {
    setUserPass('');
    setNewPass('');
    setConfirm('');
    setUserPassError('');
    setNewPassError('');
    setConfirmError('');
  };

  useLayoutEffect(() => {
    visible && clearState();
  }, [visible]);

  const checkPass = (value) => {
    const error = value ? '' : passwordRequired;
    setUserPassError(error);
    setUserPass(value);
  };

  const checkNewPass = (value) => {
    const error = value ? '' : passwordRequired;
    validateConfirm(confirm, value, setConfirmError);
    setNewPassError(error);
    setNewPass(value);
  };

  const checkConfirm = (value) => {
    validateConfirm(value, newPass, setConfirmError);
    setConfirm(value);
  };

  const handleOK = () => {
    checkPass(userPass);
    checkNewPass(newPass);
    checkConfirm(confirm);

    if (userPass && newPass && confirm && !userPassError && !newPassError && !confirmError) {
      const payload = {
        password: userPass,
        newpassword: newPass,
        confirm
      };
      onOK && onOK(payload);
    }
  };

  const handleCancel = () => {
    onCancel && onCancel();
  };

  return (
    <Modal
      backdrop={false}
      visible={visible}
      title='Change password'
      toggleVisible={toggleModal}
      onOK={handleOK}
      onCancel={handleCancel}
      className='change-password-modal'
      okText='Save'
      loading={loading}
    >
      <Input
        containerClassName={'input-box'}
        label={'Current password'}
        placeholder={'Current password'}
        type={'password'}
        name={'userpass'}
        onChange={checkPass}
        value={userPass}
        error={userPassError}
      />
      <Input
        containerClassName={'input-box'}
        label={'New password'}
        placeholder={'New password'}
        type={'password'}
        name={'newpass'}
        onChange={checkNewPass}
        value={newPass}
        error={newPassError}
      />
      <Input
        containerClassName={'input-box'}
        label={'Confirm password'}
        placeholder={'Confirm password'}
        type={'password'}
        name={'passconfirm'}
        onChange={checkConfirm}
        value={confirm}
        error={confirmError}
      />
    </Modal>
  );
};

ChangePasswordModal.propTypes = {
  visible: PropTypes.bool,
  toggleModal: PropTypes.func,
  onCancel: PropTypes.func,
  onOK: PropTypes.func,
  loading: PropTypes.bool
};

ChangePasswordModal.defaultProps = {
  visible: false,
  toggleModal: () => null,
  onCancel: () => null,
  onOK: (payload) => payload,
  loading: false
};

export default ChangePasswordModal;
