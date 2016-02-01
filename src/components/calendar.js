
import React from 'react';
import CalendarTitle from './title';
import CalendarBody from './body';

export default class Calendar extends React.Component {
    constructor (props) {
        super(props);

        var today = new Date();
        today.setHours(0, 0, 0, 0, 0, 0);
        this.state = {
            month: today.getMonth(),
            year: today.getFullYear(),
            currentDate: today
        };
    }

    nextCalendar() {
        var month = this.state.month,
            nextMonth = month + 1;

        if(nextMonth > 11) {
            this.setState({year: this.state.year + 1 });
            nextMonth %= 12;
        }

        this.setState({month: nextMonth});
    }

    prevCalendar () {
        var month = this.state.month,
            prevMonth = month - 1;

        if(prevMonth < 0) {
            this.setState({year: this.state.year - 1 });
            prevMonth += 12;
        }

        this.setState({month: prevMonth});
    }

    selectDate (date) {
        var _this = this;
        return function () {
            _this.setState({currentDate: date});
        };
    }

    render() {
        return (
            <div className='fugui-calendar'>
                <CalendarTitle
                    month={this.state.month}
                    year={this.state.year}
                    onNextButtonClick={this.nextCalendar.bind(this)}
                    onPrevButtonClick={this.prevCalendar.bind(this)} />

                <CalendarBody
                    date={new Date(this.state.year, this.state.month)}
                    currentDate={this.state.currentDate}
                    selectDate={this.selectDate.bind(this)} />
            </div>
        );
    }
}