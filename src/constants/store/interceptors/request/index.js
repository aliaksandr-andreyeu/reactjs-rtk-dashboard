import axios from 'axios';
import { store } from '@store';

const request = () => {
  const {
    auth: { token }
  } = store.getState();

  console.log('+++++++++++++++++++++++++ REQUEST store: ', store);
  console.log('+++++++++++++++++++++++++ REQUEST token: ', token);

  axios.interceptors.request.use((config) => {
    config && config.headers && config.headers.Authorization && delete config.headers.Authorization;
    return {
      ...(config && config),
      headers: {
        'Content-Type': 'application/json',
        ...(token && {
          Authorization: `Bearer ${token}`
        })
      }
    };
  });
};

export default request;
