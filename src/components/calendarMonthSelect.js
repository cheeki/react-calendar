/**
 * Created by 1001196 on 16. 1. 29..
 */
import React from 'react';

export default class CalendarMonthSelect extends React.Component {
    constructor () {
        super();
    }

    render () {
        var months = [1,2,3,4,5,6,7,8,9,10,11,12];
        return (
            <ul className={("month_selector " + this.props.className).trim()}>
                {months.map((v, i) => (
                    <li key={i}>
                    <button type='button' onClick={this.props.onMonthSelect(i)}>
                    {v}
                    </button>
                </li>))}
            </ul>
        );
    }
}