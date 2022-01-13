// class Termek {
//     constructor(elem, adat) {
//         this.elem = elem
//         this.adat = adat
//         this.cimElem = this.elem.children(".nev")
//         this.kepElem = this.elem.children(".kep")
//         this.leirasElem = this.elem.children(".leiras")
//         this.arElem = this.elem.children(".ar")
//         this.gombElem = this.elem.children(".kosarba")
//         this.setAdat(adat)
//         this.gombElem.on("click", () => {
//             this.kattintasTrigger()
//         })
//     }
//     setAdat(ertek) {
//         this.cimElem.html(ertek.nev)
//         this.kepElem.attr("src", ertek.kep)
//         this.leirasElem.html(ertek.leiras)
//         this.arElem.html(ertek.ar)
//     }
//     kattintasTrigger() {
//         let ujesemeny = new CustomEvent("kosarba", { detail: this.adat })
//         window.dispatchEvent(ujesemeny)
//     }
// }
class Termek {
    constructor(elem, adat) {
        this.elem = elem
        this.adat = adat
        this.cimElem = this.elem.find(".nev")
        this.leirasElem = this.elem.find(".leiras")
        this.arElem = this.elem.find(".ar")
    }
    setAdat(ertek) {
        this.cimElem.html(ertek.nev)

        this.kepElem.attr("src", ertek.kep)
        this.leirasElem.html(ertek.leiras)
        this.arElem.html(ertek.ar)
    }

}
class TermekVasarlo extends Termek {
    constructor(elem, adat) {
        super(elem, adat)
        this.kepElem = this.elem.children(".kep")
        this.gombElem = this.elem.children(".kosarba")
        this.setAdat(adat)
        this.gombElem.on("click", () => {
            this.kattintasTrigger()
        })
    }
    kattintasTrigger() {
        const ujesemeny = new CustomEvent("kosarba", { detail: this.adat })
        window.dispatchEvent(ujesemeny)
    }
}
class TermekAdmin extends Termek {
    constructor(elem, adat) {
        super(elem, adat)
        this.kepElem = this.elem.find(".kep")
        this.setAdat(adat)
        this.torlesGomb = this.elem.find(".torol")
        this.modositGomb = this.elem.find(".modosit")
        this.torlesGomb.on("click", () => {
            this.torolTrigger()
        })
        this.modositGomb.on("click", () => {
            this.modositTrigger()
        })
    }
    torolTrigger() {
        const ujesemeny = new CustomEvent("torles", { detail: this.adat })
        window.dispatchEvent(ujesemeny)
    }
    modositTrigger() {
        const ujesemeny = new CustomEvent("modosit", { detail: this.adat })
        window.dispatchEvent(ujesemeny)
    }
}