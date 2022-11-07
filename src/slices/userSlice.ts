import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { users } from '../store/initialState';

export const fetchUsers = createAsyncThunk('users', async () => {
  const res = await fetch('http://api.github.com/users');
  const json = await res.json();
  return json;
});

export const fetchPosts = createAsyncThunk('posts', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const json = await res.json();
  return json;
});

const userSlice = createSlice({
  initialState: users,
  name: 'user',
  reducers: {
    addUser: (state, action: PayloadAction<number>) => {
      return [...state, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return [...state, ...action.payload];
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return [...state, ...action.payload];
    });
  },
});

export const { addUser } = userSlice.actions;
export const user = userSlice.reducer;
