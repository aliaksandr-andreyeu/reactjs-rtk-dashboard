import axios from 'axios';

const request = (store) => {
  axios.interceptors.request.use((config) => {
    if (config && config.headers && config.headers.Authorization) {
      delete config.headers.Authorization;
    }

    const {
      auth: { token }
    } = store.getState();

    const data = {
      ...(config && config),
      headers: {
        'Content-Type': 'application/json',
        ...(token && {
          Authorization: `Bearer ${token}`
        })
      }
    };
    return data;
  });
};

export default request;
