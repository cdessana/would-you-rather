import { Component } from 'react';
import { connect } from 'react-redux';
import './Leaderboard.css';
import UserRank from "./UserRank";

class Leaderboard extends Component {

    render() {
     const {users} = this.props

    var userPoints = []

     for (const key in users) {
         const userName = users[key].name
         const userAavatar = users[key].avatarURL
         const questions = Object.keys(users[key].questions).length
         const answers =  Object.keys(users[key].answers).length
         const points = questions + answers
         userPoints.push({id: key, points: points, answers: answers, questions: questions, userName: userName, userAavatar: userAavatar})
    }

    userPoints.sort(function (a, b) {
        if (a.points > b.points) {
          return -1;
        }
        if (a.points < b.points) {
          return 1;
        }
        return 0;
      });

      return (
          <div>
              {userPoints.map((o) => (
                    <UserRank  key={o.id} id={o.id} answers={o.answers} questions ={o.questions} points = {o.points} userName ={o.userName} userAavatar ={o.userAavatar}/>
                ))}
          </div>
      )
    
    }
}

function mapStateToProps({ users }) {
    return {
      users,
    };
  }
  
  export default connect(mapStateToProps)(Leaderboard);