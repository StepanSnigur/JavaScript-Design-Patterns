class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }

    setNextStatus () {
        return new this.nextStatus();
    }
}

class WaitingForPayment extends OrderStatus {
    constructor() {
        super('waiting for payment', Shipping);
    }
}
class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered);
    }
}
class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Delivered);
    }
}

class Order {
    constructor() {
        this.state = new WaitingForPayment();
    }

    setNext () {
        this.state = this.state.setNextStatus();
    }
}

let newOrder = new Order();

console.log(newOrder.state.name);
newOrder.setNext();
console.log(newOrder.state.name);
newOrder.setNext();
console.log(newOrder.state.name);