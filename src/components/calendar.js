
import React from 'react';
import ReactDom from 'react-dom';
import Title from './title';
import CalendarBody from './body';
import '../css/style.less';

export default class Calendar extends React.Component {
    constructor () {
        super();

        var today = new Date();
        today.setHours(0, 0, 0);
        this.state = {
            date: today.getDate(),
            month: today.getMonth() + 1,
            year: today.getFullYear(),
            currentDate: today
        };
    }

    render() {
        return (
            <div className='fugui-calendar'>
                <Title month={this.state.month} year={this.state.year} />
                <CalendarBody date={this.state.currentDate} />
            </div>
            );
    }
}

ReactDom.render(<Calendar/>, document.getElementById('test'));
