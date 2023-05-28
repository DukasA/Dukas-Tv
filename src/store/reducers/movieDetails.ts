import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovieDetailsProps } from '../../interfaces/MovieDetailsProps/MovieDetailsProps';

interface ImagesProps {
  backdrops: [{ file_path: string }];
  logos: [{ file_path: string }];
  posters: [{ file_path: string }];
}

interface IMovie {
  movieDetails: IMovieDetailsProps | null;
  images: ImagesProps | null;
}

const initialState: IMovie = {
  movieDetails: null,
  images: null,
};

export const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {
    loadMovieDetails: (state, action: PayloadAction<IMovieDetailsProps>) => {
      state.movieDetails = action.payload;
    },
    loadMovieMedia: (state, action: PayloadAction<ImagesProps>) => {
      state.images = action.payload;
    },
  },
});

export const { loadMovieDetails, loadMovieMedia } = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
