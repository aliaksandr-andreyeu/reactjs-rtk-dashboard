import { requests } from '@constants';

const account = Object.create(Object.prototype, {
  contactUs: {
    value: (payload) => requests.post(`${REACT_ENV.API_URL}/contact`, payload)
  },
  getAccount: {
    value: () => requests.get(`${REACT_ENV.API_URL}/account`)
  },
  editAccount: {
    value: (payload) => requests.put(`${REACT_ENV.API_URL}/account`, payload)
  },
  changePassword: {
    value: (payload) => requests.post(`${REACT_ENV.API_URL}/change-password`, payload)
  }
});

export default account;
