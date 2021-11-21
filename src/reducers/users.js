import { RECEIVE_USERS } from "../actions/users";
import { ADD_ANSWER,  ADD_QUESTION} from "../actions/questions";

export default function users (state = {}, action) {
    switch(action.type)
    {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
        }

        case ADD_ANSWER:

            const { questionId, authedUser, answer } = action;
            const user = state[authedUser]
            user.answers[questionId] = answer
            return state
        
        case ADD_QUESTION:

            const question = action.question;

            const questionAuthor = state[question.author]
            questionAuthor.questions = [...questionAuthor.questions, question.id]

            return state
            
        default: 
            return state
    }
}