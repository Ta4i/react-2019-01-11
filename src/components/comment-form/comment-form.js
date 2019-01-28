import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../ac'

class CommentForm extends Component {
  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <div>
        <b>Username:</b>
        <br/>
        <input value={this.state.user} onChange={this.handleUserChange}/>
        <br/>
        <b>Text:</b>
        <br/>
        <textarea name="comment" cols="40" rows="3" value={this.state.text} onChange={this.handleTextChange}></textarea>
        <br/>
        <input type="submit" value="Submit" onClick={this.handleSubmitClick}/>
      </div>
    )
  }

  handleUserChange = (event) => {
    event.preventDefault()

    this.setState({
      user: event.target.value
    })
  }

  handleTextChange = (event) => {
    event.preventDefault()

    this.setState({
      text: event.target.value
    })
  }

  handleSubmitClick = () => {

    const { user, text } = this.state
    const { articleId } = this.props

    this.props.dispatchAddComment({
      user,
      text,
      articleId
    })

    this.setState({
      user: '',
      text: ''
    })
  }
}

export default connect(
  null,
  (dispatch) => ({
    dispatchAddComment: (comment) => dispatch(addComment(comment))
  })
)(CommentForm)
