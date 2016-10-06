import React from 'react';
import DayPicker, { DateUtils } from "react-day-picker";
import LocaleUtils from "react-day-picker/moment";
import "react-day-picker/lib/style.css"
import "moment/locale/ru";

function sunday(day) {
    return day.getDay() === 0;
}

class MyDayPicker extends React.Component {
    state = {
        selectedDay: new Date()
    }
    handleDayClick(e, day, { selected, disabled }) {
        if (disabled) {
            return;
        }
        if (selected) {
            this.setState({ selectedDay: null })
        } else {
            this.setState({ selectedDay: day });
        }
    }
    render() {
        var sectionStyle = {
            width: 280 + "px",
        };
        return (
            <section style={sectionStyle}>
                <DayPicker
                    initialMonth={ new Date(2016, 1) }
                    disabledDays={ sunday }
                    selectedDays={ day => DateUtils.isSameDay(this.state.selectedDay, day) }
                    onDayClick={ this.handleDayClick.bind(this) }
                    localeUtils={ LocaleUtils }
                    locale="ru"
                />
            </section>);
    }
}

export default MyDayPicker;