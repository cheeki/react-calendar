/**
 * Created by 1001196 on 16. 1. 20..
 */
import React from 'react'

export default class Title extends React.Component {
    constructor () {
        super()
    }
    render () {
        return <h1>{this.props.month}/{this.props.year}</h1>;
    }
}