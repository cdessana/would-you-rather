import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import {handleInitialData} from '../actions/shared'
import  LoadingBar  from 'react-redux-loading'
import Login from './Login/Login'
import Home from './Home'
import PoolPage from './Pool/PoolPage'
import NewPool from './Pool/NewPool'
import Nav from './nav/Nav'
import Leaderboard from './Leaderboard/Leaderboard';
import PageNotFound from './PageNotFound';
import ProtectedRoute from '../utils/RouteGuard';

class App extends Component {

  
  constructor(props) {

    super(props);
  }

  getIsLoggedIn = () => {

    const {authedUser} = this.props.authedUser
    const loggedIn = authedUser!= null || undefined  ? true : false
    return loggedIn

  }

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  requireLogin = (to, from, next) => {

    if (to.meta.auth) {
      console.log('inside')
      if (this.props.isAuthorized) {
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
            ? <div>LOADING</div>
            : <div>
              <Nav />
                <Switch>  
                <Route path="/" exact component={Login}  />
                <Route path="/login" exact component={Login}  />
                  <ProtectedRoute path="/home" exact component={Home}  isAuthorized={this.props.isAuthorized} />
                  <ProtectedRoute path="/page-not-found" component={PageNotFound} isAuthorized={this.props.isAuthorized}  />
                  <ProtectedRoute path="/pool/:id" exact component={PoolPage} isAuthorized={this.props.isAuthorized} />  
                  <ProtectedRoute path='/new' exact component={NewPool}  isAuthorized={this.props.isAuthorized} />
                  <ProtectedRoute path="/leaderboard" exact component={Leaderboard}  isAuthorized={this.props.isAuthorized} />
                </Switch>
              </div>}
        </div>
      </Fragment>
      
    )
  }
}

function mapStateToProps({authedUser, users, questions}){
  
  return {
    loading: Object.keys(users).length === 0 ? true : false,
    authedUser,
    isAuthorized: authedUser !== null ? true : false,
    users,
    questions
  }
}


export default connect(mapStateToProps)(App)