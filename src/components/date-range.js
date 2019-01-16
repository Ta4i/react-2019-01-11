import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const millisInSecond = 1000
const secondsInMinute = 60
const minutesInHour = 60
const hoursInDay = 24

class DateRange extends Component {
    state = {
        startDate: null,
        endDate: null
    }
    render() {
        return (
            <div>
                <DatePicker
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                />
                <DatePicker
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                />
                <span>{this.dateRange}</span>
            </div>
        )
    }
    handleChangeStart = (date) => {
        const endDate = this.state.endDate
        if (!endDate || (endDate && date <= endDate)) {
            this.setState({ startDate: date })
        }
    }
    handleChangeEnd = (date) => {
        const startDate = this.state.startDate
        if (!startDate || (date >= startDate)) {
            this.setState({ endDate: date })
        }
    }
    get dateRange() {
        if (!this.state.startDate || !this.state.endDate) {
            return null
        }
        const dateDiffMillis = this.state.endDate - this.state.startDate
        const dateDiffDays = dateDiffMillis / (
            millisInSecond * secondsInMinute * minutesInHour * hoursInDay
        )
        return `${dateDiffDays} ${dateDiffDays === 1 ? 'day' : 'days'}`
    }
}

export default DateRange