var Coustomer2 = /** @class */ (function () {
    function Coustomer2() {
    }
    // constructor(theFirst:String, theLast:String) {
    //     this.firstName = theFirst;
    //     this.lastName = theLast;
    // }
    Coustomer2.prototype.getFirstName = function () {
        return this.firstName;
    };
    Coustomer2.prototype.setFirstName = function (theFirst) {
        this.firstName = theFirst;
    };
    Coustomer2.prototype.showCustomer = function () {
        console.log("Welcome!!, " + this.firstName + " " + this.lastName);
    };
    return Coustomer2;
}());
var firstCus = new Coustomer2();
firstCus.setFirstName("Raju");
console.log(firstCus.getFirstName());
