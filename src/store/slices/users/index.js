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

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getUsers STORE response: ', response);

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
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getUsers STORE error: ', error);
    const msg = errorsHandler(error);
    return rejectWithValue(msg);
  }
});

const getUser = createAsyncThunk('users/getUser', async (payload, { rejectWithValue }) => {
  try {
    const response = await api.users.getUser();
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getUser STORE response: ', response);
    return response;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getUser STORE error: ', error);
    return rejectWithValue(error);
  }
});

const createUser = createAsyncThunk('users/createUser', async (payload, { rejectWithValue }) => {
  try {
    const response = await api.users.createUser();
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ createUser STORE response: ', response);
    return response;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ createUser STORE error: ', error);
    return rejectWithValue(error);
  }
});

const modifyUser = createAsyncThunk('users/modifyUser', async (payload, { rejectWithValue }) => {
  try {
    const response = await api.users.modifyUser();
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ modifyUser STORE response: ', response);
    return response;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ modifyUser STORE error: ', error);
    return rejectWithValue(error);
  }
});

const updateUser = createAsyncThunk('users/updateUser', async (payload, { rejectWithValue }) => {
  try {
    const response = await api.users.updateUser();
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ updateUser STORE response: ', response);
    return response;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ updateUser STORE error: ', error);
    return rejectWithValue(error);
  }
});

const deleteUser = createAsyncThunk('users/deleteUser', async (payload, { rejectWithValue }) => {
  try {
    const response = await api.users.deleteUser();
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ deleteUser STORE response: ', response);
    return response;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ deleteUser STORE error: ', error);
    return rejectWithValue(error);
  }
});

const users = createSlice({
  initialState,
  name: 'users',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getUsers.pending: ');
      state.usersData = {
        loading: true,
        error: null,
        data: null
      };
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getUsers.fulfilled: ', payload);
      state.usersData = {
        loading: false,
        error: null,
        data: payload || null
      };
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getUsers.rejected: ', payload);
      state.usersData = {
        loading: false,
        error: payload || null,
        data: null
      };
    });


    builder.addCase(getUser.pending, (state) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getUser.pending: ');
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getUser.fulfilled: ', payload);
    });
    builder.addCase(getUser.rejected, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getUser.rejected: ', payload);
    });


    builder.addCase(createUser.pending, (state) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ createUser.pending: ');
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ createUser.fulfilled: ', payload);
    });
    builder.addCase(createUser.rejected, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ createUser.rejected: ', payload);
    });


    builder.addCase(modifyUser.pending, (state) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ modifyUser.pending: ');
    });
    builder.addCase(modifyUser.fulfilled, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ modifyUser.fulfilled: ', payload);
    });
    builder.addCase(modifyUser.rejected, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ modifyUser.rejected: ', payload);
    });


    builder.addCase(updateUser.pending, (state) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ updateUser.pending: ');
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ updateUser.fulfilled: ', payload);
    });
    builder.addCase(updateUser.rejected, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ updateUser.rejected: ', payload);
    });


    builder.addCase(deleteUser.pending, (state) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ deleteUser.pending: ');
    });
    builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ deleteUser.fulfilled: ', payload);
    });
    builder.addCase(deleteUser.rejected, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ deleteUser.rejected: ', payload);
    });


  }
});

export default {
  actions: { ...users.actions, getUsers, getUser, createUser, modifyUser, updateUser, deleteUser },
  reducer: users.reducer
};
