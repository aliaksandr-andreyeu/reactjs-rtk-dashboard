import { isAxiosError } from 'axios';
import { errors } from '@constants';

export const capitalizeMessage = (msg) => {
  return msg && typeof msg === 'string' ? msg.charAt(0).toUpperCase() + msg.slice(1) : '';
};

export const errorsHandler = (err) => {
  const {
    common: { error }
  } = errors;

  const msg =
    isAxiosError(err) &&
    err.response &&
    err.response.data &&
    err.response.data.message &&
    err.response.data.message.length > 0
      ? err.response.data.message
      : err instanceof Error && err.message && err.message.length > 0
      ? err.message
      : typeof err === 'string' && err && err.length > 0
      ? err
      : error;

  return isAxiosError(err) && err.response && err.response.status === 401 ? null : capitalizeMessage(msg);
};

export const getClassName = (...args) => Array.from(args).filter(Boolean).join(' ');

export const stopPropagation = (event) => event.stopPropagation && event.stopPropagation();

export const preventDefault = (event) => event.preventDefault && event.preventDefault();

export const validateConfirm = (value, pass, cb) => {
  const {
    validation: { confirmRequired, confirmIncorrect }
  } = errors;
  const error = !value ? confirmRequired : value !== pass ? confirmIncorrect : '';
  cb(error);
};

/* eslint-disable no-useless-escape, no-control-regex */
export const validateEmail = (value, cb) => {
  const {
    validation: { emailRequired, emailInvalid }
  } = errors;
  const regex =
    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
  const error = !value ? emailRequired : !regex.test(value) ? emailInvalid : '';
  cb(error);
};
