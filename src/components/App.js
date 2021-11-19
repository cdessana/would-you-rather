import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Home from './Home'
import NewPool from './NewPool'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        {this.props.loading === true
        ? <div>
          NULL
        </div>
        : <Home />}
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}){
  
    console.log(authedUser);  

  return {
    loading: authedUser === null,
    authedUser,
    users,
    questions
  }
}


export default connect(mapStateToProps)(App)