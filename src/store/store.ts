import { combineReducers, configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesReducer';
import genreReducer, { IGenreState } from './reducers/genreReducer';

export interface RootState {
  genre: IGenreState;
}

const rootReducer = combineReducers({
  movies: moviesReducer,
  genre: genreReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
