import React, {Component} from 'react'
import DatePicker from "react-datepicker";

class DateRange extends Component {
  state = {
    startDate: null,
    endDate: null,
  }

  render() {
    const {startDate, endDate} = this.state
    let datesChosen;

    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }

    if (startDate && endDate) {
      const start = startDate.toLocaleString("ru", dateOptions);
      const end = endDate.toLocaleString("ru", dateOptions);
      datesChosen = `С ${start} по ${end}`
    }

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
        <div>{datesChosen ? datesChosen : ''}</div>
      </div>
    )
  }
  handleChangeEnd = (endDate) => this.setState({ endDate })

  handleChangeStart = (startDate) => this.setState({ startDate })
}

export default DateRange