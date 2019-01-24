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

        // let { /*date: { to, from },*/
        //      selected
        //      } = this.props.filterFromStore;
        //      console.log(selected)
         const  selectedInFilter = this.props.filterFromStore.selected.map(item => item.value);

        return articlesFromStore.filter(article =>{
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
