import { useSelector } from "react-redux";
import { QuizAppState } from "../../@types/AppStates";
import { RootState } from "../index";
export const QUIZ_APP_STATE_GETTERS = {
  getAllQuizQuestions(): QuizAppState["allQuestions"] {
    return useSelector<RootState, QuizAppState["allQuestions"]>(
      (e) => e.quizApp.allQuestions
    );
  },
};
