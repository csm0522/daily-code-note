// 抽象产品族的接口定义
abstract class Transport {
  name: string;
  made: string;
  show(): void {
    console.log(`The ${this.name} is made from ${this.made}`);
  }
}
// 具体产品内容实现
class Bike extends Transport {
  constructor(made: string) {
    super();
    this.name = "Product Bike";
    this.made = made;
  }
}

class Car extends Transport {
  constructor(made: string) {
    super();
    this.name = "Product Car";
    this.made = made;
  }
}

// 抽象产品族的接口定义
abstract class Light {
  name: string;
  made: string;
  light(): void {
    console.log(`Trun on the ${this.name}`);
  }
}

class BallLight extends Light {
  constructor(made: string) {
    super();
    this.name = "Product Ball light";
    this.made = made;
  }
}

class BarLight extends Light {
  constructor(made: string) {
    super();
    this.name = "Product Bar Light";
    this.made = made;
  }
}

// 抽象工厂的接口定义, 抽象工厂的生产方式应该是返回一个抽象产品族，而非具体的产品
abstract class Factory {
  name: string;
  abstract produceTransport(): Transport;
  abstract produceLight(): Light;
}
// 具体工厂实现构造产品子类的功能
class ShangHaiFactory extends Factory {
  constructor() {
    super();
    this.name = "Shanghai";
  }

  produceTransport(type?: string): Transport {
    switch (type) {
      case "water":
        return new Bike(this.name);
      default:
        return new Car(this.name);
    }
  }

  produceLight(type?: string): Light {
    switch (type) {
      case "ball":
        return new BallLight(this.name);
      default:
        return new BarLight(this.name);
    }
  }
}

class GuangZhouFactory extends Factory {
  constructor() {
    super();
    this.name = "Guangzhou";
  }

  produceTransport(type?: string): Transport {
    switch (type) {
      case "bike":
        return new Bike(this.name);
      default:
        return new Car(this.name);
    }
  }

  produceLight(type?: string): Light {
    switch (type) {
      case "ball":
        return new BallLight(this.name);
      default:
        return new BarLight(this.name);
    }
  }
}

const GZ = new GuangZhouFactory();
const SH = new ShangHaiFactory();

const GZ_A = GZ.produceLight('ball');
const SH_B = SH.produceTransport('bike');

GZ_A.light();
SH_B.show();
