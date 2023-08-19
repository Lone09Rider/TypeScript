class Coustomer2 {
    private firstName:String;
    private lastName:String;

    // constructor(theFirst:String, theLast:String) {
    //     this.firstName = theFirst;
    //     this.lastName = theLast;
    // }
    
    public getFirstName(): String {
        return this.firstName;
    }

    public setFirstName(theFirst: String): void {
        this.firstName = theFirst;
    }
    
    showCustomer() {
        console.log("Welcome!!, "+this.firstName+" "+this.lastName);
    }
}

let firstCus = new Coustomer2();

firstCus.setFirstName("Raju");
console.log(firstCus.getFirstName());
