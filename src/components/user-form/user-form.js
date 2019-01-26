import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../ac'
import './user-form.css'

class UserForm extends Component {
  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <div className="container">
        <label>Article to add comment to:</label>
        <select>{this.articleOptions}</select>
        <label>Username:</label>
        <input value={this.state.user} onChange={this.handleUserChange} />
        <label>Comment text:</label>
        <textarea value={this.state.text} onChange={this.handleTextChange} />
        <div className="button">
          <button onClick={this.handleCreateComment}>Add comment</button>
        </div>
      </div>
    )
  }

  get articleOptions() {
    const { articles } = this.props
    return articles.map((article) => (
      <option key={article.id} value={article.id}>
        {article.title}
      </option>
    ))
  }

  handleUserChange = (event) => {
    this.setState({
      user: event.target.value
    })
  }

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleCreateComment = () => {
    const comment = { user: this.state.user, text: this.state.text }
    this.props.dispatchCreateComment(comment)
  }
}

export default connect(
  (store) => ({
    articles: store.articles
  }),
  (dispatch) => ({
    dispatchCreateComment: (comment) => dispatch(createComment(comment))
  })
)(UserForm)
