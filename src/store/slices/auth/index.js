import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@store/api';
import { errors, messages } from '@constants';
import { errorsHandler } from '@helpers';
import account from '@store/slices/account';

const {
  actions: { setOverview }
} = account;

const responseWithValue = (response, dispatch, rejectWithValue) => {
  if (!(response && Object.keys(response).length > 0 && response.data !== undefined)) {
    throw new Error(errors.common.error);
  }

  if (!response.isOk) {
    return rejectWithValue(errorsHandler(response.message));
  }

  const data = response.data || {};

  if (!(data.overview && data.accessToken)) {
    throw new Error(errors.common.error);
  }

  Boolean(data.overview) && dispatch(setOverview(data.overview));

  dispatch(actions.setAuthData(data));

  return data;
};

const resetPassword = createAsyncThunk('auth/resetPassword', async (payload, { rejectWithValue }) => {
  try {
    if (!payload) {
      throw new Error(errors.common.error);
    }

    const response = await api.auth.resetPassword(payload);

    if (!(response && Object.keys(response).length > 0)) {
      throw new Error(errors.common.error);
    }

    if (!response.isOk) {
      return rejectWithValue(errorsHandler(response.message));
    }

    return response;
  } catch (error) {
    return rejectWithValue(errorsHandler(error));
  }
});

const signIn = createAsyncThunk('auth/signIn', async (payload, { dispatch, rejectWithValue }) => {
  try {
    if (!payload) {
      throw new Error(errors.common.error);
    }

    const response = await api.auth.signIn(payload);

    return responseWithValue(response, dispatch, rejectWithValue);
  } catch (error) {
    return rejectWithValue(errorsHandler(error));
  }
});

const signUp = createAsyncThunk('auth/signUp', async (payload, { dispatch, rejectWithValue }) => {
  try {
    if (!payload) {
      throw new Error(errors.common.error);
    }

    const response = await api.auth.signUp(payload);

    return responseWithValue(response, dispatch, rejectWithValue);
  } catch (error) {
    return rejectWithValue(errorsHandler(error));
  }
});

const refreshToken = createAsyncThunk('auth/refreshToken', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await api.auth.refreshToken();

    return responseWithValue(response, dispatch, rejectWithValue);
  } catch (error) {
    const errorData = {
      status: (error && error.response && error.response.status) || null,
      error: errorsHandler(error)
    };

    return rejectWithValue(errorData);
  }
});

const signOut = createAsyncThunk('auth/signOut', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await api.auth.signOut();

    if (!(response && Object.keys(response).length > 0)) {
      throw new Error(errors.common.error);
    }

    if (!response.isOk) {
      return rejectWithValue(errorsHandler(response.message));
    }

    dispatch(actions.logout());

    return response;
  } catch (error) {
    const status = (error && error.response && error.response.status) || null;

    const errorData = {
      status,
      error: errorsHandler(error)
    };

    if (status === 401) {
      dispatch(actions.logout());
    }

    return rejectWithValue(errorData);
  }
});

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
  resetPasswordData: {
    loading: false,
    error: null,
    message: null
  },
  refreshTokenData: {
    status: null,
    error: null
  },
  signOutData: {
    status: null,
    error: null
  }
};

const auth = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setAuthData(state, { payload }) {
      state.token = (payload && payload.accessToken) || null;
      state.isTokenExpired = false;
    },
    setToken(state, { payload }) {
      state.token = (payload && payload.accessToken) || null;
    },
    logout(state) {
      state.token = null;
      state.isTokenExpired = false;
      state.isLoading = null;
    },
    resetPasswordState(state) {
      state.resetPasswordData = {
        loading: false,
        error: null,
        message: null
      };
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
    builder.addCase(resetPassword.pending, (state) => {
      state.resetPasswordData = {
        loading: true,
        error: null,
        message: null
      };
    });
    builder.addCase(resetPassword.fulfilled, (state, { payload }) => {
      state.resetPasswordData = {
        loading: false,
        error: null,
        message: payload ? messages.common.passwordResetLinkSent : null
      };
    });
    builder.addCase(resetPassword.rejected, (state, { payload }) => {
      state.resetPasswordData = {
        loading: false,
        error: payload || null,
        message: null
      };
    });
    builder.addCase(signIn.pending, (state) => {
      state.signInData = {
        loading: true,
        error: null
      };
    });
    builder.addCase(signIn.fulfilled, (state) => {
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
    builder.addCase(signUp.fulfilled, (state) => {
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
    builder.addCase(refreshToken.fulfilled, (state) => {
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
    builder.addCase(signOut.pending, (state) => {
      state.isTokenExpired = false;
      state.signOutData = {
        status: null,
        error: null
      };
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.signOutData = {
        status: null,
        error: null
      };
    });
    builder.addCase(signOut.rejected, (state, { payload }) => {
      state.signOutData = payload;
    });
  }
});

const actions = { ...auth.actions, signIn, signUp, refreshToken, signOut, resetPassword };
const reducer = auth.reducer;

export default {
  actions,
  reducer
};
