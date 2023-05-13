import { combineReducers, configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesReducer';
import genreReducer, { IGenreState } from './reducers/genreReducer';
import userReducer from './reducers/userReducer';

export interface RootState {
  genre: IGenreState;
}

const rootReducer = combineReducers({
  movies: moviesReducer,
  genre: genreReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
