interface IUserController {
    login(): void
    register(): void
}

class UserController implements IUserController {
    login() {
        console.log("logining")
    }

    register() {
        console.log("register")
    }
}

class LogController {
    log(record: string) {
        console.log(`extension original controller method: ${record}`)
    }
}

class UserControllerProxy1 implements IUserController {

    logController = new LogController()
    userController = new UserController()

    login(): void {
        this.userController.login()
        this.logController.log('login')
    }

    register(): void {
        this.userController.register()
        this.logController.log('register')
    }
}

// proxy by interface
const userController = new UserControllerProxy1()
userController.login()

// proxy by extends, 当原 controller 为外部类
class UserControllerProxy2 extends UserController {

    logController = new LogController()
    constructor() {
        super()
    }

    login(): void {
        super.login()
        this.logController.log("login")
    }

    register(): void {
        super.register()
        this.logController.log("register")
    }

}

// proxy by extends
const userController2 = new UserControllerProxy2()
userController2.register()