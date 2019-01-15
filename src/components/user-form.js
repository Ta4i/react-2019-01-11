import React, {Component} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class UserForm extends Component {
    state = {
        user: '',
        startDate: new Date(),
        endDate: new Date()
    }

    render() {
        return (
            <div>
                <div>
                    Username:
                    <input value={this.state.user} onChange={this.handleChange}/>
                </div>
                <div>
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
                </div>
            </div>
        )
    }

    handleChange = (event) => {
        event.preventDefault()

        if (event.target.value.length > 10) {
            return this.setState({
                user: ''
            })
        }

        this.setState({
            user: event.target.value
        })
    }

    handleChangeEndDate = (endDate) => this.setState({ endDate })

    handleChangeStartDate = (startDate) => {
        const newStateDate = { startDate };

        if (startDate > this.state.endDate) {
            newStateDate['endDate'] = startDate
        }

        this.setState(newStateDate)
    }
}

export default UserForm
