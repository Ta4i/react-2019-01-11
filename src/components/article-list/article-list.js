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

        return articlesFromStore.map(article => (
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

export default connect((store) => {
    const {
      selected,
      dateSpan: {from, to}
    } = store.filters
    
    const filteredArticles = store.articles.filter((article) => {
      
      const datePublished = Date.parse(article.date)
      return (
        (selected.length === 0) ?
          store.articles :
          selected.find((selected) => selected.value === article.id) &&
          (!from || !to || (datePublished > from && datePublished < to))
        )
    })  
    return {
      articlesFromStore: filteredArticles                
    }  
  })(accordion(ArticleList))
