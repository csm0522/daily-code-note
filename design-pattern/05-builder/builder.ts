/**
 * @method House
 */
class House {
  wall: number = 4;
  door: number = 1;
  room: number = 1;
  hasGarden: boolean = false;
  hasSwimPool: boolean = false;

  setWall(wall: number) {
    this.wall = wall;
  }
  setDoor(door: number) {
    this.door = door;
  }
  setRooms(room: number) {
    this.room = room;
  }
  setGarden() {
    this.hasGarden = true;
  }
  setSwimPool() {
    this.hasSwimPool = true;
  }

  display() {
    console.log(
      `This house has ${this.wall} walls,${this.door} doors,${this.room} rooms.`
    );
    if (this.hasSwimPool) {
      console.log(" and with a swimming pool");
    }

    if (this.hasGarden) {
      console.log(" and with a garden");
    }
  }
}

abstract class Builder {
  house: House = new House();
  abstract buildWall();
  abstract buildDoor();
  abstract buildRoom();
  abstract buildGarden();
  abstract buildSwimpool();
  getHouse(): House {
    return this.house;
  }

  reset() {
    this.house = new House();
  }
}
// big house
class BigBuilder extends Builder {
  constructor() {
    super();
  }

  buildWall() {
    this.house.setWall(8);
  }
  buildDoor() {
    this.house.setDoor(3);
  }
  buildRoom() {
    this.house.setRooms(10);
  }

  buildGarden() {
    this.house.setGarden();
  }
  buildSwimpool() {
    this.house.setSwimPool();
  }
}
// small house
class SmallBuilder extends Builder {
  constructor() {
    super();
  }

  buildWall() {
    this.house.setWall(4);
  }
  buildDoor() {
    this.house.setDoor(1);
  }
  buildRoom() {
    this.house.setRooms(2);
  }
  buildGarden() {}
  buildSwimpool() {}
}

class Director {
  private builder: Builder;

  public setBuilder(builder: Builder) {
    this.builder = builder;
  }

  // 对于指挥家来说，他不关心内部细节，只需要按照一定流程执行即可
  public make() {
    this.builder.buildWall();
    this.builder.buildDoor();
    this.builder.buildRoom();
    this.builder.buildGarden();
    this.builder.buildSwimpool();
  }

  public getBuilding() {
    let house = this.builder.getHouse();
    this.builder.reset();
    house.display();
  }
}

const director = new Director();

function buildMiniHouse(director: Director) {
  const builder = new SmallBuilder();

  director.setBuilder(builder);
  director.make();
  director.getBuilding();
}

function buildLuaxHouse(director: Director) {
  const builder = new BigBuilder();

  director.setBuilder(builder);
  director.make();
  director.getBuilding();
}

buildMiniHouse(director);
buildLuaxHouse(director);
