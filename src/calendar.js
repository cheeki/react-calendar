
import React from 'react';
import ReactDom from 'react-dom';

class Calendar extends React.createClass {
    render() {
        return <div><h1>Calendar {this.props.month}</h1></div>;
    }
}

ReactDom.render(<Calendar month="10" />, document.getElementById('test'));
