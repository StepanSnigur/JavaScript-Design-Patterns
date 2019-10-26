class Car {
    constructor () {
        this.carPrice = 10000;
        this.modelName = 'standart car'
    }

    getCarPrice () {
        return this.carPrice;
    }
    getModelName () {
        return this.getModelName;
    }
}
class Audi extends Car {
    constructor () {
        super();
        this.carPrice = 1000000;
        this.modelName = 'Audi'
    }
}

class AutopilotDecorator {
    constructor(car) {
        this.car = car;
    }

    getCarPrice () {
        return this.car.carPrice + 50000;
    }
    getModelName () {
        return `${this.car.modelName} with autopilot`;
    }
}

let car = new AutopilotDecorator(new Audi());
console.log(car.getModelName(), car.getCarPrice());