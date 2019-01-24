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

    get articles() {
        const {
            openItemId,
            toggleOpenArticle,
            articlesFromStore,
        } = this.props;

        let { date: { to, from }, select } = this.props.filterStore;
        select = select.map(s => s.value);


        return articlesFromStore
          .filter(article => {
              if (to && from && !(
                new Date(from) < new Date(article.date) &&
                new Date(article.date) < new Date(to)
              )) {
                return false;
              }

              return select.length ? select.includes(article.id) : true;
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
        articlesFromStore: store.articles,
        filterStore: store.filter
    })
)(accordion(ArticleList))
