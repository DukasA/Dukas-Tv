import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IGenreState {
  genre: string;
}

const initialState: IGenreState = {
  genre: 'Genre',
};

export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    setGenre: (state: IGenreState, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
  },
});

export const { setGenre } = genreSlice.actions;
export default genreSlice.reducer;
