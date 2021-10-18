import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "jwt",
  initialState: {
    token: "",
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = "";
    },
  },
});

export const { addToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
