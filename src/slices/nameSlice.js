import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "username",
  initialState: {
    name: "",
  },
  reducers: {
    addName: (state, action) => {
      state.token = action.payload;
    },
    removeName: (state) => {
      state.token = "";
    },
  },
});

export const { addName, removeName } = nameSlice.actions;
export default nameSlice.reducer;
