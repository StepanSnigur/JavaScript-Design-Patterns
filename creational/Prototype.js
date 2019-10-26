class CarPrototype {
    constructor (name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    clone () {
        return new CarPrototype(this.name, this.price, this.description);
    }
}

let car = new CarPrototype('Tesla', 10000, 'this is a tesla car');

let car1 = car.clone();
console.log(car1);