
import { RECEIVE_AUTHED_USER, SET_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action){
    switch (action.type) {
        case SET_AUTHED_USER:
            
            console.log(' SET_AUTHED_USER', action.authedUser)
            return action.authedUser
            
        default:
            console.log(action.type)
            console.log(state)
            return state
    }
}