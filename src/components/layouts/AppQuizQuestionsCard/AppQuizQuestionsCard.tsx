import { AppInputSwitcher } from "../../UI/AppInputSwitcher/AppInputSwitcher";
import { AppQuizQuestionCardProps } from "./AppQuizQuestionCard.props";

export function AppQuizQuestion({ ...question }: AppQuizQuestionCardProps) {
  return (
    <div className="flex flex-col items-center w-full h-fit box-border p-8">
      <AppInputSwitcher
        type={question.questiontype.toLowerCase()}
        label={question.question}
        options={question.questionoption.map((e) => {
          return { label: e.optionvalue, value: e.optionvalue };
        })}
        required={question.validation}
      />
    </div>
  );
}
