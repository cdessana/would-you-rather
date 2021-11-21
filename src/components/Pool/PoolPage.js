import React, {Component} from 'react'
import {connect} from 'react-redux'
import Pool from './Pool';
import PoolResult from './PoolResult';

class PoolPage extends Component {

    

    render() {

        const {hasAnswered} = this.props

        console.log('props: ', this.props)
        const {id} = this.props
        console.log(id)
        
        return(

            <div>
            {hasAnswered
            ? <PoolResult id ={id}/>
            : <Pool id ={id}/>}
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, props){

    const {id} = props.match.params
    const user = users[authedUser]
    var userAnswered = Object.keys(users[authedUser].answers);
    var hasAnswered = userAnswered.includes(id)
    console.log('mapStateToProps - hasAnswered', hasAnswered)

    
    const question = questions[id]
    const questionAuthor = users[question.author]
    const questionAuthorName = questionAuthor.name
    const questionAuthorAvatar = questionAuthor.avatarURL
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text

    return {
        id,
        authedUser,
        hasAnswered,
        // question : {
        //     questionAuthorName,
        //     questionAuthorAvatar,
        //     optionOne,
        //     optionTwo
        // }
    }

}

export default connect(mapStateToProps)(PoolPage)