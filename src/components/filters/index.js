import React, { Component } from 'react'
import SelectFilter from './select'
import DateRange from './date-range-picker'

class Filters extends Component {
    render() {
        
        return (
            <div>
                <SelectFilter articles={this.props.articles} />
                <DateRange />
            </div>
        )
    }
}

export default Filters
