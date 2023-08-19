class Customer2 {
    private name:String;
    private age:number;


    constructor(theName:String, theAge:number) {
        this.age = theAge;
        this.name = theName;
    }

    public getName():String {
        return this.name;
    }

    public setName(theName:String):void {
        this.name = theName;
    }

    public getAge():number {
        return this.age;
    }

    public setAge(theAge:number):void {
        this.age = theAge
    }
}

