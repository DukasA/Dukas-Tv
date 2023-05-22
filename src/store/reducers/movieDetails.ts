import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovieDetailsProps } from '../../interfaces/MovieDetailsProps/MovieDetailsProps';

interface IMovie {
  movieDetails: IMovieDetailsProps | null;
}

const initialState: IMovie = {
  movieDetails: null,
};

export const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {
    loadMovieDetails: (state, action: PayloadAction<IMovieDetailsProps>) => {
      state.movieDetails = action.payload;
    },
  },
});

export const { loadMovieDetails } = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
