import React, { Component } from 'react'
import Select from './select'
import DateRange from './date-range-picker'
import {connect} from 'react-redux'



class Filters extends Component {
    render() {
        return (
            <div>
                <Select
                  articlesFromStore={this.articlesFromStore}
                />
                <DateRange />
            </div>
        )
    }
}

export default connect(
  (store) => ({articlesFromStore: store.articles})
)(Filters)
