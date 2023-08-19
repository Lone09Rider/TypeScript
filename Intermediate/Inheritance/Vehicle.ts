export class Vehicle {
    constructor(private _wheels:number){
    }

    public get wheels():number{
        return this._wheels;
    }

    public set wheels(num:number) {
        num = this._wheels;
    }

    showDetails() {
        if (this._wheels == 4) {
            console.log("Car or Jeep");
        } else if(this._wheels == 2){
            console.log("Bike or SCooty");
        } else if(this._wheels == 3){
            console.log("Auto");
        } else {
            console.log("Truck or Bus or Carrier Vehicle");
        }
    }

    showClassVehicle() {
        console.log("I am Vehicle");
    }
}