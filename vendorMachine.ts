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
        if (this.isOn) {
            if (this.snacksQty > 0) {
                this.snacksQty --
                this.money += 2
            } else {
                throw new Error("La machine n'as plus de snacks :/")
            }
        } else {
            throw new Error("La machine est malheureusement éteinte :/")
        }
    }

    public reset(): void {
        this.isOn = false
        this.money = 0
        this.snacksQty = 50
        this.isOn = true
    }

    public shootWithFoot(): void {
        // vérif quantité snacks
        if (this.snacksQty >= 1 ) {
            this.snacksQty -= Math.floor(Math.random() * (this.snacksQty + 1))
        } else {
            throw new Error("bien essayé, mais y'a plus de snacks");
        }
        // vérif quantité monnaie
        if (this.money >= 1) {
            this.money -= Math.floor(Math.random() * (this.money + 1))
        } else {
            throw new Error("bien essayé, mais y'a plus d'argent");
        }
        this.isOn = false
    }
}

const vendorMachine = new VendorMachine()