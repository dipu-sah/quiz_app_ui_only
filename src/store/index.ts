import { configureStore } from "@reduxjs/toolkit";
import { QUIZ_APP_SLICED_REDUCERS } from "./quizApp";

export const store = configureStore({
  reducer: {
    quizApp: QUIZ_APP_SLICED_REDUCERS,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
