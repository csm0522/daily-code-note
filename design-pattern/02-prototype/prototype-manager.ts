class PrototypeManager{
    private map:{}[] = []

    set(hashId:string,prototype:any){
        this.map[hashId] = prototype.clone()
    }

    get(hashId:string){
        return this.map[hashId].clone()
    }

    show(){
        for(let item in this.map){
            console.log(item)
        }
    }
}

class Name{
    name:string
    constructor(name:string){
        this.name = name
    }
    display(){
        console.log('name',this.name)
    }
    clone(){
        return Object.create(this)
    }
}

export class Color{
    color:string
    constructor(color:string){
        this.color = color
    }
    display(){
        console.log('color',this.color)
    }

    setColor(color:string){
        this.color = color
    }
    clone(){
        return Object.create(this)
    }
}

const manager = new PrototypeManager()
manager.set('blue-color',new Color('blue'))
manager.set('red-color',new Color('red'))
manager.set('cc',new Name('cc'))

manager.show()


manager.get('blue-color').setColor('green') // 已经取出了实例，所以不影响后面的实例
manager.get('red-color').display()
manager.get('cc').display()
manager.get('blue-color').display()