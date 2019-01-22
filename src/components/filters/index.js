import React, { Component } from 'react'
import PropTypes from "prop-types"
import Select from './select'
import DateRange from './date-range-picker'

class Filters extends Component {
    render() {
        return (
            <div>
                <Select articles={this.props.articles} />
                <DateRange />
            </div>
        )
    }
}

Filters.PropTypes = {
    articles: PropTypes.array.isRequired
}

export default Filters
