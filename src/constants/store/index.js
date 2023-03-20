import axios from 'axios';
import setInterceptors from './interceptors';

setInterceptors();

const getResponseData = (response) => (Boolean(response) && response.data ? response.data : null);

const requests = {
  get: (url) => axios.get(url).then((response) => getResponseData(response)),
  post: (url, body = {}) => axios.post(url, body).then((response) => getResponseData(response))
};

export default requests;
