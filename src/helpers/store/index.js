import request from './request';
import response from './response';

const setInterceptors = (store) => {
  if (!store) {
    return;
  }
  request(store);
  response(store);
};

export default setInterceptors;
