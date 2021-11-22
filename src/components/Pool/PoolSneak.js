import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './PoolSneak.css';

class PoolSneak extends Component {
  render() {
    
    const {authedUser, question, userQuestion} = this.props; 
    return (
    
      <Box className='pool-box'>
                  
        <div className="pool-top">
            {userQuestion.name} asks:
        </div>

        <div className="pool-box-content">
            
            <div className='profile-box'>
                <div className='profile-picture'> 
                    <img src={userQuestion.avatarURL} alt="user-profile" />
                </div>
            </div>

            <div className="pool-options">  
            <div className='poll-title'>
               Would you rather
            </div>
            
            <div className='question-name'>
                ...{question.optionOne.text}...

            </div>
                <div className='pool-submit'>
                <Link className='poll-preview-link' to={`/questions/${question.id}`}>
                  <Button variant='outlined'>View Poll</Button>
                </Link>
                </div>
            </div>
        </div>
    </Box>
  )}

}

function mapStateToProps({ authedUser,  users,  questions}, {  id}) {
  
  const question = questions[id];
  const userQuestion = users[question.author];
  return {
    authedUser,
    question: question,
    userQuestion: userQuestion
  };

}

export default connect(mapStateToProps)(PoolSneak);