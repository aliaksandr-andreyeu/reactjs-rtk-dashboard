import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@store/api';
import { errors } from '@constants';
import { errorsHandler } from '@helpers';
import account from '@store/slices/account';

const {
  actions: { setOverview }
} = account;

const initialState = {
  token: null,
  isTokenExpired: false,
  isLoading: true,
  signInData: {
    loading: false,
    error: null
  },
  signUpData: {
    loading: false,
    error: null
  },
  refreshTokenData: {
    status: null,
    error: null
  }
};

const signIn = createAsyncThunk('auth/signin', async (payload, { dispatch, rejectWithValue }) => {
  try {
    if (!payload) {
      throw new Error(errors.common.error);
    }

    const response = await api.auth.signIn(payload);

    if (!(response && Object.keys(response).length > 0 && response.data !== undefined)) {
      throw new Error(errors.common.error);
    }

    if (!response.isOk) {
      const msg = errorsHandler(response.message);

      return rejectWithValue(msg);
    }

    const data = response.data || {};

    if (!(data.overview && data.accessToken)) {
      throw new Error(errors.common.error);
    }

    Boolean(data.overview) && dispatch(setOverview(data.overview));

    return data;
  } catch (error) {
    console.log('signIn STORE error: ', error);

    const msg = errorsHandler(error);

    return rejectWithValue(msg);
  }
});

const signUp = createAsyncThunk('auth/signup', async (payload, { dispatch, rejectWithValue }) => {
  try {
    if (!payload) {
      throw new Error(errors.common.error);
    }

    const response = await api.auth.signUp(payload);

    if (!(response && Object.keys(response).length > 0 && response.data !== undefined)) {
      throw new Error(errors.common.error);
    }

    if (!response.isOk) {
      const msg = errorsHandler(response.message);

      return rejectWithValue(msg);
    }

    const data = response.data || {};

    if (!(data.overview && data.accessToken)) {
      throw new Error(errors.common.error);
    }

    Boolean(data.overview) && dispatch(setOverview(data.overview));

    return data;
  } catch (error) {
    console.log('signUp STORE error: ', error);

    const msg = errorsHandler(error);

    return rejectWithValue(msg);
  }
});

const refreshToken = createAsyncThunk('auth/refreshtoken', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await api.auth.refreshToken();

    if (!(response && Object.keys(response).length > 0 && response.data !== undefined)) {
      throw new Error(errors.common.error);
    }

    if (!response.isOk) {
      const msg = errorsHandler(response.message);

      return rejectWithValue(msg);
    }

    const data = response.data || {};

    if (!(data.overview && data.accessToken)) {
      throw new Error(errors.common.error);
    }

    Boolean(data.overview) && dispatch(setOverview(data.overview));

    return data;
  } catch (error) {
    console.log('refreshToken STORE error: ', error);

    const errorData = {
      status: (error && error.response && error.response.status) || null,
      error: errorsHandler(error)
    };

    return rejectWithValue(errorData);
  }
});

const auth = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setToken(state, { payload }) {
      console.log('+++++++++++++++++++++++++ setToken: ', payload);
      state.token = payload !== undefined ? Boolean(payload) : null;
    },
    logout(state) {
      state.token = null;
      state.isTokenExpired = false;
      state.isLoading = null;
    },
    resetSignInState(state) {
      state.signInData = {
        loading: false,
        error: null
      };
    },
    resetSignUpState(state) {
      state.signUpData = {
        loading: false,
        error: null
      };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.signInData = {
        loading: true,
        error: null
      };
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.token = (payload && payload.accessToken) || null;
      state.isTokenExpired = false;

      state.signInData = {
        loading: false,
        error: null
      };
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      state.signInData = {
        loading: false,
        error: payload || null
      };
    });
    builder.addCase(signUp.pending, (state) => {
      state.signUpData = {
        loading: true,
        error: null
      };
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.token = (payload && payload.accessToken) || null;
      state.isTokenExpired = false;

      state.signUpData = {
        loading: false,
        error: null
      };
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      state.signUpData = {
        loading: false,
        error: payload || null
      };
    });
    builder.addCase(refreshToken.pending, (state) => {
      state.isTokenExpired = true;

      state.refreshTokenData = {
        status: null,
        error: null
      };
    });
    builder.addCase(refreshToken.fulfilled, (state, { payload }) => {
      state.token = (payload && payload.accessToken) || null;
      state.isTokenExpired = false;
      state.isLoading = false;

      state.refreshTokenData = {
        status: null,
        error: null
      };
    });
    builder.addCase(refreshToken.rejected, (state, { payload }) => {
      state.refreshTokenData = payload;

      if (payload.status === 401) {
        state.token = null;
      }

      state.isLoading = false;
    });
  }
});

export default {
  actions: { ...auth.actions, signIn, signUp, refreshToken },
  reducer: auth.reducer
};
