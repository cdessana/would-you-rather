import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Home from './Home'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        {this.props.loading === true
        ? null
        : <Home />}
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}){
  
  
  // const questionIds = Object.keys(questions)
  const user = users[authedUser]
  console.log('app authedUser: ', authedUser)
  console.log('app user: ', user)
  var t = Object.keys(user.answers)
  console.log('tfdsgsag: ', t)


  return {
    loading: authedUser === null
  }
}

function test({questionIds, authedUser}){

  console.log('test: ', authedUser)
  // console.log(Object.keys(authedUser.answers))
  
  // var filtered = questionIds.filter(
  //     function(e) {
  //       return this.indexOf(e) < 0;
  //     },
  //     authedUser.questions
  // );
  // console.log(filtered);
}

export default connect(mapStateToProps)(App)