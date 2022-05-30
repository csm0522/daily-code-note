// class Animal {
//     static cell: string = 'mono-cell'
//     hand: number = 2
//     constructor(hand: number) {
//         this.hand = hand
//     }
//     eat(): void {
//         console.log('Animal eatting')
//     }
// }
// class Monkey extends Animal {
//     foot: number = 2
//     constructor(hand: number, foot: number) {
//         super(hand)
//         this.foot = foot
//     }
//     run(): void {
//         console.log('Monkey running ')
//     }
// }




// 所谓的组合寄生继承是原型继承和构造方法继承的结合体，
// 目的是要完全继承父类的静态属性/方法、普通属性/方法
// 有时候也叫伪经典继承，指的是将原型链和借用构造函数的技术组合到一块，从而返回二者之长的一种继承模式。
// 其背后的思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。
function initExtend(subClass, superClass) {
    var extendStatic = function (subClass, superClass) {
        for (var property in superClass) {
            // 将父类的方法浅拷贝给子类
            if (superClass.hasOwnProperty(property)) {
                subClass[property] = superClass[property]
            }
        }
        // 子类的原型链 __proto__ 指向父类
        // Object.serPrototypeOf(subClass,superClass); // 官方不推荐
        subClass.prototype = Object.create(superClass)
    }
    extendStatic(subClass, superClass)
    function subFunction() {
        this.constructor = subClass
    }
    // 原型链的方式实现对原型属性和方法的继承
    subFunction.prototype = superClass.prototype
    subClass.prototype = new subFunction()
}

function Animal2(hand: number) {
    this.hand = hand || 2
}

Animal2.cell = 'mono-cell'
Animal2.prototype.eat = function () {
    console.log('Animal eatting')
}

function Monkey2(foot: number, hand: number) {
    // 使用构造函数实现对实例属性的继承
    Animal2.apply(this, { hand: hand })
    this.foot = foot || 2
}

initExtend(Monkey2, Animal2)

Monkey2.prototype.run = function () {
    console.log("monkey running")
}

// Monkey2.prototype.eat = function () {
//     console.log("monkey eatting")
// }

var monkey1 = new Monkey2(2, 4);
console.log(monkey1);
monkey1.run();
monkey1.eat();