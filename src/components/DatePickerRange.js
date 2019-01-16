import React, {Component} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class DatePickerRange extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date(),
    };

    months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    handleChangeStart = (e) => {
        this.setState({startDate: e});
    };

    handleChangeEnd = (e) => {
        this.setState({endDate: e});
    };

    render() {
        return (
            <div>
                <p></p>
                <p></p>
                <p></p>
                <p><strong>Chosen date
                    range:</strong> from {this.state.startDate.getUTCDate()} {this.months[this.state.startDate.getMonth()]} {this.state.startDate.getUTCFullYear()} to {this.state.endDate.getUTCDate()} {this.months[this.state.endDate.getMonth()]} {this.state.endDate.getUTCFullYear()}</p>
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
        );
    }
}

export default DatePickerRange;