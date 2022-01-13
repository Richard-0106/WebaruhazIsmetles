class Kosar {
    constructor() {
        this.kosarElem = $("#kosaram")
        this.osszAr = $("#osszAr")
        this.kosarTomb = []

        //kiolvassa a localstorgeból az adatokat, és betesszük a kosár tömbbe

        this.kosarTomb = JSON.parse(localStorage.getItem("kosartomb"))
        this.megjelenit()
        this.kosarElem.on("click", ".torol", (event) => {
            let id = $(event.target).attr("data-id")
            console.log(id)
            this.kosarTomb.splice(id, 1)

            localStorage.setItem("kosartomb", JSON.stringify(this.kosarTomb))
            this.megjelenit()
        })
    }
    setKosar(adat) {
        this.kosarTomb.push(adat)
        //local storageba mentsuk a sokártömb tartalmát
        localStorage.setItem("kosartomb", JSON.stringify(this.kosarTomb))
        this.megjelenit()
    }
    megjelenit() {
        let osszeg = 0
        let txt = "<table>"
        this.kosarTomb.forEach((element, index) => {
            txt += "<tr>"
            for (const key in element) {
                if (key != "id" && key != "kep") {

                    txt += "<td>" + element[key] + "</td>"

                }

            }
            txt += "<td><button class='torol' data-id='" + index + "'>Törlés</button></td></tr>"
            osszeg += Number(element.ar)
        });

        txt += "</table>"
        this.kosarElem.html(txt)
        this.osszAr.html(osszeg)
    }
}