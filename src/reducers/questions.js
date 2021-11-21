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

        console.log('ADD_QUESTION state', state )
            return {
                ...state,
                [action.question.id]: action.question
            }

        case ADD_ANSWER: 
        console.log('here')
            console.log('ADD_ANSWER the state: ', state)
            console.log('ADD_ANSWER the action: ', action)

            const { questionId, authedUser, answer } = action;

            const question = state[questionId]
            console.log('question: ', question)

            question[answer].votes = question[answer].votes.concat([authedUser]);
            console.log(question[answer].votes)

            // remove question
            let ans = Object.keys(state).filter(key => key !== questionId).reduce((obj, key) =>
            {
                obj[key] = state[key];
                return obj;
            }, {});

                // console.log('fdfa', ans)

            ans[questionId] = question

            return state

        default: 
            return state
    }
}