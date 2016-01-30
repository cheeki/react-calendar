/**
 * Created by 1001196 on 16. 1. 29..
 */
import React from 'react';

export default class DateCell extends React.Component {
    constructor () {
        super();
    }

    render () {
        var className = (() =>
                    this.props.className + ( this.props.isSelected == true ? " selected" : ""))();
        return (
            <td className={className} onClick={this.props.selectDate(this.props.date)}>{this.props.date.getDate()}</td>
        );
    }
}