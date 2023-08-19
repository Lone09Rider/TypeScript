"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = void 0;
var Truck = /** @class */ (function () {
    function Truck(_tyre) {
        this._tyre = _tyre;
    }
    Object.defineProperty(Truck.prototype, "tyre", {
        get: function () {
            return this._tyre;
        },
        set: function (tyre) {
            this._tyre = tyre;
        },
        enumerable: false,
        configurable: true
    });
    Truck.prototype.numOfTyres = function () {
        console.log("I am a Truck with ".concat(this._tyre, " tyres"));
    };
    return Truck;
}());
exports.Truck = Truck;
var truck1 = new Truck(8);
truck1.numOfTyres();
