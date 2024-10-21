import {createSlice} from '@reduxjs/toolkit';
import {initialExample} from '../initialState/initialExample';

export const exampleSlice = createSlice({
  name: 'example',
  initialState: initialExample,
  reducers: {
    resetExample: () => initialExample,
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
  }
});

export const {
  resetExample,
  updateAge,
  updateToken
} = exampleSlice.actions;

export default exampleSlice.reducer;
