import axios from 'axios';

const getResponseData = (response) => (Boolean(response) && response.data ? response.data : null);

export const requests = {
  get: (url) => axios.get(url).then((response) => getResponseData(response)),
  post: (url, body = {}) => axios.post(url, body).then((response) => getResponseData(response))
};
