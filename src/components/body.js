/**
 * Created by 1001196 on 16. 1. 20..
 */
import React from 'react';

export default class CalendarBody extends React.Component {
    render () {
        var rows = [];
        for(var i = 0; i < 5; i++) {
            rows[i] = [];
            for (var j = 0; j < 7; j++) {
                rows[i].push(i * 7 + j);
            }
        }

        return (
            <table className="calendar-table">
                <tbody>
                    {rows.map(function(row, i) {
                        return (
                            <tr key={i}>
                                {row.map(function(date) {
                                    return <td key={date}>{date}</td>;
                                })}
                            </tr>
                            );
                    })}
                </tbody>
            </table>
        );
    }
}