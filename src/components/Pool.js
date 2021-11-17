import React, {Component} from 'react'
import {connect} from 'react-redux'


class Pool extends Component {
    render(){
        // console.log(this.props)
        const { authedUser, question } = this.props
        console.log('props authedUser: ', authedUser);
        console.log('props question: ', question);

        return (
            <div className='pool'>
                {question.id}
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}){
    const question = questions[id]

    return{
        authedUser,
        question: question
    }
}

export default connect(mapStateToProps)(Pool)