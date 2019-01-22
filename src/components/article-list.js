import PropTypes from 'prop-types'
import React, { Component } from 'react'
import accordion from '../decorators/accordion'
import Article from './article'

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
        comments: PropTypes.array
      })
    ),
    openItemId: PropTypes.string,
    toggleOpenArticle: PropTypes.func.isRequired,
    fetchData: PropTypes.func
  }

  render() {
    return <ul>{this.articles}</ul>
  }

  componentDidMount() {
    this.props.fetchData && this.props.fetchData()
  }

  get articles() {
    const { openItemId, toggleOpenArticle, articles } = this.props

    return articles.map((article) => (
      <li key={article.id} className="test--art__container">
        <Article
          article={article}
          isOpen={article.id === openItemId}
          toggleArticle={toggleOpenArticle}
        />
      </li>
    ))
  }
}

export default accordion(ArticleList)
