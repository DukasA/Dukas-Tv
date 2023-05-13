import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from 'firebase/auth';

interface IUser {
  user: User | null;
}

const initialState: IUser = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setNewUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setNewUser } = userSlice.actions;
export default userSlice.reducer;
