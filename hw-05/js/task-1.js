const Account = function (login, email) {
    this.userLogin = login;
    this.userEmail = email;
}

Account.prototype.getInfo = function () {
    return `Login: ${this.userLogin}, Email: ${this.userEmail}`;
}

console.log(Account.prototype.getInfo); // function

const mango = new Account('Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
console.log(poly.getInfo()); // Login: Poly, Email: poly@mail.com
