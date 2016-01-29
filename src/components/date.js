/**
 * Created by 1001196 on 16. 1. 29..
 */
import React from 'react';

export default class DateCell extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <td className={this.props.className}>{this.props.date.getDate()}</td>
        );
    }
}