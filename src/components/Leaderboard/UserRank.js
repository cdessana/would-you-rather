import { Component } from 'react';
import { connect } from 'react-redux';
import './Leaderboard.css';

class UserRank extends Component {
    

    constructor(props) {
        super(props);
    
        console.log('props constructor: ', this.props)
    }


    render(){

        return(
        <ul>
            <li>
                <img className ='nav-pic' src={this.props.userAavatar} alt="user-profile" />
                User: {this.props.userName}
            </li>
            <li>

                Score: {this.props.points}
            </li>
            <li>

                Answered Questions: {this.props.answers}
            </li>
            <li>

                Created Questions: {this.props.questions}
            </li>
            
            
            
        </ul>
       
        )
    }
}

export default UserRank