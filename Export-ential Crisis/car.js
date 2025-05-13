export default class hatchback {
    constructor() {
        // Initialization code here
        this.colour = 'Red';
        this.type = 'i20';
    }

    getColour = (vehicle) => {
        return `The colour of the Car is ${vehicle.colour}`;
    }

    getType = (vehicle) => {
        return `The type of the Car is ${vehicle.type}`;
    }
}

//export default hatchback; 