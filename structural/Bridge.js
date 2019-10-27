class Color {
    constructor (color) {
        this.color = color;
    }

    getColor () {
        return this.color;
    }
}
class BlackColor extends Color {
    constructor() {
        super('black');
    }
}
class RedColor extends Color {
    constructor() {
        super('red');
    }
}

class Model {
    constructor (color) {
        this.color = color;
    }
}

class Audi extends Model {
    constructor (color) {
        super(color);
    }

    paint () {
        console.log(`Audi painted in ${this.color.getColor()}`);
    }
}
class BMW extends Model {
    constructor (color) {
        super(color);
    }

    paint () {
        console.log(`BMW painted in ${this.color.getColor()}`);
    }
}

let audi = new Audi(new BlackColor());
audi.paint();

let bmw = new BMW(new RedColor());
bmw.paint();