import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class DatePick extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date()
    }

    render() {
        return (
            <article>
                <DatePicker
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStartDate}
                />

                <DatePicker
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEndDate}
                 />
            </article>
        )
    }

    handleChangeEndDate = (endDate) => {
        const newStateDate = {endDate};

        endDate < this.state.startDate ? newStateDate['startDate'] = endDate : newStateDate['startDate'] = this.state.startDate

        this.setState(newStateDate)
    }

    handleChangeStartDate = (startDate) => {
        const newStateDate = {startDate};

        startDate > this.state.endDate ? newStateDate['endDate'] = startDate : newStateDate['endDate'] = this.state.endDate

        this.setState(newStateDate)
    }
}