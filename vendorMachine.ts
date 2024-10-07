// TP :
// Créer une classe nommée "VendorMachine". Cette classe possède les propriétés suivantes :
// isOn (peut être true ou false)
// snacksQty (contient le nombre de snacks dans la machine)
// money (contient l'argent contenu dans la machine)
// Cette classe contient les méthodes suivantes :
// buySnack (permet d'acheter un snack. Tous les snacks sont à 2e)
// reset (permet de vider la machine de sa monnaie et de la remplir de snack (50 snack) mais il faut que la machine soit off)
// shootWithFoot (fait tomber 5 snack et 20e. Et eteint la machine)

class VendorMachine {
    private isOn: boolean
    private snacksQty: number
    private money: number

    public constructor() {
        this.isOn = false
        this.snacksQty = 50
        this.money = 0
    }

    public buySnack(): void {
        if (!this.isOn) {
            throw new Error("La machine est malheureusement éteinte :/")
        }
        if (this.snacksQty == 0) {
            throw new Error("La machine n'as plus de snacks :/")
        }
        this.snacksQty --
        this.money += 2
    }

    public reset(): void {
        this.isOn = false
        this.money = 0
        this.snacksQty += (50 - this.snacksQty)
        this.isOn = true
    }

    public shootWithFoot(): void {
        this.isOn = false

        this.dropItem(20, this.snacksQty)
        this.dropItem(5, this.money)
    }

    private dropItem(maxQty, item) {
        let itemToDrop = maxQty
        if (this.money < maxQty) {
            itemToDrop = item
        }
        item -= itemToDrop
    }
}

const vendorMachine = new VendorMachine()