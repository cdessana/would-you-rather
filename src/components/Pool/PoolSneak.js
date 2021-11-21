import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './PoolSneak.css';

class PoolSneak extends Component {
  render() {
    
    const {authedUser, question, userQuestion} = this.props; 
    // console.log(this.props)
    // console.log('props authedUser: ', authedUser);
    // console.log('props question: ', question);

    return (
    
      <Box className='box'>
                  
        <div className="pool-sneak-js-top">
            {userQuestion.name} asks:
        </div>

        <div className="pool-sneak-js-bottom">
            
            <div className='profile-box'>
                <div className='profile-picture'> 
                    <img src={userQuestion.avatarURL} alt="user-profile" />
                </div>
            </div>

            <div className="pool-sneak-js-box">   
                <h3>Would you rather</h3>
                ...{question.optionOne.text}...
                <Link className='poll-preview-link' to={`/pool/${question.id}`}>
                  <Button variant='outlined'>View Poll</Button>
                </Link>
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