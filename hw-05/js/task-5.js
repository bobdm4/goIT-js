class Car {

    static getSpecs(mustang) {
        // return `${this._maxSpeed}, ${this._speed}, ${this._isOn}, ${this._distance}, ${this._price}`;
        console.log('mustang :', mustang);
    }

    constructor({ maxSpeed, price }) {
        this._maxSpeed = maxSpeed;
        this._speed = 0;
        this._isOn = false;
        this._distance = 0;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    turnOn() {
        this._isOn = true;
    }

    turnOff() {
        this._isOn = false;
        this._speed = 0;
    }

    accelerate(value) {
        if ((this._speed + value) <= this._maxSpeed) {
            this._speed += value;
        }
    }

    decelerate(value) {
        if ((this._speed - value) >= 0) {
            this._speed -= value
        }
    }

    drive(hours) {
        if (this._isOn === true) {
            this._distance = this._distance + this._speed * hours
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log('mustang :', mustang);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000