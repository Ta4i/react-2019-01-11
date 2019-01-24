import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux'
import { updateDateRangeFilter } from '../../ac'

class DateRangeFilter extends Component {

    static defaultProps = {
        numberOfMonths: 2,
    };
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.props.dateRangeFilterFromStore);
        this.props.dispatchUpdateDateRangeFilter(range);
    }
    handleResetClick() {
        this.props.dispatchUpdateDateRangeFilter({ from: undefined, to: undefined });
    }
    render() {
        const { from, to } = this.props.dateRangeFilterFromStore;
        const modifiers = { start: from, end: to };
        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
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
        );
    }
}

export default connect(
  (store) => ({
      dateRangeFilterFromStore: store.dateRangeFilter,
  }),
  (dispatch) => ({
      dispatchUpdateDateRangeFilter: (value) => dispatch(updateDateRangeFilter(value))
  })
)(DateRangeFilter)
