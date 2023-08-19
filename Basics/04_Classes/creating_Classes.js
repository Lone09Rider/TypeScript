var Coustomer = /** @class */ (function () {
    function Coustomer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    Coustomer.prototype.showCustomer = function () {
        console.log("Welcome!!, " + this.firstName + " " + this.lastName);
    };
    return Coustomer;
}());
var myCostomer = new Coustomer("Raju", "Rastogi");
// myCostomer.firstName = "Raju";
// myCostomer.lastName = "Kumar";
myCostomer.showCustomer();
