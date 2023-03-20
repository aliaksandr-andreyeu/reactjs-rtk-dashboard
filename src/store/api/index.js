import auth from './auth';
import users from './users';

const api = Object.create(Object.prototype, {
  auth: {
    value: auth
  },
  users: {
    value: users
  }
});

export default api;
