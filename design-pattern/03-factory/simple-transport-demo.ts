enum Enviroment {
  ROAD = "road",
  WATER = "water",
}

abstract class Transport {
  name: string;
  speed: string;
  enviroment: string;
  run(): void {
    console.log(`${this.name} is running at speed ${this.speed}`);
  }
}

class Ship extends Transport {
  constructor() {
    super();
    this.name = "Ship";
    this.enviroment = Enviroment.WATER;
    this.speed = "30 miles/h";
  }
}

class Truck extends Transport {
  constructor() {
    super();
    this.name = "Mini Van";
    this.enviroment = Enviroment.ROAD;
    this.speed = "80 km/h";
  }
}

class DeliverFactory {
    // 根据实际需要返回对应的具体类
  static getLogistics(enviroment: string) {
    switch (enviroment) {
      case Enviroment.WATER:
        return new Ship();
      case Enviroment.ROAD:
        return new Truck();
      default:
        return null;
    }
  }
}

class RoadLogistics {
    transport:Transport
    constructor(){
        // 调用方通过调用工具方法，而不关心实际内容
        this.transport = DeliverFactory.getLogistics(Enviroment.ROAD)
    }
    other(){
        // ...
    }
}

const rl = new RoadLogistics()
rl.transport.run()