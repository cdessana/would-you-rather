import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import  LoadingBar  from 'react-redux-loading'
import Home from './Home'
import PoolPage from './Pool/PoolPage'
import NewPool from './Pool/NewPool'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar/>
        {this.props.loading === true
        ? <div>
          NULL
        </div>
        // // : <NewPool/>}
        : <Home/>}
        {/* // : <PoolPage match={{params: {id: 'am8ehyc8byjqgar0jgpub9'}}} />} */}
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}){
  
    // console.log(authedUser);  

  return {
    loading: authedUser === null,
    authedUser,
    users,
    questions
  }
}


export default connect(mapStateToProps)(App)