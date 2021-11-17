import React, {Component} from 'react'
import {connect} from 'react-redux'


class Pool extends Component {
    render(){
        // console.log(this.props)
        return (
            <div className='pool'>

            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}){
    const question = questions[id]

    return{
        authedUser,
        question
    }
}

export default connect(mapStateToProps)(Pool)