import React, { Component } from 'react'
import Article, { TypeArticle } from '../article'
import accordion from '../../decorators/accordion'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const TypeArticles = PropTypes.arrayOf(TypeArticle)

class ArticleList extends Component {
    static propTypes = {
        articles: TypeArticles
    }

    render() {
        return <ul>{this.articles}</ul>
    }

    componentDidMount() {
        this.props.fetchData && this.props.fetchData()
    }

    get articles() {
        const {
            openItemId,
            toggleOpenArticle,
            articles,
            filters
        } = this.props

        return articles
            .filter(article => {
                if (filters.selectedOptions.length) {
                    return filters.selectedOptions.map(o => o.label).includes(article.title)
                }
                return true
            })
            .filter(article => {
                if (filters.dates.to && filters.dates.from && !(
                    new Date(filters.dates.from) < new Date(article.date) &&
                    new Date(article.date) < new Date(filters.dates.to)
                )) {
                    return false
                }
                return true
            })
            .map(article => (
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

export default connect(
    (store) => ({
        articles: store.articles,
        filters: store.filters
    })
)(accordion(ArticleList))
