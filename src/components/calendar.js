
import React from 'react';
import CalendarTitle from './calendarTitle';
import CalendarBody from './calendarBody';
import CalendarMonthSelect from './calendarMonthSelect'

export default class Calendar extends React.Component {
    constructor (props) {
        super(props);

        var today = new Date();
        today.setHours(0, 0, 0, 0, 0, 0);
        this.state = {
            month: today.getMonth(),
            year: today.getFullYear(),
            currentDate: today,
            isShowingMonthSelector: false,
            locale: 'en-US'
        };
    }

    moveToNextMonth () {
        var month = this.state.month,
            nextMonth = month + 1;

        if(nextMonth > 11) {
            this.setState({year: this.state.year + 1 });
            nextMonth %= 12;
        }

        this.setState({month: nextMonth});
    }

    moveToPrevMonth () {
        var month = this.state.month,
            prevMonth = month - 1;

        if(prevMonth < 0) {
            this.setState({year: this.state.year - 1 });
            prevMonth += 12;
        }

        this.setState({month: prevMonth});
    }

    moveToNextYear() {
        this.setState({year: this.state.year + 1});
    }

    moveToPrevYear () {
        this.setState({year: this.state.year - 1});
    }

    selectDate (date) {
        var _this = this;
        return function () {
            _this.setState({currentDate: date});
        };
    }

    selectMonth (month) {
        var _this = this;
        return function () {
            _this.setState({
                month: month,
                isShowingMonthSelector: false
            });
        };
    }

    toggleMonthSelector () {
        this.setState({isShowingMonthSelector: !this.state.isShowingMonthSelector});
    }

    onNextButtonClick () {
        if (this.state.isShowingMonthSelector) {
            return this.moveToNextYear;
        }
        return this.moveToNextMonth;
    }

    onPrevButtonClick () {
        if (this.state.isShowingMonthSelector) {
            return this.moveToPrevYear;
        }
        return this.moveToPrevMonth;
    }

    render() {
        return (
            <div className='fugui-calendar'>
                <CalendarTitle
                    month={this.state.month}
                    year={this.state.year}
                    isShowingMonthSelector={this.state.isShowingMonthSelector}
                    onNextButtonClick={this.onNextButtonClick().bind(this)}
                    onPrevButtonClick={this.onPrevButtonClick().bind(this)}
                    onTitleClick={this.toggleMonthSelector.bind(this)} />
                <div className='calendar_wrapper'>
                    <CalendarBody
                        date={new Date(this.state.year, this.state.month)}
                        currentDate={this.state.currentDate}
                        selectDate={this.selectDate.bind(this)}
                        locale={this.state.locale}
                        className={this.state.isShowingMonthSelector ? 'blur' : ''} />
                    <CalendarMonthSelect
                        className={this.state.isShowingMonthSelector ? 'slide_open' : ''}
                        onMonthSelect={this.selectMonth.bind(this)} />
                </div>
            </div>
        );
    }
}