import { Component } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './PoolResult.css'

class PollResult extends Component {
    render() {
    
    const {id, authedUser, question, userVote} = this.props
    const totalVotes = question.optionOneVotes + question.optionTwoVotes
    const optionOnePercentual = parseFloat(((question.optionOneVotes / totalVotes)*100).toFixed(2))
    const optionTwoPercentual = parseFloat(((question.optionTwoVotes / totalVotes)*100).toFixed(2))

      
    return (
    
              <Box className='pool-box'>
                  
                  <div className="pool-top">
                      Asked by {question.authorName}
                  </div>
          
                  <div className="pool-box-content">
                      
                      <div className='profile-box'>
                          <div className='profile-picture'> 
                              <img src={question.authorAvatar} alt="user-profile" />
                          </div>
                      </div>
          
                      <div className='pool-options'>   
                        <div className='poll-title'>
                            Results
                        </div>

                          <div className='poll-form'>
                            <div className='pool-result'>
                                <div className='question-name'>Would you rather {question.optionOneText}?</div>

                                {
                                    userVote === 'optionOne'
                                    ? <div className='your-vote'>Your vote!</div>
                                    : null
                                }
                                
                                <LinearProgress className='result-percentage' variant="determinate" value={optionOnePercentual} />
            
                                <p className='result-detail'>{optionOnePercentual}% {question.optionOneVotes} out of {totalVotes} votes</p>
                            </div>

                            <div className='pool-result'>
                                <div className='question-name'>Would you rather {question.optionTwoText}?</div>
                            
                                    {
                                        userVote === 'optionTwo'
                                        ? <div className='your-vote'>Your vote!</div>
                                        : null
                                    }
                                    <LinearProgress className='result-percentage' variant="determinate" value={optionTwoPercentual} />
                            
                                <p className='result-detail'>{optionTwoPercentual}% {question.optionTwoVotes} out of {totalVotes} votes</p>
                                
                            </div>
                          </div>
                      </div>
                  </div>
              </Box>
      )
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {

    const optionOne = 'optionOne'
    const optionTwo = 'optionTwo'

    const id = props.id

    const question = questions[id]
    const questionAuthor = users[question.author]
    const questionAuthorName = questionAuthor.name
    const questionAuthorAvatar = questionAuthor.avatarURL

    const optionOneVotes = question[optionOne].votes.length
    const optionTwoVotes = question[optionTwo].votes.length

    const optionOneText = question[optionOne].text
    const optionTwoText = question[optionTwo].text

    const user = users[authedUser]
    const userVote = user.answers[id]

    return {
        id,
        authedUser,
        question:{
            authorName: questionAuthorName,
            authorAvatar: questionAuthorAvatar,
            optionOneVotes,
            optionTwoVotes,
            optionOneText,
            optionTwoText,
        },
        userVote,
    }
  }


export default connect(mapStateToProps)(PollResult);