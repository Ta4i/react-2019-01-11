// HOC === Higher Order Component

import React, { Component } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {


    render() {
      const {
        filteredArticles,
        articlesFromStore,
        articlesFilterFromStore
      } = this.props

      // filter articles
      let articles = filteredArticles ? filteredArticles: articlesFromStore ? articlesFromStore: []

      if(articlesFilterFromStore && articlesFilterFromStore.length > 0) {
        let filterIds = articlesFilterFromStore.map((item) => (item.value))
        articles = articles.filter(article => filterIds.includes(article.id))
      }

      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          filteredArticles = {articles}
        />
      )
    }
  }



