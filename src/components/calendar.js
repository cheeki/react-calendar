
import React from 'react';
import ReactDom from 'react-dom';
import Title from './title';
import CalendarBody from './body'

export default class Calendar extends React.Component {
    constructor () {
        super()
        this.state = {month: 1, year: 2015}
    }
    render() {
        return (
            <div>
                <Title month={this.state.month} year={this.state.year} />
                <CalendarBody />
            </div>
            );
    }
}

ReactDom.render(<Calendar/>, document.getElementById('test'));
