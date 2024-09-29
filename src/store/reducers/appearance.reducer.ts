import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorScheme: "system",
};

const slice = createSlice({
  name: "appearance",
  initialState,
  reducers: {
    setColorScheme: (state, action) => {
      state.colorScheme = action.payload;
    },
  },
});

export const { setColorScheme } = slice.actions;

export default slice.reducer;
