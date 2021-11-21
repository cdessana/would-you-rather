import React, {Component} from 'react'
import {connect} from 'react-redux'
import Pool from './Pool';

class PoolPage extends Component {

    

    render() {
        console.log('props: ', this.props)
        const {id} = this.props
        console.log(id)
        
        return(
            <div>
                POOL PAGE
                <Pool id ={id}/>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, props){

    const {id} = props.match.params

    return {
        id,
        //answers: ?
    }

}

export default connect(mapStateToProps)(PoolPage)