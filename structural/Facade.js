class CarConveyor {
    setEngine () {
        console.log('Engine set');
    }
    changeInterior () {
        console.log('Change interior');
    }
    setBody () {
        console.log('Body set');
    }
    addElectronics () {
        console.log('Add electronics');
    }
    paint () {
        console.log('Car painted');
    }
}

class CarFacade {
    constructor (car) {
        this.car = car;
    }

    assembleCar () {
        this.car.setEngine();
        this.car.changeInterior();
        this.car.setBody();
        this.car.addElectronics();
        this.car.paint();
    }
}

let conveyor = new CarFacade(new CarConveyor());
conveyor.assembleCar();