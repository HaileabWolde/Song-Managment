import { createSlice } from '@reduxjs/toolkit';

interface Iprops {
    people: {
        AllSongs: null | any,
        Error: null | boolean | {},
        Loading: boolean,
        currentId: string | null
    }
}
const initialState:  Iprops['people'] = {
  AllSongs: null,
  Error: null,
  Loading: false,
  currentId: null
};

interface song {
    _id: string,
    Title: string,
    Artist: string,
    Album: string,
    Genre: string
  }


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
    SignInCreate: (state, action)=>{
      state.AllSongs = [...state.AllSongs, action.payload];
      state.Loading = false;
      state.Error = false;
    },
    SignInEdit: (state, action)=>{
      state.AllSongs = state.AllSongs.map((song: song)=> song._id === action.payload._id ? action.payload : song )
    },
    SignInDelete: (state, action)=>{
      state.AllSongs = state.AllSongs.filter((song: song)=> song._id !== action.payload)
      state.Loading = false;
      state.Error = false;
    },
    SignInId: (state, action)=> {
      state.currentId = action.payload;
    },
    SignInFailure: (state, action)=> {
      state.AllSongs = false;
      state.Loading = false;
      state.Error = action.payload
    }
  },
});

export const { SignInStart, SignInSuccess, SignInFailure, 
  SignInCreate, SignInDelete, SignInId, SignInEdit} = songSlice.actions;

export default songSlice.reducer;