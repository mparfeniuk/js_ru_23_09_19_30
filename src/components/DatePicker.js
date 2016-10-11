import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { getDateRange } from '../AC/filter'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css';

class DatePicker extends Component {

    constructor(){
        super()
        this.state = {
            from: null,
            to: null
        }
    }


    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state)
        const { getDateRange } = this.props
        this.setState(range)
        getDateRange(range)
    }

    render() {
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(
    state => ({ from: state.date_range.from, to : state.date_range.to }),
    { getDateRange })
    (DatePicker)