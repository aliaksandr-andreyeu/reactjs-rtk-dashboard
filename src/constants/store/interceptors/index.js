import request from './request';
import response from './response';

const setInterceptors = () => {
  request();
  response();
};

export default setInterceptors;
