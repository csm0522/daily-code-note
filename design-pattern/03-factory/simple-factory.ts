// 抽象类不允许 new 
// 抽象类
abstract class Product {
    name:string 
    show() {
        console.log(`this is ${this.name}`);
      }
}
// 具体类
class AProduct extends Product {
    constructor(name?:string){
        super()
        this.name = name ?? 'A730'
    }
}

class BProduct extends Product{
    constructor(name?:string){
        super()
        this.name = name ?? 'B370'
    }
}

// 每次新增一个产品
class SimpleFactory {
    // 子类
  static makeProduct(type?: string): Product {
    switch (type) {
      case "A":
        return new AProduct();
      default:
        return new BProduct();
    }
  }
}

const A = SimpleFactory.makeProduct('A')
A.show()
