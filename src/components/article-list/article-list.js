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

const mapStateToProps = (store) => {
    
    const {selectedOption, dateRange: {from,to}} = store.filter
    const fromInSec = Date.parse(from)
    const toInSec = Date.parse(to)
    
    const filteredArticles = store.articles.filter((article) => {
        const dateParsed = Date.parse(article.date)

        if (
            (//если не выбрана ни одна статья, выйти из этой части условия сразу с true
                (selectedOption === null || selectedOption.length === 0 )
                ||//либо если массив с выбранными статьями не пустой, найдем там совпадение id и value
                (selectedOption.some((item) => item.value === article.id))
            ) &&
            (//аналогично: первая часть равно true, если не заполнены интервалы дат
                (!from)
                ||
                (!to)
                ||//если есть и from, и to, проверка на вхождение в интервал
                (dateParsed > fromInSec && dateParsed < toInSec)
            )
        ) return true
        return false
    })
    return {
        articlesFromStore: filteredArticles
    }
}

export default connect(mapStateToProps)(accordion(ArticleList))
