class PaySystem {
    pay (price) {
        if (this.canPay(price)) {
            console.log(`You can pay by ${this.name}`);
        } else if (this.incomer) {
            console.log(`You can not pay by ${this.name}`);
            this.incomer.pay(price);
        } else {
            console.log('Sorry, not enough money');
        }
    }

    canPay (price) {
        return this.balance >= price;
    }
    setNext (paySystem) {
        this.incomer = paySystem;
    }
}

class MasterCard extends PaySystem {
    constructor (balance) {
        super();
        this.balance = balance;
        this.name = 'MasterCard';
    }
}
class Visa extends PaySystem {
    constructor (balance) {
        super();
        this.balance = balance;
        this.name = 'Visa';
    }
}
class Mir extends PaySystem {
    constructor (balance) {
        super();
        this.balance = balance;
        this.name = 'Mir';
    }
}

let master = new MasterCard(1000);
let visa = new Visa(3000);
let mir = new Mir(10000);

master.setNext(visa);
visa.setNext(mir);

master.pay(2000);