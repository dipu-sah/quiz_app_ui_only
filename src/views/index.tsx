import { useDispatch } from "react-redux"
import { AppDispatch } from "../store";
import {useEffect} from "react"
import { QUIZ_APP_STATE_GETTERS } from "../store/quizApp/getters";
import { QUIZ_APP_SLICED_ACTIONS } from "../store/quizApp";
import { APP_APIs } from "../API/AppApi";
import { AppCarousel } from "../components/UI/AppCarousel/AppCarousel";

export function HompePage(){
    const dispatch=useDispatch<AppDispatch>();
    const allQuestions=QUIZ_APP_STATE_GETTERS.getAllQuizQuestions();
    useEffect(()=>{
       APP_APIs.getAllQuizQuestionasForUser().then(e=>{
        dispatch(QUIZ_APP_SLICED_ACTIONS.setAppQiuzQuestions(e))
       })
       console.log(allQuestions);
       
    },[])
    return <div><AppCarousel></AppCarousel></div>
}