/* 虚拟钱包 */

/* 贫血 */

const walletRecords: VirtualWallet12_Poor[] = []

class VirtualWallet12_Poor {
    private id: number
    private createdAt: Date
    private balance: number

    constructor(id: number) {
        // this.id = generateUuid() || id
        this.id = id
        this.createdAt = new Date()
        this.balance = 0
    }

    get walletId() {
        return this.id
    }
    get currentBalance() {
        return this.balance
    }
    // 这些相当于 sql
    addAmount(amount: number) {
        this.balance += amount
    }
    reduceAmount(amount: number) {
        if (this.balance < amount) {
            throw Error('the transition amount is exceed the balance of the wallet')
        }
        this.balance -= amount
    }

}


/* 借记 */
function income(walletId: number, amount: number) {
    // 1. find the wallet id
    const wallet = walletRecords.find(item => item.walletId == walletId)
    if (!!wallet) {
        // 2. add balance of this wallet
        wallet.addAmount(amount)
        return { status: "success", msg: `The current balance of wallet no.${walletId} is:${wallet.currentBalance}` }
    }
    return { status: "error" }
}

function outcome(walletId: number, amount: number) {
    const wallet = walletRecords.find(item => item.walletId == walletId)
    if (!!wallet) {
        // 2. add balance of this wallet
        wallet.reduceAmount(amount)
        return { status: "success", msg: `The current balance of wallet no.${walletId} is:${wallet.currentBalance}` }
    }
    return { status: "error" }
}

walletRecords.push(new VirtualWallet12_Poor(1), new VirtualWallet12_Poor(2))

const msg = income(1, 20)
console.log(msg)
const msg2 = outcome(1, 10)
console.log(msg2)