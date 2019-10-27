class CarMediator {
    constructor () {
        this.cars = [];
    }

    orderCar (customer, auto) {
        let customerName = customer.getCustomerName();
        console.log(`${customerName} ordered ${auto}`);
        this.addCar(auto);
    }

    addCar (auto) {
        this.cars.push(auto);
    }
    getCarList () {
        return this.cars;
    }
}

class Customer {
    constructor (name, carMediator) {
        this.name = name;
        this.carMediator = carMediator;
    }

    getCustomerName () {
        return this.name;
    }

    makeCar (auto) {
        this.carMediator.orderCar(this, auto);
    }
}

let mediator = new CarMediator();
let customer = new Customer('John', mediator);
customer.makeCar('audi');

console.log(mediator.getCarList());