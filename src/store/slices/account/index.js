import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  overview: {}
};

const account = createSlice({
  initialState,
  name: 'account',
  reducers: {
    setOverview(state, { payload }) {
      console.log('setOverview state:', state);
      console.log('setOverview payload:', payload);
      state.overview = payload || {};
    }
  }
});

export default {
  actions: { ...account.actions },
  reducer: account.reducer
};
