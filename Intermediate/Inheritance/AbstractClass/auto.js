"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto() {
    }
    Auto.prototype.numOfTyres = function () {
        console.log("I am a auto with 3 tyres");
    };
    return Auto;
}());
exports.Auto = Auto;
var auto = new Auto();
auto.numOfTyres();
