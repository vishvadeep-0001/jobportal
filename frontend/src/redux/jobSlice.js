import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    alljobs: [],
    allAdminJobs: [],
    singleJob: null,
    searchJobByText: "",
    allAppliedJobs: [],
  },
  reducers: {
    // actions
    setAllJobs: (state, action) => {
      state.alljobs = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
    setAllAppliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload;
    },
  },
});
export const {
  setAllJobs,
  setAllAdminJobs,
  setSingleJob,
  setSearchJobByText,
  setAllAppliedJobs,
} = jobSlice.actions;
export default jobSlice.reducer;
