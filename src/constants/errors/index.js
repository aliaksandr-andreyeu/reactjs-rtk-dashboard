const errors = {
  validation: {
    fieldRequired: (field) => `${field ? field : 'This field'} is required`,
    emailRequired: 'E-mail is required',
    emailInvalid: 'Invalid e-mail address',
    passwordRequired: 'Password is required',
    passwordIncorrect: 'Incorrect password',
    confirmRequired: 'Password confirmation is required',
    confirmIncorrect: 'Incorrect password confirmation'
  },
  user: {
    remove: (userName) => `You remove user <strong>${userName}</strong>`,
    removeConfirm: (userName) => `Are you sure to remove user <strong>${userName}</strong>?`
  },
  common: {
    error: 'Something went wrong. Try again later...',
    messageNotSent: 'Your message has not been sent'
  }
};

export default errors;
