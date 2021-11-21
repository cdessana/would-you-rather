import { Component } from 'react';
import { connect } from 'react-redux';

class PollResult extends Component {
    render() {
      return ()
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {




    
    // const { id } = props.match.params;
  
    // const question = findMatchingQuestionId(id, questions);
  
    // const author = findMatchingUserId(question.author, users);
  
    // const votesForFirst = question.optionOne.votes.length;
  
    // const votesForSecond = question.optionTwo.votes.length;
  
    // const votes = votesForFirst + votesForSecond;
  
    // const firstOptionVoters = new Set(question.optionOne.votes);
  
    // const answer = firstOptionVoters.has(user.id) ? 'optionOne' : 'optionTwo';
  
    // return {
    //   id,
    //   author,
    //   question,
    //   user,
    //   votesForFirst,
    //   votesForSecond,
    //   votes,
    //   answer,
    // };
  }


export default connect(mapStateToProps)(PollResult);