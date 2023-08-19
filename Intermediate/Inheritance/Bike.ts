import { Vehicle } from "./Vehicle";

export class Bike extends Vehicle {
    showClassBike(): void {
        console.log("In Bike");
    }
}

var bike = new Bike(2);
bike.showClassBike();
bike.showClassVehicle();
bike.showDetails();