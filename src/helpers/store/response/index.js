import Promise from 'promise';
import axios from 'axios';
import { actions } from '@store';
import { unwrapResult } from '@reduxjs/toolkit';

const response = (store) => {
  const service = axios.create();

  let isRefreshing = false;
  let failedRequests = [];

  axios.interceptors.response.use(
    (res) => res,
    (error) => {
      const {
        auth: { isTokenExpired }
      } = store.getState();
      if (error && error.response && error.response.status === 401 && !isTokenExpired) {
        if (error.config) {
          if (!isRefreshing) {
            const {
              auth: { refreshToken }
            } = actions;

            const handleRefreshToken = () => store.dispatch(refreshToken());

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
                console.log('refreshToken error:', err);
                if (err && err.status === 401) {
                  const {
                    auth: { setToken }
                  } = actions;

                  const handleSetToken = (payload) => store.dispatch(setToken(payload));

                  handleSetToken(null);
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve) => {
            failedRequests.push(() => {
              if (error.config.headers && error.config.headers.Authorization) {
                delete error.config.headers.Authorization;
              }

              const {
                auth: { token }
              } = store.getState();

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
