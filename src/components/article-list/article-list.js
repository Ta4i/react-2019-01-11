import React, {Component} from 'react';
import Article, {TypeArticle} from '../article';
import accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export const TypeArticles = PropTypes.arrayOf(TypeArticle)

class ArticleList extends Component{
    static propTypes = {
        articlesFromStore: TypeArticles
    }
    render() {
        return <ul>{this.articles}</ul>;
    }

    componentDidMount() {
        this.props.fetchData && this.props.fetchData()
    }

    getVisibleArticles() {
        const {
            articlesFromStore,
            filters : {selectedArticles, startDate, endDate} 
        } = this.props

        return articlesFromStore.filter((article => {
            return selectedArticles.length <= 0 || selectedArticles.indexOf(article.id) >=0 
        })).filter((article => {
            return !startDate || new Date(article.date) >= new Date(startDate) 
        })).filter((article => {
            return !endDate || new Date(article.date) <= new Date(endDate) 
        }))
    }

    get articles() {
        const {
            openItemId,
            toggleOpenArticle,
        } = this.props

        return this.getVisibleArticles().map(article => (
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
        articlesFromStore: store.articles,
        filters: store.filters
    })
)(accordion(ArticleList))
