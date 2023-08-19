import { vehicle } from "./demo";

export class Auto implements vehicle {
    numOfTyres(): void {
       console.log("I am a auto with 3 tyres");
       
    }

}

var auto = new Auto();

auto.numOfTyres();