import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import connect from 'react-redux/es/connect/connect'
import { updateFilters } from '../../ac'

class DateRangePicker extends React.Component {
    static defaultProps = {
        numberOfMonths: 2
    }

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.props.dates)
        this.props.handleDayClick(range)
    }

    handleResetClick = () => {
        this.props.handleResetClick({ from: undefined, to: undefined })
    }

    render() {
        const { from, to } = this.props.dates
        const modifiers = { start: from, end: to }

        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        )
    }
}

export default connect(
    (store) => ({ dates: store.filters.dates }),
    (dispatch) => ({
        handleDayClick: dates => dispatch(updateFilters({ dates })),
        handleResetClick: dates => dispatch(updateFilters({ dates }))
    })
)(DateRangePicker)

