import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../types/User.ts';

export type UserState = {
  data: User | null;
};


const initialState: UserState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAction: (_, action: PayloadAction<User>) => ({
      data: action.payload,
    }),
    updateUserAction(state, action: PayloadAction<User>) {
      return {
        data: {...state.data, ...action.payload},
      };
    },
    removeUserAction: () => ({
      data: null,
    }),
  },
});

export const {setUserAction,removeUserAction,updateUserAction} = userSlice.actions;

export default userSlice.reducer;
