class VisitorProvider {
    accept (visitor) {
        visitor(this);
    }
}

class User extends VisitorProvider {
    constructor(name, age, id) {
        super();
        this.name = name;
        this.age = age;
        this.id = id;
    }

    sayHello () {
        console.log(`Hello, ${name}`);
    }
    getId () {
        return this.id;
    }
}

let exportVisitor = (user) => {
    console.log(`Exported user: ${user.getId()}`);
}

let user = new User('Andrey', 21, '23GKH*i87dfgkj*');
user.accept(exportVisitor);