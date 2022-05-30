class Animal {
    static cell: string = 'mono-cell'
    hand: number = 2
    constructor(hand: number) {
        this.hand = hand
    }
    eat(): void {
        console.log('Animal eatting')
    }
}
class Monkey extends Animal {
    foot: number = 2
    constructor(hand: number, foot: number) {
        super(hand)
        this.foot = foot
    }
    run(): void {
        console.log('Monkey running ')
    }
    // @overwrite super class
    eat(): void {
        console.log('Monkey eatting')
    }
}

const monkey = new Monkey(2, 4)
console.log(monkey)
monkey.run()
monkey.eat()