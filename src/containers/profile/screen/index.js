import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

import { unwrapResult } from '@reduxjs/toolkit';

import { Input, Button, Alert } from '@components';
import { ChangePasswordModal } from '../components';
import { preventDefault, validateEmail } from '@helpers';

import './styles.scss';

const ProfileScreen = ({
  resetState,
  overview,
  changePass,
  changePassLoading,
  changePassMessage,
  editAcc,
  editAccLoading,
  editAccMessage
}) => {
  const { age: oAge, job: oJob, name: oName, surname: oSurname, username: oUserName } = overview;

  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(false);
  const [userName, setUserName] = useState(oUserName);
  const [name, setName] = useState(oName || '');
  const [surname, setSurname] = useState(oSurname || '');
  const [age, setAge] = useState(oAge || 0);
  const [job, setJob] = useState(oJob || '');
  const [userNameError, setUserNameError] = useState('');

  const setModal = () => {
    setVisible(!visible);
  };

  const modalOK = (payload) => {
    if (payload) {
      changePass(payload)
        .then(unwrapResult)
        .then((data) => {
          console.log('****************************************** changePassword data', data);
        })
        .catch((err) => {
          console.log('****************************************** changePassword err', err);
        })
        .finally(() => {
          setVisible(false);
        });
    }
  };

  const modalCancel = () => {
    setVisible(false);
  };

  const checkEmail = (value) => {
    validateEmail('Username', value, setUserNameError);
    setUserName(value);
  };

  const handleChangePassword = () => {
    resetState();

    setVisible(true);
  };

  const handleSubmit = (event) => {
    Boolean(event) && preventDefault(event);

    if (!edit) {
      setEdit(true);
      return;
    }

    resetState();

    checkEmail(userName);

    if (userName && !userNameError) {
      const payload = {
        username: userName,
        name,
        surname,
        age,
        job
      };
      editAcc(payload)
        .then(unwrapResult)
        .then((data) => {
          console.log('****************************************** editAccount data', data);
        })
        .catch((err) => {
          console.log('****************************************** editAccount err', err);
        })
        .finally(() => {
          setEdit(false);
        });
    }
  };

  return (
    <Fragment>
      <div className='data-container profile'>
        <form className='data-form' onSubmit={handleSubmit}>
          <Alert className='alert-box' message={editAccMessage} type='success' />
          <Alert className='alert-box' message={changePassMessage} type='success' />
          <div className='row'>
            <div className='col'>
              <div className='cell'>
                <Input
                  label={'Username'}
                  type={'text'}
                  containerClassName={'input-box'}
                  placeholder={'Username'}
                  name={'username'}
                  onChange={checkEmail}
                  error={userNameError}
                  value={userName}
                  disabled={!edit}
                />
              </div>
              <div className='cell'>
                <Input
                  label={'Name'}
                  type={'text'}
                  containerClassName={'input-box'}
                  placeholder={'Name'}
                  name={'name'}
                  onChange={setName}
                  value={name}
                  disabled={!edit}
                />
              </div>
              <div className='cell'>
                <Input
                  label={'Surname'}
                  type={'text'}
                  containerClassName={'input-box'}
                  placeholder={'Surname'}
                  name={'surname'}
                  onChange={setSurname}
                  value={surname}
                  disabled={!edit}
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='cell'>
                <Input
                  label={'Age'}
                  type={'number'}
                  containerClassName={'input-box'}
                  placeholder={'Age'}
                  name={'age'}
                  onChange={setAge}
                  value={age || ''}
                  disabled={!edit}
                />
              </div>
              <div className='cell'>
                <Input
                  label={'Job'}
                  type={'text'}
                  containerClassName={'input-box'}
                  placeholder={'Job'}
                  name={'job'}
                  onChange={setJob}
                  value={job}
                  disabled={!edit}
                />
              </div>
              <div className='cell justify-center'>
                <a className='a-link' onClick={handleChangePassword}>
                  Change Password
                </a>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col items-center'>
              <Button
                loading={editAccLoading}
                color={edit ? 'accent' : 'primary'}
                label={edit ? 'Save' : 'Edit'}
                type={'submit'}
                className={'btn'}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
      </div>
      <ChangePasswordModal
        loading={changePassLoading}
        visible={visible}
        toggleModal={setModal}
        onOK={modalOK}
        onCancel={modalCancel}
      />
    </Fragment>
  );
};

ProfileScreen.propTypes = {
  resetState: PropTypes.func.isRequired,
  overview: PropTypes.object,
  changePass: PropTypes.func.isRequired,
  changePassLoading: PropTypes.bool,
  changePassMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  editAcc: PropTypes.func.isRequired,
  editAccLoading: PropTypes.bool,
  editAccMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

ProfileScreen.defaultProps = {
  resetState: () => null,
  overview: {},
  changePass: (payload) => payload,
  changePassLoading: false,
  changePassMessage: null,
  editAcc: (payload) => payload,
  editAccLoading: false,
  editAccMessage: null
};

export default ProfileScreen;
