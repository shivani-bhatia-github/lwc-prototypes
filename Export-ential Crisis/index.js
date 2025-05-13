/*
DEFAULT IMPORT

There are no curly braces given for default export
The name of the method in case of default import can be different than what is defined in the module
*/
import deliverWithDiffName from "./vehicle.js";

/*
NAMED IMPORTS

Imported with curly braces
Name should match with what is defined in module
*/
import {pickup, service, repair, DELIVERY_DURATION} from "./vehicle.js";
import cars from './car.js'

/*
To name it differently we can take help of alias 

eg :
import {pickup as pic, service as ser,  repair as rep}  from "./vehicle.js"

*/

//document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#myButton').addEventListener('click', () => {
        console.log('Hello hello');

        let instance = new cars();
        let vehicleColour = instance.getColour(instance);
        let vehicleType = instance.getType(instance);

        console.log(vehicleColour);
        console.log(vehicleType);

        if(DELIVERY_DURATION === 60) {
            var status1 = deliverWithDiffName('BMW');
            var status2 = pickup('BMW');
            var status3 = service('BMW');
            var status4 = repair('BMW');

            console.log(status1);
            console.log(status2);
            console.log(status3);
            console.log(status4);
        }
        
    });
//});