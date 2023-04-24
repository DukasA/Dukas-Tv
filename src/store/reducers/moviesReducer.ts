import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovieCardProps } from '../../interfaces/MovieCardProps';

interface IMovies {
  movies: IMovieCardProps[];
}

const initialState: IMovies = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    load: (state, action: PayloadAction<IMovieCardProps[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { load } = moviesSlice.actions;

export default moviesSlice.reducer;
