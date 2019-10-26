class AutoAdapter {
    constructor (engine) {
        this.engine = engine;
    }

    installNewEngine () {
        this.engine.install();
    }
}

class V8 {
    installNewEngine () {
        console.log('v8');
    }
}
class V6 {
    install () {
        console.log('v6');
    }
}

let v8Engine = new V8();
v8Engine.installNewEngine();

let adaptedV6Engine = new AutoAdapter(new V6());
adaptedV6Engine.installNewEngine();