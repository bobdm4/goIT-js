class User {
    constructor({ name, age, followers }) {
        this.userName = name;
        this.userAge = age;
        this.userFollower = followers;
    }
    getInfo() {
        return `User ${this.userName} is ${this.userAge} years old and has ${this.userFollower} followers`
    };
}

const mango = new User({ name: 'Mango', age: 2, followers: 20 });
console.log(mango.getInfo()); // User Mango is 2 years old and has 20 followers

const poly = new User({ name: 'Poly', age: 3, followers: 17 });
console.log(poly.getInfo()); // User Poly is 3 years old and has 17 followers