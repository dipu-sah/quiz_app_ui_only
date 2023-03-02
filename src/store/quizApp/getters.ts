import { useSelector } from "react-redux";
import { QuizAppState } from "../../@types/AppStates";
import { RootState } from "../index";
export const QUIZ_APP_STATE_GETTERS = {
  getAllQuizQuestions() {
    return useSelector<RootState>((e) => e.quizApp.allQuestions);
  },
};
