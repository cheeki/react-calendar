/**
 * Created by 1001196 on 16. 1. 14..
 */
console.log(2);

import React from 'react';

var HelloMessage = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

module.exports = HelloMessage;