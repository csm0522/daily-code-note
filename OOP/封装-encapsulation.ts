interface WalletInterface {
  getId(): number;
  getCreatedTime(): Date;
  getBalance(): number;
  getLastModifiedTime(): Date;
  income(income: number): void;
  outcome(cost: number): void;
}

class Wallet implements WalletInterface {
  private iid: number = 0; // 这里要有 uuid 生成器才能保证唯一性
  private createdAt: Date = new Date();
  private balance: number = 0;
  private updatedAt: Date;

  constructor() {
    this.iid = this.iid + 1;
  }

  getId(): number {
    return this.iid;
  }

  getCreatedTime(): Date {
    return this.createdAt;
  }
  getBalance(): number {
    return this.balance;
  }

  getLastModifiedTime(): Date {
    return this.updatedAt;
  }

  income(income: number): void {
    this.balance += income;
    this.updatedAt = new Date();
  }

  outcome(cost: number): void {
    if (cost > this.balance) {
      throw Error("the balance is not enough for costing");
    }
    this.balance -= cost;
    this.updatedAt = new Date();
  }
}

const wa = new Wallet();
console.log(wa.getId());

wa.income(300)
console.log(wa.getBalance())
wa.outcome(500)
console.log(wa.getBalance())