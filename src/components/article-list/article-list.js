import React, {Component} from 'react';
import Article, {TypeArticle} from '../article';
import accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filteredArticlesSelector, articlesDataSelector} from '../../selectors';

export const TypeArticlesList = PropTypes.arrayOf(PropTypes.string)
export const TypeArticlesData = PropTypes.objectOf(TypeArticle)

class ArticleList extends Component{
    static propTypes = {
        articlesList: TypeArticlesList,
        articlesData: TypeArticlesData
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
            articlesList,
            articlesData,
        } = this.props

        return articlesList.map(id => (
            <li key={id} className="test--art__container">
                <Article
                    article={articlesData[id]}
                    isOpen={id === openItemId}
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
            articlesList: filteredArticlesSelector(store),
            articlesData: articlesDataSelector(store),
        }
    }
)
(accordion(ArticleList))
