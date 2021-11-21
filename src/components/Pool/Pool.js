import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAddAnswer} from '../../actions/questions'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './Pool.css';


class Pool extends Component{
      
    state = {
        selected: 'optionOne',
    }
       
    handleChange = (e) => {
        e.preventDefault()
        const selected = e.target.value
        this.setState(() => ({
            selected
        }))
    }

    handleSubmit = (e) => {
        
        e.preventDefault()
        const {selected} = this.state

        const {dispatch, id} = this.props

        // console.log('qId', id)
        dispatch(handleAddAnswer({questionId: id, answer: selected}))       
    }
    
    render(){

        // console.log(this.props)
        // console.log('state: ', this.state)
        const {question} = this.props
        const {selected} = this.state

        return(

            <Box className='pool-box'>
                    
            <div className="pool-top">
                {question.questionAuthorName} asks:
            </div>

            <div className="pool-box-content">
                
                <div className='profile-box'>
                    <div className='profile-picture'> 
                        <img src={question.questionAuthorAvatar} alt="user-profile" />
                    </div>
                </div>

                <div className="pool-options"> 
                   
                   <div className='poll-title'>
                        Would you rather...
                   </div>

                   <div className='poll-form'>
                        <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="pool"
                            onChange={this.handleChange} 
                            value={selected}
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value='optionOne' control={<Radio />} label={question.optionOne} />
                            <FormControlLabel value='optionTwo' control={<Radio />} label={question.optionTwo} />
                        </RadioGroup>
                        </FormControl>

                    </div>

                    <div className='pool-submit'>

                        <Button onClick={this.handleSubmit} variant='outlined'>Submit</Button>
                    </div>
                </div>
            </div>
        </Box>
    )}
}

function mapStateToProps({authedUser, users, questions}, {id}){

    const question = questions[id]
    // console.log(question)
    const questionAuthor = users[question.author]
    const questionAuthorName = questionAuthor.name
    const questionAuthorAvatar = questionAuthor.avatarURL
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text

    return {
        id,
        authedUser,
        question : {
            questionAuthorName,
            questionAuthorAvatar,
            optionOne,
            optionTwo
        }
    }
}

export default connect(mapStateToProps)(Pool)