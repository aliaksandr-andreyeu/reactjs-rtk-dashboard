import React from 'react';
import PropTypes from 'prop-types';

import { Button, IconButton, SvgIcon } from '@components';
import { getClassName, stopPropagation } from '@helpers';

import './styles.scss';

const ModalItem = ({
  confirm,
  children,
  cancelText,
  isCancel,
  isOK,
  okText,
  onCancel,
  onOK,
  title,
  toggleVisible,
  visible,
  loading,
  className
}) => {
  const handleClose = () => {
    toggleVisible && toggleVisible();
  };

  const handleOK = () => {
    onOK && onOK();
  };

  const handleCancel = () => {
    onCancel && onCancel();
  };

  return (
    <div
      className={getClassName('cmp-modal', confirm && 'confirm', visible && 'open', className)}
      onClick={handleClose}
    >
      <div onClick={stopPropagation} className='cmp-modal-item'>
        <div className='header'>
          {title && <h3>{title}</h3>}
          <IconButton className='icon-button' onClick={handleClose}>
            <SvgIcon name='close' />
          </IconButton>
        </div>
        {Boolean(children) && <div className='body'>{children}</div>}
        <div className='footer'>
          {isCancel && (
            <Button className='btn' onClick={handleCancel} stroke={true} color='primary' label={cancelText} />
          )}
          {isOK && <Button loading={loading} className='btn' onClick={handleOK} color='primary' label={okText} />}
        </div>
      </div>
    </div>
  );
};

ModalItem.propTypes = {
  cancelText: PropTypes.string,
  isCancel: PropTypes.bool,
  isOK: PropTypes.bool,
  okText: PropTypes.string,
  onCancel: PropTypes.func,
  onOK: PropTypes.func,
  title: PropTypes.string,
  toggleVisible: PropTypes.func,
  visible: PropTypes.bool,
  confirm: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

ModalItem.defaultProps = {
  cancelText: 'Cancel',
  isCancel: true,
  isOK: true,
  okText: 'OK',
  onCancel: () => null,
  onOK: () => null,
  title: 'Modal',
  toggleVisible: () => null,
  visible: false,
  confirm: false,
  loading: false,
  className: ''
};

export default ModalItem;
