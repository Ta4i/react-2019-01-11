import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article, { articlePropTypes } from '../article';
import accordion from '../../decorators/accordion';

class ArticleList extends Component{
    render() {
        return <ul>{this.articles}</ul>;
    }

    componentDidMount() {
        this.props.fetchData && this.props.fetchData()
    }

    get articles() {
        const {
            openItemId,
            toggleItem,
            articles
        } = this.props

        return articles.map(article => (
            <li key={article.id} className="test--art__container">
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleArticle={toggleItem}
                />
            </li>
        ))
    }
}

ArticleList.propTypes = {
    /*
      Нужны ли вообще подобные дубли проверок?
      Если в массиве есть объект не верной структуры, он отвалится при
      проверке на уровне Article.
      Или лишним не будет, чем подробнее, тем лучше?
    */
    articles: PropTypes.arrayOf(articlePropTypes),
    fetchData: PropTypes.func,
    // from decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func.isRequired,
};

export default accordion(ArticleList)
