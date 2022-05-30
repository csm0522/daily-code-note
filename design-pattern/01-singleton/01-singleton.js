class Foo {
  constructor(msg) {
    if (Foo.singleton) {
      return Foo.singleton;
    }

    this.msg = msg;
    Foo.singleton = this;
    return Foo.singleton;

  }

  greeting(){
    console.log(this.msg)
  }
}

let a = new Foo('a')
let b = new Foo('v')

a.greeting()
b.greeting()
