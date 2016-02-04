/**
 * Created by 1001196 on 16. 1. 20..
 */
import React from 'react';
import CalendarLabel from './calendarLabel';
import CalendarCell from './calendarCell'

export default class CalendarBody extends React.Component {
    constructor () {
        super ();
    }

    shouldComponentUpdate (nextProps, nextState) {
        return !nextProps.isShowingMonthSelector || (!this.props.isShowingMonthSelector && nextProps.isShowingMonthSelector);
    }

    render () {
        var rows = [],
            date = this.props.date,
            iterator = new Date(date),
            endDate = new Date(date),
            thisMonth = iterator.getMonth();

        endDate.setDate(1);
        endDate.setMonth(endDate.getMonth() + 1);
        endDate.setDate(endDate.getDate() + ( 7 - endDate.getDay() ) % 7 - 1);

        iterator.setDate(1);
        iterator.setDate(iterator.getDate() - iterator.getDay());

        for(var i = 0; iterator <= endDate ; i++) {
            rows[i] = [];
            for (var j = 0; j < 7; j++) {
                rows[i].push(new Date(iterator));
                iterator.setDate(iterator.getDate() + 1);
            }
        }

        return (
            <table className={(this.props.className + " calendar-table").trim()}>
                <CalendarLabel locale={this.props.locale} />
                <tbody>
                    {rows.map((row, i) =>
                        (<tr key={i}>
                            {row.map(date =>
                                (<CalendarCell
                                    key={date.getTime()}
                                    date={date}
                                    className={(() => {
                                        var className =  '';
                                        if (date.getMonth() !== thisMonth) {
                                            className += 'exclude';
                                        }
                                        if (date.getTime() === this.props.currentDate.getTime()) {
                                            className += 'selected';
                                        }
                                        if (this.props.needTransitionEffect) {
                                            className += ' zoom_in_out';
                                        }

                                        return className.trim();
                                    })()}
                                    selectDate={this.props.selectDate}/>)
                            )}
                            </tr>)
                    )}
                </tbody>
            </table>
        );
    }
}