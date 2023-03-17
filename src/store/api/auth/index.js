import { requests } from '@constants';

const auth = Object.create(Object.prototype, {
  signIn: {
    value: (payload) => requests.post(`${REACT_ENV.API_URL}/signin`, payload)
  },
  signUp: {
    value: (payload) => requests.post(`${REACT_ENV.API_URL}/signup`, payload)
  }
});

export default auth;
