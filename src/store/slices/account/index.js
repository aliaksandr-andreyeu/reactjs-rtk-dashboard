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

const getAccount = createAsyncThunk('account/getAccount', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await api.account.getAccount();
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getAccount STORE response: ', response);

    if (!(response && Object.keys(response).length > 0 && response.data !== undefined)) {
      throw new Error(errors.common.error);
    }

    if (!response.isOk) {
      return rejectWithValue(errorsHandler(response.message));
    }

    const data = response.data || {};

    dispatch(actions.setOverview(data));

    return data;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getAccount STORE error: ', errorsHandler(error), error);
    return rejectWithValue(errorsHandler(error));
  }
});

const editAccount = createAsyncThunk('account/editAccount', async (payload, { dispatch, rejectWithValue }) => {
  try {
    if (!payload) {
      throw new Error(errors.common.error);
    }

    const response = await api.account.editAccount(payload);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ editAccount STORE response: ', response);

    if (!(response && Object.keys(response).length > 0 && response.data !== undefined)) {
      throw new Error(errors.common.error);
    }

    if (!response.isOk) {
      return rejectWithValue(errorsHandler(response.message));
    }

    const data = response.data || {};

    dispatch(actions.setOverview(data));

    return data;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ editAccount STORE error: ', errorsHandler(error), error);
    return rejectWithValue(errorsHandler(error));
  }
});

const changePassword = createAsyncThunk('account/changePassword', async (payload, { rejectWithValue }) => {
  try {
    if (!payload) {
      throw new Error(errors.common.error);
    }

    const response = await api.account.changePassword(payload);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ changePassword STORE response: ', response);

    if (!(response && Object.keys(response).length > 0)) {
      throw new Error(errors.common.error);
    }

    if (!response.isOk) {
      return rejectWithValue(errorsHandler(response.message));
    }

    return response;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ changePassword STORE error: ', errorsHandler(error), error);
    return rejectWithValue(errorsHandler(error));
  }
});

const initialState = {
  overview: {},
  contactUsData: {
    loading: false,
    error: null,
    message: null
  },
  getAccountData: {
    loading: false,
    error: null
  },
  editAccountData: {
    loading: false,
    error: null,
    message: null
  },
  changePasswordData: {
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
      state.overview = payload || {};
    },
    resetContactUsState(state) {
      state.contactUsData = {
        loading: false,
        error: null,
        message: null
      };
    },
    resetGetAccountState(state) {
      state.getAccountData = {
        loading: false,
        error: null
      };
    },
    resetEditAccountState(state) {
      state.editAccountData = {
        loading: false,
        error: null,
        message: null
      };
    },
    resetChangePasswordState(state) {
      state.changePasswordData = {
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
    builder.addCase(getAccount.pending, (state) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getAccount STORE pending: ');
      state.getAccountData = {
        loading: true,
        error: null
      };
    });
    builder.addCase(getAccount.fulfilled, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getAccount STORE fulfilled: ', payload);
      state.getAccountData = {
        loading: false,
        error: null
      };
    });
    builder.addCase(getAccount.rejected, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getAccount STORE rejected: ', payload);
      state.getAccountData = {
        loading: false,
        error: payload || null
      };
    });
    builder.addCase(editAccount.pending, (state) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ editAccount STORE pending: ');
      state.editAccountData = {
        loading: true,
        error: null,
        message: null
      };
    });
    builder.addCase(editAccount.fulfilled, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ editAccount STORE fulfilled: ', payload);
      state.editAccountData = {
        loading: false,
        error: null,
        message: payload ? messages.common.accountDataChanged : null
      };
    });
    builder.addCase(editAccount.rejected, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ editAccount STORE rejected: ', payload);
      state.editAccountData = {
        loading: false,
        error: payload || null,
        message: null
      };
    });
    builder.addCase(changePassword.pending, (state) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ changePassword STORE pending: ');
      state.changePasswordData = {
        loading: true,
        error: null,
        message: null
      };
    });
    builder.addCase(changePassword.fulfilled, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ changePassword STORE fulfilled: ', payload);
      state.changePasswordData = {
        loading: false,
        error: null,
        message: payload ? messages.common.passwordChanged : null
      };
    });
    builder.addCase(changePassword.rejected, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ changePassword STORE rejected: ', payload);
      state.changePasswordData = {
        loading: false,
        error: payload || null,
        message: null
      };
    });
  }
});

const actions = { ...account.actions, contactUs, changePassword, getAccount, editAccount };
const reducer = account.reducer;

export default {
  actions,
  reducer
};
