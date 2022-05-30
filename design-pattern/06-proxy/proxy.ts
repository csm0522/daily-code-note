/*  static proxy */

// 抽象类，只定义了接口。 代理和实体类都需要继承这个接口，保持代理和实体类的调用一致性
interface Subject {
    request(): void
}

// 实体类
class RealSubject implements Subject {
    request(): void {
        console.log("request in real subject")
    }
}

// 代理类
class SubjectProxy implements Subject {
    realSubject: RealSubject

    constructor(subject: RealSubject) {
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
const dbSubject = new RealSubject()
const dbProxy = new SubjectProxy(dbSubject)
dbProxy.request()