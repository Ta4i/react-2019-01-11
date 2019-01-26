import React, { Component } from 'react'
import { connect } from 'react-redux'
import './user-form.css'

class UserForm extends Component {
  state = {
    user: ''
  }

  render() {
    return (
      <div className="container">
        <label>Article to add comment to:</label>
        <select>{this.articleOptions}</select>
        <label>Username:</label>
        <input value={this.state.user} onChange={this.handleChange} />
        <label>Comment body:</label>
        <textarea />
        <div className="button">
          <button>Add comment</button>
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

  handleChange = (event) => {
    event.preventDefault()

    if (event.target.value.length > 10) {
      return this.setState({
        user: ''
      })
    }

    this.setState({
      user: event.target.value
    })
  }
}

export default connect((store) => ({
  articles: store.articles
}))(UserForm)
