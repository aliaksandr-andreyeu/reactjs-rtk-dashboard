import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal, Input } from '@components';
import { validateConfirm, preventDefault } from '@helpers';
import { errors } from '@constants';

import './styles.scss';

const {
  validation: { passwordRequired }
} = errors;

const ChangePasswordModal = ({ visible, toggleModal, onOK, onCancel }) => {
  const [userPass, setUserPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const [userPassError, setUserPassError] = useState('');
  const [newPassError, setNewPassError] = useState('');
  const [confirmError, setConfirmError] = useState('');

  const checkPass = (value) => {
    const error = value ? '' : passwordRequired;
    setUserPassError(error);
    setUserPass(value);
  };

  const checkNewPass = (value) => {
    const error = value ? '' : passwordRequired;
    setNewPassError(error);
    setNewPass(value);
  };

  const checkConfirm = (value) => {
    validateConfirm(value, newPass, setConfirmError);
    setConfirm(value);
  };

  const clearState = () => {
    setUserPass('');
    setNewPass('');
    setConfirm('');
    setUserPassError('');
    setNewPassError('');
    setConfirmError('');
  };

  const handleOK = () => {
    onOK && onOK();
  };

  const handleCancel = () => {
    onCancel && onCancel();
  };

  return (
    <Modal
      visible={visible}
      title='Change password'
      toggleVisible={toggleModal}
      onOK={onOK}
      onCancel={onCancel}
      className='change-password-modal'
      okText='Save'
      loading={true}
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
  onOK: PropTypes.func
};

ChangePasswordModal.defaultProps = {
  visible: false,
  toggleModal: () => null,
  onCancel: () => null,
  onOK: () => null
};

export default ChangePasswordModal;
