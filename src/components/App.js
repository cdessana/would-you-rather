import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import {handleInitialData} from '../actions/shared'
import LoadingBar  from 'react-redux-loading'
import { Redirect } from 'react-router';
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


  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {

            
    // if (this.props.isAuthorized === true) {
    //   return <Redirect to={`/home`}/>;
    // }

    return (
      <Fragment>
        <LoadingBar />
        <div className='container'>
          {this.props.loading === true
            ? <div>LOADING</div>
            : <div>
              <Nav />
                <Switch>  
                  <Route path="/" exact component={Login}   />
                  <Route path="/login" exact component={Login}  />
                  <ProtectedRoute path="/home" exact component={Home}  isAuthorized={this.props.isAuthorized} />
                  <ProtectedRoute path="/questions/:id" exact component={PoolPage} isAuthorized={this.props.isAuthorized} />  
                  <ProtectedRoute path='/add' component={NewPool}  isAuthorized={this.props.isAuthorized} />
                  <ProtectedRoute path="/leaderboard" exact component={Leaderboard}  isAuthorized={this.props.isAuthorized} />
                  <Route render={(props) => {
                    return <PageNotFound {...props} isAuthorized={this.props.isAuthorized} />;
                  }}/>
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