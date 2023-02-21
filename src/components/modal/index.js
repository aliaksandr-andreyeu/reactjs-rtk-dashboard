import React from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import { ModalItem } from './components';

const Modal = ({
  children,
  confirm,
  cancelText,
  isCancel,
  isOK,
  okText,
  onCancel,
  onOK,
  title,
  toggleVisible,
  visible
}) => {
  return createPortal(
    <ModalItem
      onOK={onOK}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      title={title}
      isOK={isOK}
      isCancel={isCancel}
      visible={visible}
      toggleVisible={toggleVisible}
      confirm={confirm}
    >
      {children}
    </ModalItem>,
    document.body
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  cancelText: PropTypes.string,
  isCancel: PropTypes.bool,
  isOK: PropTypes.bool,
  okText: PropTypes.string,
  onCancel: PropTypes.func,
  onOK: PropTypes.func,
  title: PropTypes.string,
  toggleVisible: PropTypes.func,
  visible: PropTypes.bool,
  confirm: PropTypes.bool
};

Modal.defaultProps = {
  cancelText: 'Cancel',
  isCancel: true,
  isOK: true,
  okText: 'OK',
  onCancel: () => null,
  onOK: () => null,
  title: 'Modal',
  toggleVisible: () => null,
  visible: false,
  confirm: false
};

export default Modal;
