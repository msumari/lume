import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./slices/tokenSlice";
import nameReducer from "./slices/nameSlice";

export default configureStore({
  reducer: {
    token: tokenReducer,
    name: nameReducer,
  },
});
