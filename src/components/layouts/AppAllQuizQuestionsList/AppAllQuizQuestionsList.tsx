import { ArrowBack } from "@mui/icons-material";
import { useState } from "react";
import Swiper from "swiper";
import { QuizQuestion } from "../../../@types/Question";
import { QUIZ_APP_STATE_GETTERS } from "../../../store/quizApp/getters";
import { AppButtons } from "../../UI/AppButtons/AppButtons";
import { AppCarousel } from "../../UI/AppCarousel/AppCarousel";
import { AppQuizQuestion } from "../AppQuizQuestionsCard/AppQuizQuestionsCard";

export function AppAllQuizQuestionsList({
  allQuestions = [],
  onSubmit = () => {},
}: {
  allQuestions?: QuizQuestion[];
  onSubmit?: () => void;
}) {
  // const allQuestions: QuizQuestion[] =
  QUIZ_APP_STATE_GETTERS.getAllQuizQuestions();
  const [swiper, setSwiper] = useState<Swiper>();
  function nextQuestion() {
    if (swiper?.isEnd) {
      return onSubmit();
    }
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
      <AppCarousel
        navigation={false}
        pagination={false}
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
                  {index + 1 < allQuestions.length ? "Next" : "Submit"}
                </AppButtons>
              </div>
            </form>
          );
        })}
      </AppCarousel>
    </div>
  );
}
