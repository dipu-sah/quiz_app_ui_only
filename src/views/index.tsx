import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { useEffect, useState } from "react";
import { QUIZ_APP_STATE_GETTERS } from "../store/quizApp/getters";
import { QUIZ_APP_SLICED_ACTIONS } from "../store/quizApp";
import { APP_APIs } from "../API/AppApi";
import { AppCarousel } from "../components/UI/AppCarousel/AppCarousel";
import { AppQuizQuestion } from "../components/layouts/AppQuizQuestionsCard/AppQuizQuestionsCard";
import { QuizQuestion } from "../@types/Question";
import { AppButtons } from "../components/UI/AppButtons/AppButtons";
import { ArrowBack } from "@mui/icons-material";
import Swiper from "swiper";
import { el } from "date-fns/locale";
import { AppAllQuizQuestionsList } from "../components/layouts/AppAllQuizQuestionsList/AppAllQuizQuestionsList";
export function HompePage() {
  const dispatch = useDispatch<AppDispatch>();
  const allQuestions: QuizQuestion[] =
    QUIZ_APP_STATE_GETTERS.getAllQuizQuestions();
  useEffect(() => {
    APP_APIs.getAllQuizQuestionasForUser().then((e) => {
      dispatch(QUIZ_APP_SLICED_ACTIONS.setAppQiuzQuestions(e));
    });
  }, []);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  return (
    <div>
      {(!hasSubmitted)?<AppAllQuizQuestionsList
        allQuestions={allQuestions}
        onSubmit={() => {
          setHasSubmitted(true);
        }}
      /> : (
        <div>Submitted</div>
      )}
    </div>
  );
}
