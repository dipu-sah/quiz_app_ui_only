import type { PayloadAction } from "@reduxjs/toolkit";
import { QuizAppState } from "../../@types/AppStates";
import { QuizQuestion } from "../../@types/Question";
export const QUIZ_APP_REDUCERS = {
  setAppQiuzQuestions(
    state: QuizAppState,
    { payload }: PayloadAction<QuizQuestion[]>
  ): QuizAppState {
    return { ...state, allQuestions: [...payload] };
  },
};
