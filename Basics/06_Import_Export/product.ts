export class Product {
    constructor(private __id:number, private __name:String){
    }

    public get id():number {
        return this.__id;
    }

    public set id(pid:number) {
        this.__id = pid;
    }

    public get name():String {
        return this.__name;
    }

    public set name(pname:String) {
        this.__name = pname;
    }

    displayProduct() {
        console.log(`${this.id}:${this.name}`);
    }
}

var pro = new Product(1, "Puma Shoes");

pro.displayProduct();