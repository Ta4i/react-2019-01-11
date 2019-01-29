import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../ac'
import { allArticlesAsListSelector, articlesSelector } from '../../selectors'
import './user-form.css'

class UserForm extends Component {
  state = {
    user: '',
    text: '',
    articleId: ''
  }

  componentDidUpdate(prevProps) {
    if (prevProps.articles !== this.props.articles) {
      const { articles, articlesById } = this.props
      const { articleId } = this.state
      if (
        !articles ||
        !articles.length ||
        (articleId && !(articleId in articlesById))
      ) {
        this.setState({ articleId: '' })
      }
    }
  }

  render() {
    return (
      <div className="container">
        <label>Article to add comment to:</label>
        <select onChange={this.handleArticleChange}>
          <option value="">---Select article---</option>
          {this.articleOptions}
        </select>
        <label>Username:</label>
        <input value={this.state.user} onChange={this.handleUserChange} />
        <label>Comment text:</label>
        <textarea value={this.state.text} onChange={this.handleTextChange} />
        <div className="button">
          <button
            disabled={this.isButtonDisabled}
            onClick={this.handleCreateComment}
          >
            Add comment
          </button>
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

  get isButtonDisabled() {
    if (this.state.user && this.state.text && this.state.articleId) {
      return false
    } else {
      return true
    }
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

  handleArticleChange = (event) => {
    this.setState({
      articleId: event.target.value
    })
  }

  handleCreateComment = () => {
    if (this.state.user && this.state.text && this.state.articleId) {
      const comment = { user: this.state.user, text: this.state.text }
      this.props.dispatchCreateComment(comment, this.state.articleId)
    }
  }
}

export default connect(
  (store) => ({
    articles: allArticlesAsListSelector(store),
    articlesById: articlesSelector(store)
  }),
  (dispatch) => ({
    dispatchCreateComment: (comment, articleId) =>
      dispatch(createComment(comment, articleId))
  })
)(UserForm)
