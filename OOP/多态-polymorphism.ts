class DyArray {
  protected list: number[] = [];

  add(item: number) {
    this.list.push(item);
    console.log(this.list);
  }
}

class sortedDyArray extends DyArray {
  constructor(list?: number[]) {
    super();
  }

  add(item: number) {
    console.log('sortedDyArray')
    this.list.push(item);
    this.list.sort((a, b) => a - b);
    console.log(this.list);
  }
}

function main(list: DyArray) {
  list.add(63)
  list.add(12)
  list.add(4)
  list.add(45)
}

const list: DyArray = new sortedDyArray()
main(list)