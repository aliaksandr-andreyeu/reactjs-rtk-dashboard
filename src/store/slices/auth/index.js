import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@store';
import { errors } from '@constants';
import { errorsHandler } from '@helpers';
import account from '@store/slices/account';

const {
  actions: { setOverview }
} = account;

const initialState = {
  token: null,
  signInData: {
    loading: false,
    error: null
  },
  signUpData: {
    loading: false,
    error: null
  }
};

export const signIn = createAsyncThunk('auth/signin', async (payload, { dispatch, rejectWithValue }) => {
  console.log('~~~~~ createAsyncThunk signIn payload:', payload);

  try {
    const response = await api.auth.signIn(payload);

    console.log('~~~~~ createAsyncThunk signIn response:', response);

    if (!(response && Object.keys(response).length > 0 && response.data !== undefined)) {
      throw new Error(errors.common.error);
    }

    if (!response.isOk) {
      // resolveError && resolveError();

      const msg = errorsHandler(response.message);

      return rejectWithValue(msg);
    }

    const data = response.data || {};

    if (!(data.overview && data.accessToken)) {
      throw new Error(errors.common.error);
    }

    Boolean(data.overview) && dispatch(setOverview(data.overview));

    // resolveHandler && resolveHandler();

    return data;
  } catch (error) {
    console.log('~~~~~ createAsyncThunk signIn error:', error);
    console.log('~~~~~ createAsyncThunk signIn error:', error.message);

    // rejectHandler && rejectHandler();

    const msg = errorsHandler(error);

    return rejectWithValue(msg);
  } finally {
    console.log('~~~~~ createAsyncThunk signIn finally:');
  }
});

export const signUp = createAsyncThunk('auth/signup', async (payload) => {
  console.log('~~~~~ createAsyncThunk signUp payload:', payload);
  try {
    const response = await api.auth.signUp(payload);
    console.log('~~~~~ createAsyncThunk signUp response:', response);

    return response;
  } catch (error) {
    console.log('~~~~~ createAsyncThunk signUp error:', error.message);
  } finally {
    console.log('~~~~~ createAsyncThunk signUp finally:');
  }
});

const auth = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    logout(state) {
      state.token = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      console.log('signIn.pending state:', state);

      state.signInData = {
        loading: true,
        error: null
      };
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      console.log('signIn.fulfilled state:', state);
      console.log('signIn.fulfilled payload:', payload);

      state.token = (payload && payload.accessToken) || null;

      state.signInData = {
        loading: false,
        error: null
      };
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      console.log('signIn.rejected state:', state);
      console.log('signIn.rejected payload:', payload);

      state.signInData = {
        loading: false,
        error: payload || null
      };
    });
  }
});

export default {
  actions: { ...auth.actions, signIn, signUp },
  reducer: auth.reducer
};
