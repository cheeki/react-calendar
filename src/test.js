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

require('./test2.js');