export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const RECEIVE_AUTHED_USER = 'RECEIVE_AUTHED_USER'

export function setAuthedUser (authedUser) {
  return {
    type: SET_AUTHED_USER,
    authedUser,
  }
}

export function receiveAuthedUser(){
  return {
    type: RECEIVE_AUTHED_USER
  }
}

export function handleSetAuthedUser(user) {

  return (dispatch) => {
    dispatch(setAuthedUser(user));
  };
}