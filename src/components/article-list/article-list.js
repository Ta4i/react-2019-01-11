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
            articlesFromStore
        } = this.props

        const  selectedInFilter = this.props.filterFromStore.selected.map(item => item.value);
      //  console.log(this.props.filterFromStore.dateRange)
        const toDate = this.props.filterFromStore.dateRange.toDate;
        const fromDate = this.props.filterFromStore.dateRange.fromDate;
        return articlesFromStore.filter(article =>{
            if (toDate && fromDate && !(
                  new Date(fromDate ) < new Date(article.date) &&
                  new Date(article.date) < new Date(toDate)
                )) {
                    return false;
                }

            return selectedInFilter.length ? selectedInFilter.includes(article.id) : true;
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
        filterFromStore : store.filter})
)(accordion(ArticleList))
