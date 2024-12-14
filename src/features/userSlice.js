import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Example API endpoints (adjust as needed for your backend)
const BASE_URL = '/api/users';

// Thunk for fetching user data
export const fetchUser = createAsyncThunk('user/fetchUser', async (userId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Thunk for user login
export const loginUser = createAsyncThunk('user/loginUser', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Initial state
const initialState = {
  user: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Logout action to reset user state
    logoutUser(state) {
      state.user = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch user
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Login user
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export actions
export const { logoutUser } = userSlice.actions; // No need to export loginUser here since it's async

// Export reducer
export default userSlice.reducer;
