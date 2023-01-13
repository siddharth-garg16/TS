"use strict";
class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
}
const point = new Coordinate(4, 7);
console.log(point.getX());
