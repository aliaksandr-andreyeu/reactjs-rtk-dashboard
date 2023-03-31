import auth from './auth';
import users from './users';
import account from './account';

const api = Object.create(Object.prototype, {
  auth: {
    value: auth
  },
  users: {
    value: users
  },
  account: {
    value: account
  }
});

export default api;
