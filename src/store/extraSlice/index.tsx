import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  isLoading: boolean;
}

const initialState: UserState = {
  isLoading: false,
};

export const revertAll = createAction('REVERT_ALL');

export const extraSlice = createSlice({
  name: 'extraSlice',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(revertAll, () => initialState);
  },
});

export const { setIsLoading } = extraSlice.actions;

export default extraSlice.reducer;
