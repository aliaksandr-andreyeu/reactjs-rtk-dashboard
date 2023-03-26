import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@store/api';
import { errors } from '@constants';
import { errorsHandler } from '@helpers';

const getUsers = createAsyncThunk('users/getUsers', async (payload, { rejectWithValue }) => {
  try {
    const response = await api.users.getUsers();

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getUsers STORE response: ', response);

    if (!(response && Object.keys(response).length > 0 && response.data !== undefined)) {
      throw new Error(errors.common.error);
    }

    if (!response.isOk) {
      return rejectWithValue(errorsHandler(response.message));
    }

    const data = response.data || [];

    return data;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getUsers STORE error: ', errorsHandler(error), error);
    return rejectWithValue(errorsHandler(error));
  }
});

const getUser = createAsyncThunk('users/getUser', async (payload, { rejectWithValue }) => {
  try {
    const response = await api.users.getUser(payload);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getUser STORE response: ', response);
    return response;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getUser STORE error: ', error);
    return rejectWithValue(error);
  }
});

const createUser = createAsyncThunk('users/createUser', async (payload, { rejectWithValue }) => {
  try {
    const response = await api.users.createUser(payload);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ createUser STORE response: ', response);
    return response;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ createUser STORE error: ', error);
    return rejectWithValue(error);
  }
});

const modifyUser = createAsyncThunk('users/modifyUser', async (payload, { rejectWithValue }) => {
  try {
    if (!payload) {
      throw new Error(errors.common.error);
    }

    const response = await api.users.modifyUser(payload.id, payload.data);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ modifyUser STORE response: ', response);
    return response;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ modifyUser STORE error: ', error);
    return rejectWithValue(error);
  }
});

const updateUser = createAsyncThunk('users/updateUser', async (payload, { dispatch, rejectWithValue }) => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ updateUser STORE payload: ', payload);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ updateUser STORE id: ', payload.id);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ updateUser STORE data: ', payload.data);

  try {
    if (!payload) {
      throw new Error(errors.common.error);
    }

    const response = await api.users.updateUser(payload.id, payload.data);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ updateUser STORE response: ', response);

    if (!(response && Object.keys(response).length > 0 && response.data !== undefined)) {
      throw new Error(errors.common.error);
    }

    if (!response.isOk) {
      return rejectWithValue(errorsHandler(response.message));
    }

    dispatch(getUsers());

    const data = response.data || {};

    return data;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ updateUser STORE error: ', errorsHandler(error), error);
    return rejectWithValue(errorsHandler(error));
  }
});

const deleteUser = createAsyncThunk('users/deleteUser', async (payload, { dispatch, rejectWithValue }) => {
  try {
    if (!payload) {
      throw new Error(errors.common.error);
    }

    const response = await api.users.deleteUser(payload);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ deleteUser STORE response: ', response);

    if (!(response && Object.keys(response).length > 0)) {
      throw new Error(errors.common.error);
    }

    if (!response.isOk) {
      return rejectWithValue(errorsHandler(response.message));
    }

    dispatch(getUsers());

    return response;
  } catch (error) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ deleteUser STORE error: ', errorsHandler(error), error);
    return rejectWithValue(errorsHandler(error));
  }
});

const initialState = {
  updateUserData: {
    loading: false,
    error: null
  },

  deleteUserData: {
    loading: false,
    error: null
  },

  usersData: {
    loading: false,
    error: null,
    data: null
  }
};

const users = createSlice({
  initialState,
  name: 'users',
  reducers: {
    resetGetUsersState(state) {
      state.usersData = {
        ...state.usersData,
        loading: false,
        error: null
      };
    },
    resetUpdateUserState(state) {
      state.updateUserData = {
        loading: false,
        error: null
      };
    },
    resetDeleteUserState(state) {
      state.deleteUserData = {
        loading: false,
        error: null
      };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.usersData = {
        ...state.usersData,
        loading: true,
        error: null
      };
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.usersData = {
        ...state.usersData,
        loading: false,
        error: null,
        ...(payload && { data: payload })
      };
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.usersData = {
        ...state.usersData,
        loading: false,
        error: payload || null
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
      state.updateUserData = {
        loading: true,
        error: null
      };
    });
    builder.addCase(updateUser.fulfilled, (state) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ updateUser.fulfilled: ');
      state.updateUserData = {
        loading: false,
        error: null
      };
    });
    builder.addCase(updateUser.rejected, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ updateUser.rejected: ', payload);
      state.updateUserData = {
        loading: false,
        error: payload
      };
    });

    builder.addCase(deleteUser.pending, (state) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ deleteUser.pending: ');
      state.deleteUserData = {
        loading: true,
        error: null
      };
    });
    builder.addCase(deleteUser.fulfilled, (state) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ deleteUser.fulfilled: ');
      state.deleteUserData = {
        loading: false,
        error: null
      };
    });
    builder.addCase(deleteUser.rejected, (state, { payload }) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ deleteUser.rejected: ', payload);
      state.deleteUserData = {
        loading: false,
        error: payload
      };
    });
  }
});

const actions = { ...users.actions, getUsers, getUser, createUser, modifyUser, updateUser, deleteUser };
const reducer = users.reducer;

export default {
  actions,
  reducer
};
