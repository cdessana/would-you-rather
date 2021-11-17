import React, {Component} from "react";
import {connect} from 'react-redux'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel'

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
                    <h3>Unanswered Questions</h3>
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={1}>
                <h3>Answered Questions</h3>
                </TabPanel>
                </Box>



                {/* <ul>
                    {this.props.questionIds.map((id) => (
                        <li
                            key = {id}>
                            <div>Question id: {id}</div>
                        </li>

                        
                    ))}
                </ul> */}
            </div>
        )
    }
}



function mapStateToProps({questions}){
    return {
        questionIds: Object.keys(questions)
    }
}

export default connect(mapStateToProps)(Home)