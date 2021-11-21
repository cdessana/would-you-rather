import React from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav (props) {


  const {user} = props
  console.log('NAV: ', props)
  // console.log(authedUser)
  
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

// function mapStateToProps ({authedUser, users, tweets}, { id }) {


export default connect(mapStateToProps)(Nav);