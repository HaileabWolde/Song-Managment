import { call, put, takeEvery } from 'redux-saga/effects';
import { SignInFailure, SignInSuccess, SignInDelete, SignInEdit, SignInCreate, SignInStatics, SearchSuccess} from './redux/song/songslice';
import { PayloadAction } from '@reduxjs/toolkit';

function* workGetAllSongFetch(): Generator<any, void, any> {
  const Songs =  yield call(() => fetch('https://songbackend-6eee.onrender.com/Songs/AllSong'));

  const data = yield Songs.json()
  if(data.success === false){
    yield put(SignInFailure(data.message));
  }

  yield put(SignInSuccess(data))

}

function* workGetStatics() : Generator<any, void, any> {
  const Statics =  yield call(() => fetch('https://songbackend-6eee.onrender.com/Songs/statics'));

  const data = yield Statics.json()
  if(data.success === false){
    yield put(SignInFailure(data.message));
  }

  yield put(SignInStatics(data))

}

function* workDeleteSong(action: PayloadAction<string>): Generator<any, void, any> {
  const songId = action.payload;
  const endpoint = `https://songbackend-6eee.onrender.com/Songs/deleteSong/${songId}`;

  try {
    const res = yield call(fetch, endpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = yield res.json();
    console.log(data);
    if (data.success === false) {
      yield put(SignInFailure(data.message));
    } else {
      yield put(SignInDelete(data._id));
    }
  } catch (error) {
    throw error;
  }
}

function*  workEditSong(action: PayloadAction<{ id: string; data: FormData }>): Generator<any, void, any> {
  const formData = action.payload;
  const { id, data:formdata } = formData;
 
  const endpoint = `https://songbackend-6eee.onrender.com/Songs/updateSong/${id}`;
  try {
    const res = yield call(fetch, endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata )
    });
    const data = yield res.json();
    console.log(data);
    if (data.success === false) {
      yield put(SignInFailure(data.message));
    } else {
      yield put(SignInEdit(data));
    }
  } catch (error) {
    throw error;
  }
}
function* SearchSong (action: PayloadAction<string>): Generator<any, void, any> {
  const Data = action.payload;
  const endpoint = `https://songbackend-6eee.onrender.com/Songs/search?searchInfo=${Data || 'none'}`;
  try {
    const res = yield call(fetch, endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },});
    const data = yield res.json();
    console.log(data);
    if (data.success === false) {
      yield put(SignInFailure(data.message));
    } else {
      yield put(SearchSuccess(data.Songs));
    }
  } catch (error) {
    throw error;
  }
}
function* workCreateSong(action: PayloadAction<{ data: FormData }>):Generator<any, void, any> {
  const formData = action.payload;
  const {data: FormData} = formData
 
  const endpoint = `https://songbackend-6eee.onrender.com/Songs/createSong`;
  try {
    const res = yield call(fetch, endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(FormData )
    });
    const data = yield res.json();
  
    if (data.success === false) {
      yield put(SignInFailure(data.message));
    } else {
      yield put(SignInCreate(data.result));
    }
  } catch (error) {
    throw error;
  }
}
function* songSaga() {
  yield takeEvery('song/SignInStart', workGetAllSongFetch);
  yield takeEvery('song/DeleteStart', workDeleteSong);
  yield takeEvery('song/EditStart', workEditSong);
  yield takeEvery('song/CreateInStart', workCreateSong);
  yield takeEvery('song/StaticsStart', workGetStatics);
  yield takeEvery('song/SearchStart', SearchSong);
}

export default songSaga;