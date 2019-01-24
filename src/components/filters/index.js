import React, { Component } from 'react'
import Select from './select'
import DateRangeFilter from './date-range-picker'

class Filters extends Component {
    render() {
        return (
            <div>
                <Select />
                <DateRangeFilter />
            </div>
        )
    }
}

export default Filters
