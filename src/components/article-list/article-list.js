import React, {Component} from 'react';
import Article from '../article';
import accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {articlesIdsSelector, filteredArticlesSelector} from '../../selectors';

export const TypeArticles = PropTypes.arrayOf(PropTypes.string)

class ArticleList extends Component{
    static propTypes = {
        articlesFromStore: TypeArticles
    }
    render() {
        console.log('article-list render');
        return <ul>{this.articles}</ul>;
    }

    componentDidMount() {
        this.props.fetchData && this.props.fetchData()
    }

    get articles() {
        const {
            openItemId,
            toggleOpenArticle,
            articlesFromStore
        } = this.props

        return articlesFromStore.map(articleId => (
            <li key={articleId} className="test--art__container">
                <Article
                    id={articleId}
                    isOpen={articleId === openItemId}
                    toggleArticle={toggleOpenArticle}
                />
            </li>
        ))
    }
}

export default connect(
    store => {
        console.log('article-list connect');
        return {
            articlesFromStore: filteredArticlesSelector(store)
        }
    }
)(accordion(ArticleList))
