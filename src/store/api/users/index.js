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
    value: (id, payload) => requests.put(`${REACT_ENV.API_URL}/users?id=${id}`, payload)
  },
  updateUser: {
    value: (id, payload) => requests.patch(`${REACT_ENV.API_URL}/users?id=${id}`, payload)
  },
  deleteUser: {
    value: (id) => requests.delete(`${REACT_ENV.API_URL}/users?id=${id}`)
  }
});

export default users;
