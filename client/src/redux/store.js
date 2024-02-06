import { configureStore, combineReducers } from '@reduxjs/toolkit';
import songReducer from './song/songslice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'
import songSaga from '../songSaga';
const saga = createSagaMiddleware()
const rootReducer = combineReducers({
  song: songReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [saga],
});
saga.run(songSaga);

export const persistor = persistStore(store);