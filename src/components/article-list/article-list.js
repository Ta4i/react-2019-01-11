import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import accordion from '../../decorators/accordion'
import Article, { TypeArticle } from '../article'

export const TypeArticles = PropTypes.arrayOf(TypeArticle)

class ArticleList extends Component {
  static propTypes = {
    articlesFromStore: TypeArticles
  }
  render() {
    return <ul>{this.articles}</ul>
  }

  componentDidMount() {
    this.props.fetchData && this.props.fetchData()
  }

  get articles() {
    const { openItemId, toggleOpenArticle, articlesFromStore } = this.props
    const { from, to } = this.props.dateRangeFromStore
    const filteredArticles = articlesFromStore.filter((article) => {
      const articleDate = Date.parse(article.date)
      return articleDate >= from && articleDate <= to
    })
    return filteredArticles.map((article) => (
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

export default connect((store) => ({
  articlesFromStore: store.articles,
  dateRangeFromStore: store.dateRange
}))(accordion(ArticleList))
