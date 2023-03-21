import Promise from 'promise';
import axios from 'axios';
import { store, actions } from '@store';
import { unwrapResult } from '@reduxjs/toolkit';

const response = () => {
  const {
    auth: { token, isTokenExpired }
  } = store.getState();

  const {
    auth: { refreshToken, setToken }
  } = actions;

  console.log('+++++++++++++++++++++++++ RESPONSE token: ', token);
  console.log('+++++++++++++++++++++++++ RESPONSE isTokenExpired: ', isTokenExpired);

  const handleRefreshToken = () => store.dispatch(refreshToken());
  const handleSetToken = (payload) => store.dispatch(setToken(payload));

  const service = axios.create();

  let isRefreshing = false;
  let failedRequests = [];

  axios.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error && error.response && error.response.status === 401 && !isTokenExpired) {
        if (error.config) {
          if (!isRefreshing) {
            isRefreshing = true;
            handleRefreshToken()
              .then(unwrapResult)
              .then(() => {
                failedRequests.map((cb) => cb());
                failedRequests = [];
                return service(error.config).catch((err) => {
                  console.log(err, error.config.url);
                });
              })
              .catch((err) => {
                console.log('renewToken error:', err);
                if (axios.isAxiosError(err) && err.response && err.response.status === 401) {
                  handleSetToken(null);
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }
          return new Promise((resolve) => {
            failedRequests.push(() => {
              error.config.headers && error.config.headers.Authorization && delete error.config.headers.Authorization;
              const config = {
                ...error.config,
                headers: {
                  'Content-Type': 'application/json',
                  ...(token && {
                    Authorization: `Bearer ${token}`
                  })
                }
              };
              resolve(
                service(config).catch((err) => {
                  console.log(err, error.config.url);
                })
              );
            });
          });
        }
      }
      return Promise.reject(error);
    }
  );
};

export default response;
