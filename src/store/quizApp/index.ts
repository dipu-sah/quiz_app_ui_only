import { createSlice } from "@reduxjs/toolkit";
import { QUIZ_APP_REDUCERS } from "./reducers";
import { QUIZ_APP_INITIAL_STATES } from "./states";

const QUIZ_APP_SLICE = createSlice({
  initialState: QUIZ_APP_INITIAL_STATES,
  name: "quizApp",
  reducers: QUIZ_APP_REDUCERS,
});

export const QUIZ_APP_SLICED_ACTIONS = QUIZ_APP_SLICE.actions;
export const QUIZ_APP_SLICED_REDUCERS = QUIZ_APP_SLICE.reducer;
