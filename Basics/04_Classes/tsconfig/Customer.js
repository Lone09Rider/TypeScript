var Customer2 = /** @class */ (function () {
    function Customer2(theName, theAge) {
        this.age = theAge;
        this.name = theName;
    }
    Customer2.prototype.getName = function () {
        return this.name;
    };
    Customer2.prototype.setName = function (theName) {
        this.name = theName;
    };
    Customer2.prototype.getAge = function () {
        return this.age;
    };
    Customer2.prototype.setAge = function (theAge) {
        this.age = theAge;
    };
    return Customer2;
}());


let cus = new Customer2("Raju Kumar", 24);