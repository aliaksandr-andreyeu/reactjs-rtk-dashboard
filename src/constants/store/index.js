import axios from 'axios';

axios.defaults.withCredentials = true;

const getResponseData = (response) => (Boolean(response) && response.data ? response.data : null);

const requests = {
  get: (url) => axios.get(url).then((response) => getResponseData(response)),
  post: (url, body = {}) => axios.post(url, body).then((response) => getResponseData(response)),
  put: (url, body = {}) => axios.put(url, body).then((response) => getResponseData(response)),
  patch: (url, body = {}) => axios.patch(url, body).then((response) => getResponseData(response)),
  delete: (url) => axios.delete(url).then((response) => getResponseData(response))
};

export default requests;
