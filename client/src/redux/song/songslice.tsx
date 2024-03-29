import { createSlice } from '@reduxjs/toolkit';

interface Iprops {
    people: {
        AllSongs: null | any,
        Error: null | boolean | {},
        Loading: boolean | string,
        currentId: string | null,
        Statics: {} | null
    }
}
const initialState:  Iprops['people'] = {
  AllSongs: null,
  Error: null,
  Loading: false,
  currentId: null,
  Statics: null
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
    DeleteStart: (state, action)=>{
      state.Loading = true;
    },
    EditStart: (state, action)=>{
      state.Loading = true
    },
    SearchStart: (state, action)=>{
      state.Loading = true
    },
    SearchSuccess: (state, action)=>{
      state.AllSongs = action.payload
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
    CreateInStart: (state, action)=>{
      state.Loading = true;
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
    SignInStatics: (state, action)=> {
      state.Statics = action.payload
      state.Loading = false;
      state.Error = false;
    },
    StaticsStart:(state)=> {
      state.Loading = false
    },
    clearId: (state)=> {
      state.currentId = null;
    },
    SignInFailure: (state, action)=> {
      state.Loading = false;
      state.Error = action.payload
    }
  },
});

export const { SignInStart, SignInSuccess, SignInFailure, 
  SignInCreate, SignInDelete, SignInId, SignInEdit,  
  clearId, SignInStatics, DeleteStart, 
  EditStart, CreateInStart, StaticsStart, SearchStart, SearchSuccess} = songSlice.actions;

export default songSlice.reducer;