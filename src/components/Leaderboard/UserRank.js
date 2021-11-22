import { Component } from 'react';
import Box from '@mui/material/Box';
import './UserRank.css';

class UserRank extends Component {
    

    constructor(props) {
        super(props);
    
        console.log('props constructor: ', this.props)
    }


    render(){

        return(

            <Box className='rank-box'>

            <div className="pool-top">
                {this.props.userName}
            </div>

            <div className="pool-box-content">

                <div className='profile-box'>
                    <div className='profile-picture'> 
                        <img src={this.props.userAavatar} alt="user-profile" />
                    </div>
                </div>

                <div className="pool-options">             

                    <div className='poll-title'>
                        Score: {this.props.points}
                    </div>

                    <div className='question-name'>
                        Answered Questions: {this.props.answers}
                    </div>

                    <div className='question-name'>
                        Created Questions: {this.props.questions}
                    </div>


                </div>

            </div>

            </Box>
        // <ul>
        //     <li>
        //         <img className ='nav-pic' src={this.props.userAavatar} alt="user-profile" />
        //         User: {this.props.userName}
        //     </li>
        //     <li>

        //         Score: {this.props.points}
        //     </li>
        //     <li>

        //         Answered Questions: {this.props.answers}
        //     </li>
        //     <li>

        //         Created Questions: {this.props.questions}
        //     </li>
            
            
            
        // </ul>
       
        )
    }
}

export default UserRank