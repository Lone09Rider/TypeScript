import { vehicle } from "./demo";

export class Truck implements vehicle {

    constructor(private _tyre:number){
    }

    public get tyre():number {
        return this._tyre;
    }

    public set tyre(tyre:number) {
        this._tyre = tyre;
    }

    numOfTyres(): void {
        console.log(`I am a Truck with ${this._tyre} tyres`);
        
    }

}

var truck1 = new Truck(8);
truck1.numOfTyres();