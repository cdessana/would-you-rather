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

            console.group('USER_ADD_ANSWER')
            const { questionId, authedUser, answer } = action;

            console.log(questionId)
            console.log(authedUser)
            console.log(answer)

            console.log('state: ', state)
            console.groupEnd()

            const user = state[authedUser]
            user.answers[questionId] = answer

            console.log('user-after: ', user)
            // question[answer].votes = question[answer].votes.concat([authedUser]);

            // let user = state.find((u) => u.id === userId);

            // user.answers[questionId] = answer;

            // return state.filter((u) => u.id !== user.id).concat([user]);
            return state
        
        case ADD_QUESTION:

        
            console.log('USER on add question :')

            console.log('USERstate')

            const question = action.question;

            const questionAuthor = state[question.author]
            console.log('USER QUESTIONS', questionAuthor.questions)
            questionAuthor.questions = [...questionAuthor.questions, question.id]

            console.log('USER questionAuthor: ', questionAuthor)

            // user.questions
            // author.questions = author.questions.concat([question.id]);

            // return state.filter((u) => u.id !== author.id).concat([author]);
            return state
            
        default: 
            return state
    }
}