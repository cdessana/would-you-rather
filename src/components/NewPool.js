import React, {Component} from 'react'


class NewPool extends Component {
    
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleChangeOne = (e) => {
        const optionOne = e.target.value
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

    }


    render(){

        const { optionOne, optionTwo } = this.state

        return (
            <div>
            <h3 className='center'>Compose new Pool</h3>
            <form className='new-tweet' onSubmit={this.handleSubmit}>
                <textarea
                    placeholder="Option one"
                    value={optionOne}
                    onChange={this.handleChangeOne}
                    className='textarea'
                    maxLength={280}
                />
                <textarea
                    placeholder="Option two"
                    value={optionTwo}
                    onChange={this.handleChangeTwo}
                    className='textarea'
                    maxLength={280}
                />
              <button
                className='btn'
                type='submit'
                disabled={optionTwo === '' || optionTwo === ''}>
                  Submit
              </button>
            </form>
          </div>
        )
    }
}

export default NewPool