"use strict";
let age = 30;
if (age < 50)
    age += 10;
let numbers = [1, 2, 3, '4'];
let user = [1, 'ishmael'];
class Account {
    id;
    owner;
    balance;
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid Amount");
        this.balance += amount;
    }
}

let account = new Account(1,)
//# sourceMappingURL=index.js.map