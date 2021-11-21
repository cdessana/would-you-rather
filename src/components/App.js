import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from "react-router-dom";
import {handleInitialData} from '../actions/shared'
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import  LoadingBar  from 'react-redux-loading'
import Login from './Login/Login'
import Home from './Home'
import PoolPage from './Pool/PoolPage'
import NewPool from './Pool/NewPool'
import Nav from './nav/Nav'
import Leaderboard from './Leaderboard/Leaderboard';

class App extends Component {

  
  constructor(props) {

    console.group('APP - PROPS')
    super(props);

    console.log('props constructor: ', this.props)

    console.groupEnd()
}

  getIsLoggedIn = () => {

    console.log('on getIsLoggedIn')
    const {authedUser} = this.props.authedUser
    console.log(authedUser)
    const loggedIn = authedUser!= null || undefined  ? true : false
    console.log('on guard checking: ', loggedIn)
    return loggedIn

  }

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  requireLogin = (to, from, next) => {

    // console.log(next)
    // console.log(from)
    // console.log(to)
    
    if (to.meta.auth) {
      console.log('inside')
      if (this.props.isAuthorized) {
        console.log('authorized?')
        next()
      }
      next.redirect('/login');
    } else {
      next()
    }
  };

  render() {


    return (
      <Fragment>
        <LoadingBar />
        <div className='container'>
          {this.props.loading === true
            ? null
            : <div>
              
              <Nav />

              <GuardProvider guards={[this.requireLogin]} loading={this.props.loading}>
                <Switch>  
                <GuardedRoute path="/" exact component={Home} />
                <GuardedRoute path="/home" exact component={Home} />
                  <GuardedRoute path="/login" component={Login}  />
                  <GuardedRoute path="/pool/:id" exact component={PoolPage}  />  
                  <GuardedRoute path='/new' exact component={NewPool}  />
                  <GuardedRoute path="/leaderboard" exact component={Leaderboard} />
                </Switch>
              </GuardProvider>
              </div>}
        </div>
      </Fragment>
      
    )
  }
}

function mapStateToProps({authedUser, users, questions}){
  

  console.log('mapStateToProps: ', authedUser)
  const isAuthorized = authedUser !== null ? true : false
  console.log(isAuthorized)

  console.log('users:', users)

  return {
    loading: Object.keys(users).length === 0 ? true : false,
    authedUser,
    isAuthorized: isAuthorized,
    users,
    questions
  }
}


export default connect(mapStateToProps)(App)