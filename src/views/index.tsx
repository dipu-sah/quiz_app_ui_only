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
export function HompePage() {
  const dispatch = useDispatch<AppDispatch>();
  const allQuestions: QuizQuestion[] =
    QUIZ_APP_STATE_GETTERS.getAllQuizQuestions();
  useEffect(() => {
    APP_APIs.getAllQuizQuestionasForUser().then((e) => {
      dispatch(QUIZ_APP_SLICED_ACTIONS.setAppQiuzQuestions(e));
    });
  }, []);
  const [swiper, setSwiper] = useState<Swiper>();
  function nextQuestion() {
    swiper?.slideNext();
  }
  function prevQuestion() {
    swiper?.slidePrev();
  }
  return (
    <div>
      <AppButtons iconOnly onClick={prevQuestion}>
        <ArrowBack />
      </AppButtons>
      <div className="h-[80vh]">
        <AppCarousel
          navigation={false}
          onSwiper={(e) => {
            setSwiper(e);
          }}
        >
          {allQuestions.map((e, index) => {
            return (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  nextQuestion();
                }}
                key={index}
                className="w-full h-full flex flex-col box-border p-8"
              >
                <div className="grow">
                  <AppQuizQuestion {...e}></AppQuizQuestion>
                </div>
                <div className="flex flex-row justify-end">
                  <AppButtons
                    type="submit"
                    fullWidth={false}
                    variant="contained"
                    color="error"
                  >
                    Next
                  </AppButtons>
                </div>
              </form>
            );
          })}
        </AppCarousel>
      </div>
    </div>
  );
}
