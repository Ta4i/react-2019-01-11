import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { connect } from 'react-redux'
import { selectRange } from '../../ac'

class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  }
  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.props.rangeFromStore)
    this.props.dispatchRange(range)
  }
  handleResetClick = () => {
    this.props.dispatchRange()
  }
  render() {
    const { from, to } = this.props.rangeFromStore
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
          {from && to && (
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
  (store) => ({
    rangeFromStore: store.dateRange
  }),
  (dispatch) => ({
    dispatchRange: (range) => dispatch(selectRange(range))
  })
)(Example)
