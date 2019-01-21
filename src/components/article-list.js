import React, {Component} from 'react';
import Article from './article';
import accordion from '../decorators/accordion';
import PropTypes from 'prop-types';
class ArticleList extends Component{
    render() {
        return <ul>{this.articles}</ul>;
    }

    componentDidMount() {
        this.props.fetchData && this.props.fetchData()
    }
    static propTypes = {
        openItemId: PropTypes.string,
        toggleArticle: PropTypes.func,
        isOpen: PropTypes.bool,
        toggleOpenArticle: PropTypes.func,
        articles: PropTypes.array
    }

    get articles() {
        const {
            openItemId,
            toggleOpenArticle,
            articles
        } = this.props

        return articles.map(article => (
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
