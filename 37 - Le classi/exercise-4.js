class BankAccount {
  constructor(EUR) {
    this._EUR = EUR;
  }
  deposit(addEUR) {
    this._EUR += addEUR;
  }
  withdraw(subtractEUR) {
    this._EUR -= subtractEUR;
  }
  view() {
    console.log(this._EUR);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
