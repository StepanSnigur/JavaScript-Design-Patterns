class SportCar {
    info () {
        console.log('this is a sport car');
    }
}
class OffroadCar {
    info () {
        console.log('this is a offroad car');
    }
}

let sportCarFactory = () => new SportCar(); // <-- factory
let offroadCarFactory = () => new OffroadCar(); // <-- factory

let carProducer = kindOfCar => kindOfCar === 'sport' ? sportCarFactory : offroadCarFactory; // <-- abstract factory

let sportCar = carProducer('sport')();
sportCar.info();
let offroadCar = carProducer('offroad')();
offroadCar.info();