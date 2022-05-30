import { Latte, Moca, Coffee } from "./coffee-factory";

abstract class Sodas {
  name: string;
  getName() {
    console.log(`this is ${this.name}`);
  }
}

class Cola extends Sodas {
  constructor() {
    super();
    this.name = "Cola";
  }
}

abstract class Tea {
  name: string;
  getName() {
    console.log(`this is ${this.name}`);
  }
}

class PuEr extends Tea {
  constructor() {
    super();
    this.name = "普洱";
  }
}

abstract class DrinkingFactory {
  name: string;
  abstract produceCoffee(): Coffee;
  abstract produceSodas(): Sodas;
  abstract produceTea(): Tea;
  getList(): void {
    console.log(`${this.name} produce:`);
    console.log(this.produceCoffee());
    console.log(this.produceSodas());
    console.log(this.produceTea());
    console.log("------");
  }
}

class JapanFactory extends DrinkingFactory {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  produceCoffee(): Coffee {
    return new Moca();
  }
  produceSodas(): Sodas {
    return new Cola();
  }
  produceTea(): Tea {
    return null;
  }
}

class ChinaFactory extends DrinkingFactory {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  produceCoffee(): Coffee {
    return new Latte();
  }
  produceSodas(): Sodas {
    return new Cola();
  }
  produceTea(): Tea {
    return new PuEr();
  }
}

const Japan = new JapanFactory("toshida");
const China = new ChinaFactory("Shanghai");

Japan.getList();
China.getList();
