import React, { Component } from 'react'
import Select from './select'
import DateRange from './date-range-picker'

class Filters extends Component {
    render() {
        const {
            options,
            selectedOptions,
            dateRange,
            onDateRangeChange,
            onSelectChange,
        } = this.props;

        return (
            <div>
                <DateRange 
                    dateRange={dateRange}
                    onChange={onDateRangeChange}
                />
                <Select
                    options={options}
                    selectedOptions={selectedOptions}
                    onChange={onSelectChange}
                />
            </div>
        )
    }
}

export default Filters
