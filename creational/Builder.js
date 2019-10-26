class Car {
    constructor () {
        this.signalisation = false;
        this.parktronic = false;
        this.engine = 'V6'
    }
}

class CarBuilder {
    constructor () {
        this.car = new Car();
    }

    updateEngine (engine) {
        this.car.engine = engine;
        return this;
    }
    addPainting (color) {
        this.car.color = color;
        return this;
    }
    addSignaling (signalisation) {
        this.car.signalisation = signalisation;
        return this;
    }
    addParktronic (parktronic) {
        this.car.parktronic = parktronic;
        return this;
    }

    build () {
        return this.car;
    }
}

let builder = new CarBuilder();
let buildedCar = builder.updateEngine('V8').addPainting('black').addSignaling(true).addParktronic(true).build();
console.log(buildedCar);