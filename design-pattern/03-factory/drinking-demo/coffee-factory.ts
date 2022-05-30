// 抽象类不允许 new , 一个咖啡类型的抽象类，定义咖啡里面有 latte, moca, capppuccino
export abstract class Coffee {
    name:string 
    getName() {
        console.log(`this is ${this.name}`);
      }
}
// 具体类
export class Latte extends Coffee {
    constructor(){
        super()
        this.name = 'Latte'
    }
}

export class Moca extends Coffee{
    constructor(){
        super()
        this.name = 'Moca'
    }
}

export class Cappuccino extends Coffee{
  constructor(){
      super()
      this.name = 'Cappuccino'
  }
}

// 每次新增一个产品
export class CoffeeFactory {
    // 子类
  static getCoffee(type?: string): Coffee {
    switch (type) {
      case "latte":
        return new Latte()
      case "moca":
        return new Moca();
        case "cappuccino":
          return new Cappuccino()
      default:
        console.log('no coffee provided')
        return
    }
  }
}

const A = CoffeeFactory.getCoffee('moca')
// A.getName()
