import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  AllSongs: null,
  Error: null,
  Loading: false,
};

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    SignInStart: (state) => {
      state.Loading = true;
    },
    SignInSuccess: (state, action) => {
      state.AllSongs = action.payload;
      state.Loading = false;
    },
  },
});

export const { SignInStart, SignInSuccess } = songSlice.actions;

export default songSlice.reducer;