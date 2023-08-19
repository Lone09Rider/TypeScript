"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(_wheels) {
        this._wheels = _wheels;
    }
    Object.defineProperty(Vehicle.prototype, "wheels", {
        get: function () {
            return this._wheels;
        },
        set: function (num) {
            num = this._wheels;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.showDetails = function () {
        if (this._wheels == 4) {
            console.log("Car or Jeep");
        }
        else if (this._wheels == 2) {
            console.log("Bike or SCooty");
        }
        else if (this._wheels == 3) {
            console.log("Auto");
        }
        else {
            console.log("Truck or Bus or Carrier Vehicle");
        }
    };
    Vehicle.prototype.showClassVehicle = function () {
        console.log("I am Vehicle");
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
