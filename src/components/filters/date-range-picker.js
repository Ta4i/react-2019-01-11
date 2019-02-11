import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {connect} from 'react-redux';
import {changeDateRange, resetDateRange} from '../../ac';
import localization from '../../decorators/localization'

class DateRange extends React.Component {
    static defaultProps = {
        numberOfMonths: 2,
    };
    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.props.dateRange);
        this.props.changeDateRange(range);
    }
    handleResetClick = () => {
        this.props.resetDateRange();
    }
    render() {
        const { from, to } = this.props.dateRange;
        const modifiers = { start: from, end: to };
        const firstDay = this.props.getLocalizeString('selectfirstday')
        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the last day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.handleResetClick}>
                            {this.props.getLocalizeString('reset')}
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
    state => ({
        dateRange: state.filters.dateRange
    }),
    {
        changeDateRange,
        resetDateRange
    }
)(localization(DateRange))
