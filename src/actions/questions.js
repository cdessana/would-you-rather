import {saveQuestion, saveQuestionAnswer} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER';


function addQuestion (question) {
    return {
      type: ADD_QUESTION,
      question,
    }
  }
  
  function addAnswer({ questionId, authedUser, answer }) {

    console.log('on add anwer')
    return {
      type: ADD_ANSWER,
      questionId,
      authedUser,
      answer,
    };
  }

  export function handleAddAnswer(info){
    return (dispatch, getState) => {
      
      // console.log('info: ', info)
      const {authedUser} = getState()
      dispatch(addAnswer({questionId: info.questionId, authedUser, answer: info.answer}))
      

      return(saveQuestionAnswer({
        authedUser,
        qid: info.questionId,
        answer: info.answer,
      })).catch((e) => {
        console.warn('Error in handleToggleTweet: ', e)
        // dispatch(toggleTweet(info))
        alert('The was an error liking the tweet. Try again.')
      })

    }
  }

export function handleAddQuestion (optionOneText, optionTwoText){
  return (dispatch, getState) => {
    
    const {authedUser} = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
    
    .then((question) => dispatch(addQuestion(question)))

    .then(() => dispatch(hideLoading()))

  }

}
export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}