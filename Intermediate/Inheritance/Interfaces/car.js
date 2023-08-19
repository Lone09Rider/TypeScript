"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getTyre = function () {
        console.log("It has 4 cause it's a car.");
    };
    return Car;
}());
exports.Car = Car;
var car = new Car();
car.getTyre();
