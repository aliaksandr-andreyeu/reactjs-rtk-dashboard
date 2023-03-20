import { configureStore } from '@reduxjs/toolkit';
import { auth, account } from './slices';

const store = configureStore({
  reducer: {
    auth: auth.reducer,
    account: account.reducer
  }
});

const actions = {
  auth: auth.actions,
  account: account.actions
};

export { actions, store };
