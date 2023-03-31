import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@store/api';
import { errors, messages } from '@constants';
import { errorsHandler } from '@helpers';

const contactUs = createAsyncThunk('account/contactUs', async (payload, { rejectWithValue }) => {
  try {
    if (!payload) {
      throw new Error(errors.common.error);
    }

    const response = await api.account.contactUs(payload);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ contactUs STORE response: ', response);

    if (!(response && Object.keys(response).length > 0)) {
      throw new Error(errors.common.error);
    }

    if (!response.isOk) {
      return rejectWithValue(errorsHandler(response.message || errors.common.messageNotSent));
    }

    return response;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ contactUs STORE error: ', errorsHandler(error), error);
    return rejectWithValue(errorsHandler(error));
  }
});

const initialState = {
  overview: {},
  contactUsData: {
    loading: false,
    error: null,
    message: null
  }
};

const account = createSlice({
  initialState,
  name: 'account',
  reducers: {
    setOverview(state, { payload }) {
      console.log('setOverview state:', state);
      console.log('setOverview payload:', payload);
      state.overview = payload || {};
    },
    resetContactUsState(state) {
      state.contactUsData = {
        loading: false,
        error: null,
        message: null
      };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(contactUs.pending, (state) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ contactUs STORE pending: ');
      state.contactUsData = {
        loading: true,
        error: null,
        message: null
      };
    });
    builder.addCase(contactUs.fulfilled, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ contactUs STORE fulfilled: ', payload);
      state.contactUsData = {
        loading: false,
        error: null,
        message: payload ? messages.common.messageSent : null
      };
    });
    builder.addCase(contactUs.rejected, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ contactUs STORE rejected: ', payload);
      state.contactUsData = {
        loading: false,
        error: payload || null,
        message: null
      };
    });
  }
});

const actions = { ...account.actions, contactUs };
const reducer = account.reducer;

export default {
  actions,
  reducer
};
