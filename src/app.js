import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ArticleList from './components/article-list'
import Filters from './components/filters'
import UserForm from './components/user-form'

class App extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
        comments: PropTypes.array
      }).isRequired
    )
  }
  render() {
    const { articles } = this.props
    return (
      <div>
        <UserForm />
        <Filters articles={articles} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App
