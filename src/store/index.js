import { configureStore } from '@reduxjs/toolkit';
import { auth, account, users } from './slices';
import { authorization } from './middlewares';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    auth: auth.reducer,
    account: account.reducer,
    users: users.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authorization, REACT_ENV.MODE === 'dev' ? logger : null)
      .filter(Boolean)
});

const actions = {
  auth: auth.actions,
  account: account.actions,
  users: users.actions
};

export { actions, store };
