import React, {Component} from 'react'
import {connect} from 'react-redux'
import Pool from './Pool';
import PoolResult from './PoolResult';


class PoolPage extends Component {

    render() {

        const {hasAnswered} = this.props
        const {id} = this.props
        
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
    var userAnswered = Object.keys(users[authedUser].answers);
    var hasAnswered = userAnswered.includes(id)
    console.log('mapStateToProps - hasAnswered', hasAnswered)

    return {
        id,
        authedUser,
        hasAnswered,
    }

}

export default connect(mapStateToProps)(PoolPage)