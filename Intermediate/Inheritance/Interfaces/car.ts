import { Vehicles } from "./vehicles";

export class Car implements Vehicles {
    getTyre() {
        console.log(`It has 4 cause it's a car.`);
        
    }

}

var car = new Car();
car.getTyre();