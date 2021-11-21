import { Component } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

class PollResult extends Component {
    render() {
    
    const {id, authedUser, question, userVote} = this.props
    const totalVotes = question.optionOneVotes + question.optionTwoVotes
    const optionOnePercentual = ((question.optionOneVotes / totalVotes)*100).toFixed(2)
    const optionTwoPercentual = ((question.optionTwoVotes / totalVotes)*100).toFixed(2)

      
    return (
          <div>
              <Box className='box'>
                  
                  <div className="pool-sneak-js-top">
                      Asked by {question.authorName}
                  </div>
          
                  <div className="pool-sneak-js-bottom">
                      
                      <div className='profile-box'>
                          <div className='profile-picture'> 
                              <img src={question.authorAvatar} alt="user-profile" />
                          </div>
                      </div>
          
                      <div className="pool-sneak-js-box">   
                          <h3>Results</h3>
                          <div className='pool-result'>
                            <h4>Would you rather {question.optionOneText}?</h4>
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress variant="determinate" value={optionOnePercentual} />
                            </Box>
                            <p>{question.optionOneVotes} out of {totalVotes} votes</p>
                          </div>

                          <div className='pool-result'>
                            <h4>Would you rather {question.optionTwoText}?</h4>
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress variant="determinate" value={optionTwoPercentual} />
                            </Box>
                            <p>{question.optionTwoVotes} out of {totalVotes} votes</p>
                            
                          </div>
                      </div>
                  </div>
              </Box>
          </div>
      )
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {

    const optionOne = 'optionOne'
    const optionTwo = 'optionTwo'

    console.log('POOL RESULT - mapStateToProps')
    const id = props.id
    // console.log('id: ', props.id)

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