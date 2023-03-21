import { requests } from '@constants';

const users = Object.create(Object.prototype, {
  getUsers: {
    value: () => requests.get(`${REACT_ENV.API_URL}/users`)
  }
});

export default users;
