import React, {Component} from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleSetAuthedUser } from '../../actions/authedUser';
import './Nav.css'

class Nav extends Component{

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(handleSetAuthedUser(null))
  }

  render(){

    const {user} = this.props

    return(

      <div>
      {user ? (
    
        <nav className='nav'>
          <ul>
            <li>
              <NavLink to='/home' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' activeClassName='active'>
                Add question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' activeClassName='active'>
                Leaderboard
              </NavLink>
            </li>
            <li className='spaced'>
                Hello, {user.name} 
            </li>
            <li>
              <img className ='nav-pic' src={user.avatarURL} alt="user-profile" />
            </li>
            <li onClick={this.handleLogout}>
              Logout
            </li>   
          </ul>
        </nav>
      ) : null}
      </div>
     
    )
  }
}

function mapStateToProps({ authedUser, users },) {

  const user = authedUser? users[authedUser] : null
  return {
    user
  }
}

export default connect(mapStateToProps)(Nav);