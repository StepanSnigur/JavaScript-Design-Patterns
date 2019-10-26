class Tool {
    setName (name) {
        this.name = name;
    }
    setPrice (price) {
        this.price = price;
    }
    getName () {
        return this.name;
    }
    getPrice () {
        return this.price;
    }
}

class Hammer extends Tool {
    constructor () {
        super();
        this.setName('hammer');
        this.setPrice(1000);
    }
}
class Screwdriver extends Tool {
    constructor () {
        super();
        this.setName('screwdriver');
        this.setPrice(1500);
    }
}
class Roulette extends Tool {
    constructor () {
        super();
        this.setName('roulette');
        this.setPrice(3500);
    }
}

class ToolComposite extends Tool {
    constructor() {
        super();
        this.tools = [];
    }

    addTool (tool) {
        this.tools.push(tool);
    }
    getPrice () {
        return this.tools.map(el => el.getPrice()).reduce((a, b) => a + b);
    }
}

class Workshop extends ToolComposite {
    constructor () {
        super();
        this.setName('workshop');
    }
}

let workshop = new Workshop();
workshop.addTool(new Screwdriver());
workshop.addTool(new Roulette());
workshop.addTool(new Hammer());

console.log(workshop.getName(), workshop.getPrice());