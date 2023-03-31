import { requests } from '@constants';

const account = Object.create(Object.prototype, {
  contactUs: {
    value: (payload) => requests.post(`${REACT_ENV.API_URL}/contact`, payload)
  }
});

export default account;
