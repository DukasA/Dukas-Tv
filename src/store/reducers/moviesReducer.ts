import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovieCardProps } from '../../interfaces/MovieCardProps';

interface IMovies {
  homePageMovies: IMovieCardProps[];
  movies: IMovieCardProps[];
  cartoons: IMovieCardProps[];
  series: IMovieCardProps[];
  pageName: string;
}

const initialState: IMovies = {
  homePageMovies: [],
  series: [],
  movies: [],
  cartoons: [],
  pageName: 'home',
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    loadHomeMovies: (state, action: PayloadAction<IMovieCardProps[]>) => {
      state.homePageMovies = action.payload;
    },
    loadMovies: (state, action: PayloadAction<IMovieCardProps[]>) => {
      state.movies = action.payload;
    },
    loadSeries: (state, action: PayloadAction<IMovieCardProps[]>) => {
      state.series = action.payload;
    },
    loadCartoons: (state, action: PayloadAction<IMovieCardProps[]>) => {
      state.cartoons = action.payload;
    },
    setPageName: (state, action: PayloadAction<string>) => {
      state.pageName = action.payload;
    },
  },
});

export const { loadHomeMovies, setPageName } = moviesSlice.actions;

export default moviesSlice.reducer;
