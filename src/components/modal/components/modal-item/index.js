import React, { useEffect } from 'react';
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
  visible
}) => {
  useEffect(() => {
    console.log('visible', visible);
  }, [visible]);

  const handleClose = () => {
    console.log('handleClose', toggleVisible);
    toggleVisible && toggleVisible();
  };

  const handleOK = () => {
    console.log('handleOK', onOK);
    onOK && onOK();
  };

  const handleCancel = () => {
    console.log('handleCancel', onCancel);
    onCancel && onCancel();
  };

  return (
    <div className={getClassName('cmp-modal', confirm && 'confirm', visible && 'open')} onClick={handleClose}>
      <div onClick={stopPropagation} className='cmp-modal-item'>
        <div className='header'>
          {title && <h3>{title}</h3>}
          <IconButton className='icon-button' onClick={handleClose}>
            <SvgIcon name='close' />
          </IconButton>
        </div>
        <div className='body'>{children}</div>
        <div className='footer'>
          {isCancel && (
            <Button className='btn' onClick={handleCancel} stroke={true} color='primary' label={cancelText} />
          )}
          {isOK && <Button className='btn' onClick={handleOK} color='primary' label={okText} />}
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
  confirm: false
};

export default ModalItem;
