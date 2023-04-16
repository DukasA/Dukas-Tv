import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IMovie {
  movie: {
    id: number;
    title: string;
    release_date: string;
    backdrop_path: string;
  };
}

interface IMovies {
  movies: IMovie[];
}

const initialState: IMovies = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    load: (state, action: PayloadAction<IMovie[]>) => {
      state.movies = action.payload; /* .filter(
        (movie: any) => movie.media_type === 'tv',
      ); */
    },
  },
});

export const { load } = moviesSlice.actions;

export default moviesSlice.reducer;
