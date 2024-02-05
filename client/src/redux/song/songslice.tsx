import { createSlice } from '@reduxjs/toolkit';

interface Iprops {
    people: {
        AllSongs: null | any,
        Error: null | boolean | {},
        Loading: boolean
    }
}
const initialState:  Iprops['people'] = {
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
      state.Error = false;
    },
  },
});

export const { SignInStart, SignInSuccess } = songSlice.actions;

export default songSlice.reducer;