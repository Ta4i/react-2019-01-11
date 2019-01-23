import React, { Component } from 'react'
import { connect } from 'react-redux'
import DateRange from './date-range-picker'
import Select from './select'

class Filters extends Component {
  render() {
    return (
      <div>
        <Select articles={this.props.articlesFromStore} />
        <DateRange />
      </div>
    )
  }
}

export default connect((store) => ({
  articlesFromStore: store.articles
}))(Filters)
