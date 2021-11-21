import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {Route} from "react-router-dom";
import {handleInitialData} from '../actions/shared'
import  LoadingBar  from 'react-redux-loading'
import Home from './Home'
import PoolPage from './Pool/PoolPage'
import NewPool from './Pool/NewPool'
import Nav from './Nav'
import Pool from './Pool/Pool'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className='container'>
          <Nav />
          {this.props.loading === true
            ? null
            : <div>
                <Route path='/' exact component={Home} />
                <Route path='/pool/:id' component={PoolPage } />
                <Route path='/new' component={NewPool} />
              </div>}
        </div>
      </Fragment>
      
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