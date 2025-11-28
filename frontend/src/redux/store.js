import { configureStore } from "@reduxjs/toolkit";
import authslice from "./authSlice.js";

const store = configureStore({
  reducer: {
    auth: authslice,
  },
});

export default store;
