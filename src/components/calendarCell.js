/**
 * Created by 1001196 on 16. 1. 29..
 */
import React from 'react';

export default class CalendarCell extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <td className={this.props.className} onClick={this.props.selectDate(this.props.date)}>{this.props.date.getDate()}</td>
        );
    }
}