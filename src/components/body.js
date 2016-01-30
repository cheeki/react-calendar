/**
 * Created by 1001196 on 16. 1. 20..
 */
import React from 'react';
import CalendarLabel from './calendarLabel';
import DateCell from './date'

export default class CalendarBody extends React.Component {
    constructor () {
        super ();
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
            <table className="calendar-table">
                <CalendarLabel />
                <tbody>
                    {rows.map((row, i) =>
                        (<tr key={i}>
                            {row.map(date =>
                                (<DateCell key={date.getTime()}
                                            date={date}
                                            className={(date.getMonth() != thisMonth) ? "exclude" : ""} 
                                            isSelected={date.getTime() === this.props.currentDate.getTime()}
                                            selectDate={this.props.selectDate}/>)
                            )}
                            </tr>)
                    )}
                </tbody>
            </table>
        );
    }
}