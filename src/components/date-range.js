import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const millisInSecond = 1000
const secondsInMinute = 60
const minutesInHour = 60
const hoursInDay = 24

class DateRange extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date()
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
        if (date < this.state.endDate) {
            this.setState({ startDate: date })
        }
    }
    handleChangeEnd = (date) => {
        if (date > this.state.startDate) {
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