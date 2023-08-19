export class Customer {
    constructor(private __fullName:String, private __age:number) {
    }

    public get fullName():String {
        return this.__fullName;
    }

    public set fullName(name:String) {
        this.__fullName = name
    }

    public get age():number {
        return this.__age;
    }

    public set age(totalAge:number) {
        this.__age=totalAge;
    }

    showDetails() {
        console.log(`Hello ${this.fullName}, great your age is ${this.age}`);
    }
}

var cus = new Customer("Raju Singh", 24);

cus.showDetails();