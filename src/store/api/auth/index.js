import { requests } from '@constants';

const auth = Object.create(Object.prototype, {
  signIn: {
    value: (payload) => requests.post(`${REACT_ENV.API_URL}/signin`, payload)
  },
  signUp: {
    value: (payload) => requests.post(`${REACT_ENV.API_URL}/signup`, payload)
  },
  resetPassword: {
    value: (payload) => requests.post(`${REACT_ENV.API_URL}/reset-password`, payload)
  },
  refreshToken: {
    value: () => requests.get(`${REACT_ENV.API_URL}/refresh-token`)
  },
  signOut: {
    value: () => requests.get(`${REACT_ENV.API_URL}/signout`)
  }
});

export default auth;
