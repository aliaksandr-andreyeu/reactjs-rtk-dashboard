import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@store/api';
import { errors } from '@constants';
import { errorsHandler } from '@helpers';

const initialState = {
  usersData: {
    loading: false,
    error: null,
    data: null
  }
};

const getUsers = createAsyncThunk('users/getUsers', async (payload, { rejectWithValue }) => {
  try {
    const response = await api.users.getUsers();

    if (!(response && Object.keys(response).length > 0 && response.data !== undefined)) {
      throw new Error(errors.common.error);
    }

    if (!response.isOk) {
      const msg = errorsHandler(response.message);

      return rejectWithValue(msg);
    }

    const data = response.data || [];

    return data;
  } catch (error) {
    console.log('getUsers STORE error: ', error);
    const msg = errorsHandler(error);
    return rejectWithValue(msg);
  }
});

const users = createSlice({
  initialState,
  name: 'users',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.usersData = {
        loading: true,
        error: null,
        data: null
      };
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.usersData = {
        loading: false,
        error: null,
        data: payload || null
      };
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.usersData = {
        loading: false,
        error: payload || null,
        data: null
      };
    });
  }
});

export default {
  actions: { ...users.actions, getUsers },
  reducer: users.reducer
};
