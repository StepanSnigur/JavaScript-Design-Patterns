class Door {
    openDoor () {
        console.log('Door opened');
    }
    closeDoor () {
        console.log('Door closed');
    }
}

class DoorProxy {
    constructor(door) {
        this.door = door;
    }

    openDoor (password) {
        if (this.checkPassword(password)) this.door.openDoor();
        else console.log('Incorrect password');
    }
    closeDoor () {
        this.door.closeDoor();
    }

    checkPassword (password) {
        return password === 'correctpassword';
    }
}

let door = new DoorProxy(new Door());
door.openDoor('wrongpassword');
door.openDoor('correctpassword');