import React, {Component} from 'react'
import {connect} from 'react-redux'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Pool.css';

class Pool extends Component {
    render(){

        const { authedUser, question, userQuestion } = this.props
        // console.log(this.props)
        // console.log('props authedUser: ', authedUser);
        // console.log('props question: ', question);

        return (
            <Box className ='box' >
                <div className='pool-author'>
                    {userQuestion.name} asks:
                </div>

                <div className='box'>
                    <div className = 'profile-box'>
                    <div  className='profile-picture' > 
                        <img  src={userQuestion.avatarURL} alt="user-profile" />
                    </div>
                    </div>
                    <div className='pool-box'> 
                        <h3>Would you rather</h3>
                        ...{question.optionOne.text}...
                        <Button variant='outlined'>View Poll</Button>
                    </div>
                </div>
            </Box>
    
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}){
    const question = questions[id]
    const userQuestion = users[question.author]

    return{
        authedUser,
        question: question,
        userQuestion : userQuestion
    }
}

export default connect(mapStateToProps)(Pool)