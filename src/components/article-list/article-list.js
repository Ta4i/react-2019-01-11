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

  isInDateRange = (article) => {
    const {
      dateRangeFromStore: { from, to }
    } = this.props
    const articleDate = Date.parse(article.date)

    if (!from && !to) {
      return true
    } else if (from && !to) {
      return articleDate >= from
    } else if (!from && to) {
      return articleDate <= to
    }
    return articleDate >= from && articleDate <= to
  }

  isInSelectedOptions = (article) => {
    const { selectedOptionsFromStore } = this.props
    if (!selectedOptionsFromStore || !selectedOptionsFromStore.length) {
      return true
    }
    const selectedArticleIds = selectedOptionsFromStore.map(
      (option) => option.value
    )
    return selectedArticleIds.includes(article.id)
  }

  get articles() {
    const { openItemId, toggleOpenArticle, articlesFromStore } = this.props
    const filteredArticles = articlesFromStore.filter(
      (article) =>
        this.isInDateRange(article) && this.isInSelectedOptions(article)
    )

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
  dateRangeFromStore: store.dateRange,
  selectedOptionsFromStore: store.selectedOption
}))(accordion(ArticleList))
