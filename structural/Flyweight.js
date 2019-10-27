class Car {
    constructor(name) {
        this.name = name;
    }

    showName () {
        console.log(`${this.name} is a good car`);
    }
}

class CarFactory {
    constructor () {
        this.cars = {}
    }

    create (name) {
        let car = this.cars[name];
        if (car) return car;
        this.cars[name] = new Car(name);
        return this.cars[name];
    }
}

let autos = new CarFactory();

autos.create('bmw');
autos.create('audi');
autos.create('lotus');

autos.create('lotus').showName();