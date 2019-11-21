class AutoNews {
    constructor() {
        this.news = '';
        this.users = [];
    }

    register (user) {
        this.users.push(user);
    }
    unregister (userId) {
        this.users.filter(id => userId !== id);
    }
    setNews (news) {
        this.news = news;
        this.notifyAllUsers();
    }
    notifyAllUsers () {
        return this.users.forEach(user => user.inform(this.news));
    }
}

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    inform (news) {
        console.log(`${this.name} has been informated about: ${news}`);
    }
}

let autoNews = new AutoNews();
autoNews.register(new User('Alex', 'sdf234hgu2323hjg'));
autoNews.register(new User('Michael', 'ksdjhf764jkkj487'));
autoNews.setNews('Hello world!');