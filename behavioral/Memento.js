class Memento {
    constructor(val) {
        this.val = val;
    }
}

let mementoCreator = {
    save (val) {
        return new Memento(val);
    },
    restore (memento) {
        return memento.val;
    }
}

class Caretaker {
    constructor() {
        this.mementos = [];
    }

    addMemento (memento) {
        this.mementos.push(memento);
    }
    getMemento (idx) {
        return mementoCreator.restore(this.mementos[idx]);
    }
}

let caretaker = new Caretaker();

caretaker.addMemento(mementoCreator.save('first memento'));
caretaker.addMemento(mementoCreator.save('second memento'));
caretaker.addMemento(mementoCreator.save('third memento'));

console.log(caretaker.getMemento(1));