// import { CoffeeFactory } from "./coffee-factory";
// const coffee = CoffeeFactory.getCoffee("latte");
// coffee.getName();

import { Latte, Cappuccino, Moca, Coffee } from "./coffee-factory";

abstract class CoffeeFactory {
  name: string;
  coffee:Coffee;
  abstract produceCoffee(): void;
  getCoffeeList() {
    console.log(`${this.name} can produce: `);
    this.coffee.getName()
    console.log("----------");
  }
}

class JapanCoffeeFactory extends CoffeeFactory {
  constructor(name: string) {
    super();
    this.name = name;
  }
  produceCoffee() {
    this.coffee = new Latte()
  }
}

class ChinaCoffeeFactory extends CoffeeFactory {
  constructor(name: string) {
    super();
    this.name = name;
  }
  produceCoffee() {
    this.coffee = new Moca()
  }
}
const China = new ChinaCoffeeFactory("shenzhen");
const Japan = new JapanCoffeeFactory("toshita");
China.produceCoffee();
China.getCoffeeList();

Japan.produceCoffee();
Japan.getCoffeeList();


