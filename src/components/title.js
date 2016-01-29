/**
 * Created by 1001196 on 16. 1. 20..
 */
import React from 'react'

export default class Title extends React.Component {
    constructor () {
        super()
    }
    render () {
        return (
            <h1>
                <button type="button" className="prev">&lt;</button>
                {this.props.month}/{this.props.year}
                <button type="button" className="next">&gt;</button>
            </h1>);
    }
}