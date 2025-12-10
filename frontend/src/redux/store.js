import { configureStore } from "@reduxjs/toolkit";
import authslice from "./authSlice.js";
import jobSlice from "./jobSlice.js";

const store = configureStore({
  reducer: {
    auth: authslice,
    job: jobSlice,
  },
});

export default store;
