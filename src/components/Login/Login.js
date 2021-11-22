import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { handleSetAuthedUser } from '../../actions/authedUser';
import './Login.css'

class Login extends Component {
   

    state = {
        authorizedUser: this.authedUser ? this.authedUser : "",
    }

    handleChange = (e) => {
        e.preventDefault()
        const authorizedUser = e.target.value
        this.setState(() => ({
            authorizedUser
        }))
    };

    handleSubmit = (e) => {

        e.preventDefault()

        const {authorizedUser} = this.state
        const { dispatch, history, location } = this.props;

        dispatch(handleSetAuthedUser(authorizedUser))
        const to = location.state ? location.state.from : '/home';
        history.push(to);
    }
    
    
    render() {

        const {authorizedUser} = this.state
        const {users} = this.props
        
        return(
        
            <div className="question-card">

                <header className="question-card-title">
                    <h3>Welcome to would you rather app!</h3>
                </header>
                <div>
                    <FormControl className='select-login' required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="user-dropdown">User</InputLabel>
                        <Select
                        
                        labelId="user-dropdown"
                        id="user-dropdown-select-required"
                        value={authorizedUser}
                        label="Select a user *"
                        onChange={this.handleChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {Object.keys(users).map((k) => <MenuItem value={users[k].id} key={k} >
                                {users[k].name}</MenuItem>)}
            
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                </div>

                <div className='select-login'> 
                    <Button className='login-button' onClick={this.handleSubmit} variant='outlined'>Sign in</Button>
                </div>
        
            </div>
        )
    }

}

function mapStateToProps({ users, authedUser }) {

    console.log('authedUser: ', authedUser)
    return {
      users,
      authedUser,
    };
  }
  
  export default connect(mapStateToProps)(Login);