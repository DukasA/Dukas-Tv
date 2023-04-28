import { combineReducers, configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesReducer';
import genreReducer from './reducers/genreReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  genre: genreReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
