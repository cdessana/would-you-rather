import React, {Component} from "react";
import {connect} from 'react-redux'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel'
import PoolSneak from "./Pool/PoolSneak";

class Home extends Component {

    state = {
        tabValue : 0
    };
    
    render()
    {
        const handleChange = (event, newValue) => {
            this.setState(() => ({
                tabValue: newValue
            }))
        };

        return (
            <div>
                <h3>The questions</h3>

                <Box sx={{ width: '50%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                    value={this.state.tabValue}
                    onChange={handleChange}
                    >
                    <Tab label="Unanswered Questions" />
                    <Tab label="Answered Questions" />
                    </Tabs>
                </Box>
                <TabPanel value={this.state.tabValue} index={0}>
                  {this.props.unansweredQuestions.map((id) => (
                    <PoolSneak  key={id} id={id}/>
                ))}
                
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={1}>
                {this.props.answeredQuestions.map((id) => (
                    <PoolSneak  key={id} id={id}/>
                ))}
                </TabPanel>
                </Box>

            </div>
        )
    }
}



function mapStateToProps({questions, authedUser, users}){


    console.group('-------on home mapStateToProps-----')

    const questionIds = Object.keys(questions)

    console.log('authedUser: ', authedUser)
    console.log('user: ', users[authedUser])

    var userAnswered = Object.keys(users[authedUser].answers);
    console.log('userAnswered :',  userAnswered);

    var userUnanswered = questionIds.filter(
        function(e) {
          return this.indexOf(e) < 0;
        },
        userAnswered
    );
    // console.log(userUnanswered);

    // test(questionIds, authedUser)

    console.groupEnd()

    return {
        questionIds: questionIds,
        answeredQuestions: userAnswered,
        unansweredQuestions: userUnanswered
        // unasweredQuestions: ,
    }
}


export default connect(mapStateToProps)(Home)