"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(id, name, discount) {
        this.id = id;
        this.name = name;
        this.discount = discount;
    }
    Customer.prototype.getID = function () {
        return this.id;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getDiscount = function () {
        return this.discount;
    };
    Customer.prototype.setDiscount = function (discount) {
        this.discount = discount;
    };
    Customer.prototype.toString = function () {
        return this.name + "(" + this.id + ")";
    };
    return Customer;
}());
var Invoice = /** @class */ (function () {
    function Invoice(id, customer, amount) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
    Invoice.prototype.getId = function () {
        return this.id;
    };
    Invoice.prototype.getCustomer = function () {
        return this.customer;
    };
    Invoice.prototype.setCustomer = function (customer) {
        this.customer = customer;
    };
    Invoice.prototype.getAmount = function () {
        return this.amount + "";
    };
    Invoice.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    Invoice.prototype.getCustomerName = function () {
        return this.customer.name;
    };
    Invoice.prototype.getAmountAfterDiscount = function () {
        var amountAfterDiscount = (this.amount * this.customer.discount) / 100;
        return amountAfterDiscount;
    };
    return Invoice;
}());
var account = /** @class */ (function (_super) {
    __extends(account, _super);
    function account(id, name, discount, accountId, customer, balance) {
        var _this = _super.call(this, id, name, discount) || this;
        _this.balance = 0;
        _this.id = accountId;
        _this.customer = customer;
        _this.balance = balance;
        return _this;
    }
    account.prototype.getID = function () {
        return this.id;
    };
    account.prototype.getCustomer = function () {
        return this.customer;
    };
    account.prototype.getBalance = function () {
        return this.balance;
    };
    account.prototype.setBalance = function (balance) {
        this.balance = balance;
    };
    account.prototype.toString = function () {
        var customerNameId = this.customer.toString();
        return customerNameId + " balance = " + this.balance;
    };
    account.prototype.getCustomerName = function () {
        return this.customer.name;
    };
    account.prototype.deposit = function (amount) {
        this.balance += amount;
        return new account(this.customer.id, this.customer.name, this.customer.discount, this.id, this.customer, this.balance);
    };
    account.prototype.withdraw = function (amount) {
        if (this.balance > amount) {
            this.balance -= amount;
        }
        else {
            console.log("Amount withdrwan exceeds the current balance");
        }
        return new account(this.customer.id, this.customer.name, this.customer.discount, this.id, this.customer, this.balance);
    };
    return account;
}(Customer));
var ravi = new Customer(1, "Ravi", 50);
var invoice = new Invoice(1, ravi, 2000);
// console.log(invoice.getAmountAfterDiscount())
var customerAccount = new account(1, "Ravi", 50, 1, ravi, 0);
console.log(customerAccount.withdraw(2000));
