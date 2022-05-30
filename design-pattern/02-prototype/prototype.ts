// 实例的方法、属性接口声明
interface CitationPrototype{
    name:string;
    display():void
    component:{event:string}
    clone():CitationPrototype
}

// implements 推断 interface
class Citation implements CitationPrototype{
    name:string;
    private info:number; // id
    school:string;
    // attention: 当面临内部还有引用对象时要注意深克隆的问题
    component: {event:string}
    
    constructor(name:string, school:string){
        this.name = name
        this.info = 0
        this.school = school
        this.component = { event: 'Good test'}
        console.log('奖状创建成功')
    }

    display(){
        console.log(`${this.name} 在 ${this.school} 获得奖状一张哦,${this.component.event}. ---id:${this.info}`)
    }

    setName(name:string){
        this.name = name
    }

    getName(){
        console.log(this.name)
        return this.name
    }

    clone():CitationPrototype{
        console.log('复制奖状成功')
        const copy = Object.create(this)
        copy.info +=1
        copy.component = Object.create(this.component)
        return copy
    }
}

const a = new Citation('zhang san','School 1')
const b = a.clone()
const c = b.clone()

c.component.event = 'Good Helper'
c.name = 'Li si'
a.display()
b.display()
c.display()
