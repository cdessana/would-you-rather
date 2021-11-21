import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {useHistory, Switch} from "react-router-dom";
import {handleInitialData} from '../actions/shared'
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import  LoadingBar  from 'react-redux-loading'
import Login from './Login/Login'
import Home from './Home'
import PoolPage from './Pool/PoolPage'
import NewPool from './Pool/NewPool'
import Nav from './nav/Nav'
import Leaderboard from './Leaderboard/Leaderboard';
import PageNotFound from './PageNotFound';

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

    // let history = useHistory();
    if (to.meta.auth) {
      console.log('inside')
      if (this.props.isAuthorized) {
        next()
      }

      //push history
      console.log(to)
      // history.push()
      
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
              <GuardProvider guards={[this.requireLogin]} loading={this.props.loading} error={PageNotFound}>
                <Switch>  
                <GuardedRoute path="/" exact component={Home}  meta={{ auth: true }}/>
                <GuardedRoute path="/home" exact component={Home} meta={{ auth: true }} />
                  <GuardedRoute path="/login" component={Login}  />
                  <GuardedRoute path="/page-not-found" component={PageNotFound}  />
                  {/* <GuardedRoute path="*" component={PageNotFound} /> */}
                  <GuardedRoute path="/pool/:id" exact component={PoolPage} meta={{ auth: true }} />  
                  <GuardedRoute path='/new' exact component={NewPool} meta={{ auth: true }}  />
                  <GuardedRoute path="/leaderboard" exact component={Leaderboard}  meta={{ auth: true }} />
                </Switch>
              </GuardProvider>
              </div>}
        </div>
      </Fragment>
      
    )
  }
}

function mapStateToProps({authedUser, users, questions}){
  

  // console.log('mapStateToProps: ', authedUser)
  // const isAuthorized = authedUser !== null ? true : false
  // console.log(isAuthorized)

  // console.log('users:', users)

  return {
    loading: Object.keys(users).length === 0 ? true : false,
    authedUser,
    isAuthorized: authedUser !== null ? true : false,
    users,
    questions
  }
}


export default connect(mapStateToProps)(App)