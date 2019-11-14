class Door {
    constructor() {
        this.state = 'closed';
    }

    open () {
        console.log('Door opened');
        this.state = 'opened';
    }
    close () {
        console.log('Door closed');
        this.state = 'closed';
    }
}

class OpenDoorCommand {
    constructor(door) {
        this.door = door;
    }

    execute () {
        this.door.open();
    }
}
class CloseDoorCommand {
    constructor(door) {
        this.door = door;
    }

    execute () {
        this.door.close();
    }
}

class Man {
    constructor(command) {
        this.command = command;
    }

    execute () {
        this.command.execute();
    }
}

let closeDoorCommand = new OpenDoorCommand(new Door());
let man = new Man(closeDoorCommand);

man.execute();