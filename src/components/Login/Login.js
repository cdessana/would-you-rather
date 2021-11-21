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
        const {dispatch} = this.props

        dispatch(handleSetAuthedUser(authorizedUser))

    }
    
    
    render() {

        const {authorizedUser} = this.state
        const {users} = this.props
        
        return(
        
            <div>
                <div>
                    <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="user-dropdown">User</InputLabel>
                        <Select
                        labelId="user-dropdown"
                        id="user-dropdown-select-required"
                        value={authorizedUser}
                        label="Select one *"
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

                <div>
                    <Button onClick={this.handleSubmit} variant='outlined'>Sign in</Button>
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