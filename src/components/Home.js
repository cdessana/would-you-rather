import React, {Component} from "react";
import {connect} from 'react-redux'

class Dashboard extends Component {
    render()
    {
        // console.log(this.props)
        return (
            <div>
                <h3>The questions</h3>
                <ul>
                    {this.props.questionIds.map((id) => (
                        <li
                            key = {id}>
                            <div>Question id: {id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions}){
    return {
        questionIds: Object.keys(questions)
    }
}

export default connect(mapStateToProps)(Dashboard)