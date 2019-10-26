class CarFactory {
    createCar (carType) {
        if (carType === 'Audi') return new SportCar(carType, 10000000);
        if (carType === 'BMW') return new SportCar(carType, 15000000);
    }
}

class SportCar {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
}

let factory = new CarFactory();

let audiCar = factory.createCar('Audi');
let BMWCar = factory.createCar('BMW');

console.log(audiCar, BMWCar);