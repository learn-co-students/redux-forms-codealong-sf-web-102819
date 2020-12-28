import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ''
  }


  handleOnChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value

    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    // console.log(this.state.text)
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <label>Add Todo: </label>
            <input 
              type="text" 
              name='text'
              text={this.state.text}
              onChange={this.handleOnChange}
            />
          </p>
          <input type="submit" />
        </form>

        {this.state.text}
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}

export default connect(null, mapDispatchToProps) (CreateTodo);
