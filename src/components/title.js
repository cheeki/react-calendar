/**
 * Created by 1001196 on 16. 1. 20..
 */
import React from 'react'

export default class CalendarTitle extends React.Component {

    render () {
        return (
            <h1>
                <button
                    type="button"
                    className="prev"
                    onClick={this.props.onPrevButtonClick}>&lt;</button>
                <span className="fugui-calendar-month">{this.props.month+1}</span>
                .
                <span className="fugui-calendar-year">{this.props.year}</span>
                <button
                    type="button"
                    className="next"
                    onClick={this.props.onNextButtonClick}>&gt;</button>
            </h1>
        );
    }
}