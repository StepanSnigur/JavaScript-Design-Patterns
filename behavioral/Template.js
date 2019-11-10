class ConveyorTemplate {
    build () {
        this.installEngine();
        this.installInterior();
        this.paint();
    }
}

class Audi extends ConveyorTemplate {
    installEngine () {
        console.log('Installed V8 engine');
    }
    installInterior () {
        console.log('Installed leather interior');
    }
    paint () {
        console.log('Painted in red color');
    }
}
class BMW extends ConveyorTemplate {
    installEngine () {
        console.log('Installed V6 engine');
    }
    installInterior () {
        console.log('Installed plastic interior');
    }
    paint () {
        console.log('Painted in black color');
    }
}

let bmw = new BMW();
bmw.build();

let audi = new Audi();
audi.build();