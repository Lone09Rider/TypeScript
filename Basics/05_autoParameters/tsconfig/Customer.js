var Customer3 = /** @class */ (function () {
    function Customer3(_firstName, _age) {
        this._firstName = _firstName;
        this._age = _age;
    }
    Object.defineProperty(Customer3.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (fname) {
            this._firstName = fname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer3.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (totalAge) {
            this._age = totalAge;
        },
        enumerable: false,
        configurable: true
    });
    return Customer3;
}());
var myCus = new Customer3("Raju", 24);
console.log(myCus.firstName);
console.log(myCus.age);
