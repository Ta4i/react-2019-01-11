import React, {Component} from 'node_modules/react'
import DatePicker from "react-datepicker/es/index";

class DatePickersRange extends Component {

    state = {
        startDate: null,
        endDate: null,
    };

    handleChangeStart = () => {
        this.setState()
    };
    handleChangeEnd = () => {

    };


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
}

export default DatePickersRange