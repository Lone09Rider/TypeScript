class Customer3 {
    constructor(private _firstName:String, private _age:number) {
    }

    public get firstName():String {
        return this._firstName;
    }

    public set firstName(fname:String) {
        this._firstName=fname;
    }

    public get age():number {
        return this._age;
    }

    public set age(totalAge:number) {
        this._age=totalAge;
    }
}

let myCus = new Customer3("Raju", 24);
console.log(myCus.firstName);
console.log(myCus.age);

