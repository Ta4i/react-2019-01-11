// HOC === Higher Order Component

import React, { Component } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {


    render() {
      const {
        filteredArticles,
        articlesFromStore,
        dateRangeFilterFromStore
      } = this.props

      // filter articles
      let articles = filteredArticles ? filteredArticles: articlesFromStore ? articlesFromStore: []

      if(dateRangeFilterFromStore.from || dateRangeFilterFromStore.to) {
        articles = articles.filter(article => {
          const date = new Date(article.date)
          if(dateRangeFilterFromStore.from && date < dateRangeFilterFromStore.from) {
            return false;
          }
          if(dateRangeFilterFromStore.to && date > dateRangeFilterFromStore.to) {
            return false;
          }
          return true;
        })
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



