import React, {Component} from 'react';
import Article from './article';
import accordion from '../decorators/accordion';

class ArticleList extends Component{
    render() {
        return <ul>{this.articles}</ul>;
    }

    get articles() {
        const {
            openItemId,
            toggleOpenArticle,
            articles,
            isGlobalOpenComment,
        } = this.props

        return articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleArticle={toggleOpenArticle}
                    isGlobalOpenComment={isGlobalOpenComment}
                />
            </li>
        ))
    }
}

export default accordion(ArticleList)
