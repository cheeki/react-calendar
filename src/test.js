
import React from 'react';

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea()
    }

    calcArea() {
        console.log("test1");
        return this.height * this.width;
    }
}

var HelloMessage = require('./test2.js');


ReactDOM.render(<HelloMessage name="John" />, document.getElementById('test'));
