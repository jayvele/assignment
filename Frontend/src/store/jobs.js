import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "EF SDE",
    salary: "10000",
    date: "2022-10-01",
    description: "A Job",
    id: 999
  },
];

const jobsSlice = createSlice({
  name: "jobs",
  initialState: initialState,
  reducers: {
    addJob(state, action) {
      state.push(action.payload);
    },
    removeJob(state, action) {
      return state.filter((job) => job.id !== action.payload.id)
    },
  },
});

const store = configureStore({
  reducer: jobsSlice.reducer,
});

export const jobsActions = jobsSlice.actions;

export default store;
