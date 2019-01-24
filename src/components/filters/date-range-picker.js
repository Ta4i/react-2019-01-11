import React from 'react';
import { connect } from 'react-redux';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { setDateRange } from '../../ac';

class Example extends React.Component {
    static defaultProps = {
        numberOfMonths: 2,
    };
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.state = this.getInitialState();
    }
    getInitialState() {
        return {
            from: undefined,
            to: undefined,
        };
    }
    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.props.dateRange);
        console.log(range);
        this.props.setDateRange(range);
    }
    handleResetClick = () => {
        this.props.setDateRange(this.getInitialState());
    }
    render() {
        // return null;
        const { from, to } = this.props.dateRange;
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
  (store) => ({ dateRange: store.filter.date }),
  (dispatch) => ({
      setDateRange: (dateRange) => dispatch(setDateRange(dateRange))
  })
)(Example)
