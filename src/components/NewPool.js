import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './NewPool.css';


class NewPool extends Component {
    
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleChangeOne = (e) => {
        const optionOne = e.target.value
        console.log(optionOne)
        this.setState(() => ({
            optionOne
        }))
    }

    handleChangeTwo = (e) => {
        const optionTwo = e.target.value
        this.setState(() => ({
            optionTwo
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {optionOne, optionTwo} = this.state
        // todo: Add pool to the Store


        console.log('New pool: ', optionOne, optionTwo )

        const {dispatch} = this.props
        dispatch(handleAddQuestion(optionOne, optionTwo))

    }


    render(){

        const { optionOne, optionTwo } = this.state

        return (

            
            <div className="question-card">


                <header className="question-card-title">
                <h3>Create new question</h3>
                </header>

                <div className="question-card-content">

                    
                    <h4> Complete the question </h4>
                    <h2> Would you rather...</h2>

                  
                        <TextField
                        className='question-input'
                        required
                        id="option-one"
                        label="Option one"
                        value = {optionOne}
                        onChange={this.handleChangeOne}
                        />
                  
             

                    <h3>Or </h3>

             
                    <TextField
                    className='question-input'
                    required
                    id="option-two"
                    label="Option two"
                    value = {optionTwo}
                    onChange={this.handleChangeTwo}
                    />  
                
        
                </div>

                <footer className='question-card-footer'>
                <Button onClick={this.handleSubmit} className='inferno' variant="outlined" disabled={optionTwo === '' || optionTwo === ''}>Submit</Button>
                </footer>
            
            
          </div>
        )
    }
}

export default connect()(NewPool)