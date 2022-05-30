interface AbstractFactory{
    newProduct(thing:string):Product
}

class AFactory implements AbstractFactory{
    info:string = 'made in afactory'

    newProduct(thing:string): Product {
        console.log(this.info)
        return new AProduct(thing)
    }
}

class BFactory implements AbstractFactory{
    info:string = 'made in bfactory'


    newProduct(thing:string): Product {
        console.log(this.info)
        return new BProduct('thing')
    }
}

abstract class Product{
    name:string
    show(){
        console.log(this.name)
    }
}

class AProduct extends Product{
    constructor(name:string){
        super()
        this.name = name + '---AAA'
    }
}

class BProduct extends Product{
    constructor(name:string){
        super()
        this.name = name + '---BBB'
    }
}

const AF = new AFactory()
AF.newProduct('tool cat').show()