let baseStrategy = amount => amount;
let premiumStrategy = amount => amount * 0.85;
let platinumStrategy = amount => amount * 0.6;

class Cart {
    constructor (discount) {
        this.discount = discount;
        this.amount = this.amount;
    }

    checkDiscount () {
        return this.discount(this.amount);
    }
    setAmount (amount) {
        this.amount = amount;
    }
}

let baseCustomer = new Cart(baseStrategy);
let premiumCustomer = new Cart(premiumStrategy);
let platinumCustomer = new Cart(platinumStrategy);

baseCustomer.setAmount(10000);
console.log(baseCustomer.checkDiscount());

premiumCustomer.setAmount(10000);
console.log(premiumCustomer.checkDiscount());

platinumCustomer.setAmount(10000);
console.log(platinumCustomer.checkDiscount());