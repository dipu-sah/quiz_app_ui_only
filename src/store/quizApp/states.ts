import { QuizAppState } from "../../@types/AppStates";

export const QUIZ_APP_INITIAL_STATES: QuizAppState = {
  allQuestions: [
    {
      attributetype: 1,
      question: "",
      questionid: 1,
      questionoption: [],
      questiontype: "",
      validation: false,
    },
  ],
};
