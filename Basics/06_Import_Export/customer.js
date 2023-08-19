"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(__fullName, __age) {
        this.__fullName = __fullName;
        this.__age = __age;
    }
    Object.defineProperty(Customer.prototype, "fullName", {
        get: function () {
            return this.__fullName;
        },
        set: function (name) {
            this.__fullName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "age", {
        get: function () {
            return this.__age;
        },
        set: function (totalAge) {
            this.__age = totalAge;
        },
        enumerable: false,
        configurable: true
    });
    Customer.prototype.showDetails = function () {
        console.log("Hello ".concat(this.fullName, ", great your age is ").concat(this.age));
    };
    return Customer;
}());
exports.Customer = Customer;
var cus = new Customer("Raju Singh", 24);
cus.showDetails();
