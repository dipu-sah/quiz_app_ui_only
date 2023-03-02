import { QuizQuestion } from "../@types/Question";
import AllQuizData from "./dummyData.json";
class API {
  getAllQuizQuestionasForUser(): Promise<QuizQuestion[]> {
    return Promise.resolve<QuizQuestion[]>(
      AllQuizData.questions as QuizQuestion[]
    );
  }
}
export const APP_APIs = new API();
