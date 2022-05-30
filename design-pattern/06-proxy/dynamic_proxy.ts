/*  dynamic proxy */

// 抽象类，只定义了接口。 代理和实体类都需要继承这个接口，保持代理和实体类的调用一致性
interface Subject {
    request(): void
}

// 实体类
class RealSubject1 implements Subject {
    request(): void {
        console.log("request in real subject")
    }
}

// 实体类接口
class SubjectProxy1 implements Subject {
    realSubject: RealSubject1

    constructor(subject: RealSubject1) {
        this.realSubject = subject
    }

    preRequest() {
        console.log('pre request doing')
    }

    request(): void {
        this.preRequest()
        this.realSubject.request() // core
        console.log('request in proxy')
        this.postRequest()
    }

    postRequest() {
        console.log('post request doing')
    }
}
const dbSubject1 = new RealSubject1()
const dbProxy1 = new SubjectProxy1(dbSubject1)
dbProxy1.request()