class Coustomer {
    private firstName:String;
    private lastName:String;

    constructor(theFirst:String, theLast:String) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    
    
    showCustomer() {
        console.log("Welcome!!, "+this.firstName+" "+this.lastName);
    }
}

let myCostomer = new Coustomer("Raju", "Rastogi");

// myCostomer.firstName = "Raju";
// myCostomer.lastName = "Kumar";

myCostomer.showCustomer();