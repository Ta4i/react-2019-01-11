import React, { Component } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

class RangeDatePicker extends Component {
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
            </div>
        )
    }

    handleChangeStart = (startDate) => {
        this.setState({
            startDate: startDate
        })
    }

    handleChangeEnd = (endDate) => {
        this.setState({
            endDate: endDate
        })
    }
}

export default RangeDatePicker