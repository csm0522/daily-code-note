// https://blog.csdn.net/w440149517/article/details/114026446
// https://stackoverflow.com/questions/45954157/understanding-the-extends-function-generated-by-typescript/46458070#46458070?newreg=8d42220af9bd4a5faa3469147a422af4
// https://blog.csdn.net/qq_19300203/article/details/72566136

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(hand) {
        this.hand = 2; // 变量
        this.hand = hand;
    }
    Animal.prototype.eat = function () {
        console.log('Animal eatting');
    };
    Animal.cell = 'mono-cell'; // 静态属性挂在 ’class‘ 上
    return Animal;
}());

var Monkey = /** @class */ (function (_super) {
    __extends(Monkey, _super);
    function Monkey(hand, foot) {
        var _this = _super.call(this, hand) || this;
        _this.foot = 2;
        _this.foot = foot;
        return _this;
    }
    Monkey.prototype.run = function () {
        console.log('Monkey running ');
    };
    return Monkey;
}(Animal));
var monkey = new Monkey(2, 4);
console.log(monkey);
monkey.run();
monkey.eat();
