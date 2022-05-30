class DB{
    record(){
        console.log('log by db')
    }
}

class MQ{
    record(){
        console.log('log be mq')
    }
}

function test(item:any){
    item.record()
}

const db = new DB()

const mq = new MQ()
test(db)
test(mq)