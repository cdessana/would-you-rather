import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from "../actions/questions"

export default function questions (state = {}, action) {
    switch(action.type)
    {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        
        case ADD_QUESTION:

            return {
                ...state,
                [action.question.id]: action.question
            }

        case ADD_ANSWER: 

            const { questionId, authedUser, answer } = action;

            const question = state[questionId]

            question[answer].votes = question[answer].votes.concat([authedUser]);

            let ans = Object.keys(state).filter(key => key !== questionId).reduce((obj, key) =>
            {
                obj[key] = state[key];
                return obj;
            }, {});


            ans[questionId] = question

            return state

        default: 
            return state
    }
}