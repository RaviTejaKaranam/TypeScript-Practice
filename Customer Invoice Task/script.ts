class Customer{
  id: number;
  name: string;
  discount: number;

  constructor(id:number,name:string,discount:number){
    this.id = id;
    this.name = name;
    this.discount = discount;
  }
  getID():number{
    return this.id;
  }
  getName(): string{
    return this.name;
  }
  getDiscount(): number{
    return this.discount
  }
  setDiscount(discount: number):void{
    this.discount = discount
  }
  toString(): string{
    return `${this.name}(${this.id})`
  }
}

class Invoice{
  id: number;
  customer: Customer;
  amount: number;
  constructor(id:number,customer:Customer,amount:number){
    this.id = id;
    this.customer = customer;
    this.amount = amount
  }
  getId():number{
    return this.id;
  }
  getCustomer():Customer{
    return this.customer
  }
  setCustomer(customer:Customer){
    this.customer = customer
  }
  getAmount():string{
    return this.amount + ""
  }
  setAmount(amount:number):void{
    this.amount = amount
  }
  getCustomerName():string{
    return this.customer.name
  }
  getAmountAfterDiscount():number{
    let amountAfterDiscount = (this.amount * this.customer.discount)/100
    return amountAfterDiscount
  }
}
class account extends Customer{
  id: number;
  customer: Customer;
  balance: number = 0;
  constructor(id:number,name:string,discount:number,accountId:number,customer:Customer,balance:number){
    super(id,name,discount);
    this.id = accountId;
    this.customer = customer;
    this.balance = balance
  }
  getID():number{
    return this.id;
  }
  getCustomer():Customer{
    return this.customer
  }
  getBalance():number{
    return this.balance
  }
  setBalance(balance:number):void{
    this.balance = balance
  }
  toString():string{
    let customerNameId = this.customer.toString()
    return `${customerNameId} balance = ${this.balance}`

  }
  getCustomerName():string{
    return this.customer.name
  }
  deposit(amount:number):account{
    this.balance += amount;
    return new account(this.customer.id,this.customer.name,this.customer.discount,this.id,this.customer,this.balance)
  }
  withdraw(amount:number):account{
    if(this.balance > amount){
      this.balance -= amount
    }
    else{
      console.log("Amount withdrwan exceeds the current balance")
    }
    return new account(this.customer.id,this.customer.name,this.customer.discount,this.id,this.customer,this.balance)
  }
}
let ravi = new Customer(1,"Ravi",50)
let invoice = new Invoice(1,ravi,2000)
// console.log(invoice.getAmountAfterDiscount())
let customerAccount = new account(1,"Ravi",50,1,ravi,0)
console.log(customerAccount.withdraw(2000))
