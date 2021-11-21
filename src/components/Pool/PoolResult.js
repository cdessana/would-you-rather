import { Component } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';

class PollResult extends Component {
    render() {
    
    const {id, authedUser, question, userVote} = this.props
      
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
                          </div>

                          <div className='pool-result'>
                            <h4>Would you rather {question.optionTwoText}?</h4>
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
    console.log(question)
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