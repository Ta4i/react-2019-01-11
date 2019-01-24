import React, { Component } from 'react'
import Select from './select'
import DateRange from './date-range-picker'


class Filters extends Component {
    // Не знаю, где нужно описывать эту логику, в App или же в фильтре
    // И стоит ли вообще идти таким путём, что изменение dateRange не влечёт за собой изменение
    // значения selectedValues? Если другая часть приложения будет использовать selectedValues,
    // то так же нужно будет фильтровать их по датам
    get selectedOptions() {
        return this.props.selectedOptions.filter(selectedOption =>
            this.props.options.some(option => option.id === selectedOption.value)
        );
    }
    render() {
        const {
            options,
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
                    selectedOptions={this.selectedOptions}
                    onChange={onSelectChange}
                />
            </div>
        )
    }
}

export default Filters
