import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux';
import { changeDateRange, resetDateRange } from '../../ac';
import { Consumer as LangConsumer } from '../../contexts/language'
import texts from '../../texts'

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
        return (
            <div className="RangeExample">
                <p>
                    <LangConsumer>
                        {(language) => {
                            if (!from && !to) {
                                return texts[language].selectFirstDay
                            } else if (from && !to) {
                                return texts[language].selectLastDay
                            } else if (from && to) {
                                return <React.Fragment>
                                    {`${texts[language].selectedRange}: ${from.toLocaleDateString()} - ${to.toLocaleDateString()}`}
                                    <button className="link" onClick={this.handleResetClick}>{texts[language].reset}</button>
                                </React.Fragment>
                            }
                        }}
                    </LangConsumer>
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
)(DateRange)
