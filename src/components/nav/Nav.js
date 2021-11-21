import React from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleSetAuthedUser } from '../../actions/authedUser';
import './Nav.css'

function Nav (props) {

  const {user, dispatch} = props

  const handleLogout = () => {
    dispatch(handleSetAuthedUser(null))
  }
  
  return user ? (
    
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/home' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Pool
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li>
            Hello, {user.name} 
            <img className ='nav-pic' src={user.avatarURL} alt="user-profile" />
        </li>
        <li>
            <p onClick={handleLogout}>Logout</p> 
        </li>   
      </ul>
    </nav>
  ) : null
}

function mapStateToProps({ authedUser, users },) {

  const user = authedUser? users[authedUser] : null
  return {
    user
  }
}

export default connect(mapStateToProps)(Nav);