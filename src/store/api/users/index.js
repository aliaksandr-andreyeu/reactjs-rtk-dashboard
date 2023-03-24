import { requests } from '@constants';

const users = Object.create(Object.prototype, {
  getUsers: {
    value: () => requests.get(`${REACT_ENV.API_URL}/users`)
  },
  getUser: {
    value: (id) => requests.get(`${REACT_ENV.API_URL}/users?id=${id}`)
  },
  createUser: {
    value: (payload) => requests.post(`${REACT_ENV.API_URL}/users`, payload)
  },
  modifyUser: {
    value: (payload) => requests.put(`${REACT_ENV.API_URL}/users`, payload)
  },
  updateUser: {
    value: (payload) => requests.patch(`${REACT_ENV.API_URL}/users`, payload)
  },
  deleteUser: {
    value: (id) => requests.delete(`${REACT_ENV.API_URL}/users?id=${id}`)
  }
});

export default users;
