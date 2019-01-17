import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class DateRangePicker extends Component { /* extends React.Component ? */
    state = {
        startDate: new Date(),
        endDate: new Date(),
    }

    handleChangeStartDate = (startDate) => {
      const { endDate } = this.state;
      if (startDate.getTime() > endDate.getTime()) {
          return this.setState({
              startDate,
              endDate: startDate,
          });
      }
      this.setState({startDate})
    }

    handleChangeEndDate = (endDate) => {
      this.setState({endDate})
    }

    render() {
      const { startDate, endDate } = this.state;
      return (
        <div> {/* React.Fragment? */}
          <DatePicker
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={this.handleChangeStartDate}
          />
          <DatePicker
              selected={endDate}
              selectsEnd
              minDate={startDate}
              startDate={startDate}
              endDate={endDate}
              onChange={this.handleChangeEndDate}
          />
          <div>{startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</div>
        </div>
      );
    }
}