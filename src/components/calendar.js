
import React from 'react';
import CalendarTitle from './calendarTitle';
import CalendarBody from './calendarBody';
import CalendarMonthSelect from './calendarMonthSelect'

export default class Calendar extends React.Component {
    static defaultProps = {
        selectRange: false,
        locale: 'en-US'
    };

    static propTypes = {
        onDateSelected: React.PropTypes.func,
        selectRange: React.PropTypes.bool,
        locale: React.PropTypes.string
    };

    constructor (props) {
        super(props);

        var today = new Date();
        today.setHours(0, 0, 0, 0, 0, 0);
        this.state = {
            month: today.getMonth(),
            year: today.getFullYear(),
            currentDate: today,
            isShowingMonthSelector: false,
            needTransitionEffect: false
        };
    }

    moveToNextMonth () {
        this.setState((previousState, currentProps) => {
            var month = previousState.month,
                year = previousState.year,
                nextMonth = month + 1;

            if(nextMonth > 11) {
                year = year + 1;
                nextMonth %= 12;
            }

            return {
                month: nextMonth,
                year: year,
                needTransitionEffect: true
            };
        });
    }

    moveToPrevMonth () {
        this.setState((previousState, currentProps) => {
            var month = previousState.month,
                year = previousState.year,
                prevMonth = month - 1;

            if(prevMonth < 0) {
                year = year - 1;
                prevMonth += 12;
            }

            return {
                month: prevMonth,
                year: year,
                needTransitionEffect: true
            };
        });
    }

    moveToNextYear() {
        this.setState({year: this.state.year + 1});
    }

    moveToPrevYear () {
        this.setState({year: this.state.year - 1});
    }

    selectDate (date) {
        return () => {
            this.setState({currentDate: date});
            document.getElementsByClassName(this.props.inputbox)[0].value = date;

            if (date.getMonth() !== this.state.month) {
                this.selectMonth(date.getMonth())();
            }
        };
    }

    selectMonth (month) {
        return () => {
            this.setState({
                month: month,
                isShowingMonthSelector: false,
                needTransitionEffect: true
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

    /** Lifecycle Methods **/
    componentWillUpdate (nextProps, nextState) {

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
                        locale={this.props.locale}
                        className={() => {
                            var className =  '';
                            if (this.state.isShowingMonthSelector) {
                                className += 'blur';
                            }
                        }
                        }
                        isShowingMonthSelector={this.state.isShowingMonthSelector} />
                    <CalendarMonthSelect
                        className={this.state.isShowingMonthSelector ? 'slide_open' : 'slide_close'}
                        onMonthSelect={this.selectMonth.bind(this)} />
                </div>
            </div>
        );
    }
}