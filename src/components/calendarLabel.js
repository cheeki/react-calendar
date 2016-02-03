/**
 * Created by 1001196 on 16. 1. 20..
 */
import React from 'react';
import LocalString from './localeString';

export default class CalendarLabel extends React.Component {
    constructor () {
        super ();
    }

    render () {
        return (
            <thead>
            <tr>
            {LocalString.days[this.props.locale].map(function(name, i) {
                return (
                    <th key={"day_name_" + i}>{name}</th>
                )
            })}
            </tr>
            </thead>
        );
    }
}/**
 * Created by 1001196 on 16. 1. 29..
 */
