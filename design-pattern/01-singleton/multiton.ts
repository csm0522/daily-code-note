class Multiton{

    private constructor(message:number){
        this.message = message + ''
    }

    private static instanceList: Multiton[] = []

    public static getInstance() : Multiton{
        if(!this.instanceList.length){
            // limited
            for(let i = 0;i<5;i++){
                this.instanceList.push(new Multiton(i))
            }
        }
        if(this.instanceList.length){
            // return strategy
            const randomIdx = Math.floor(Math.random() * 5)
            return this.instanceList[randomIdx]
        }
    }

    public message:string
    public hello(){
        console.log(this.message)
    }
    
}

const a1 = Multiton.getInstance()
const a2 = Multiton.getInstance()
const a3 = Multiton.getInstance()


a1?.hello()
a2?.hello()
a3?.hello()