$(function () {
    const termekek = []
    const kosar = new Kosar()
    const myAjax = new MyAjax()
    let apivegpont = "http://localhost:3000/termek";
    myAjax.getAjax(apivegpont, termekek, kiir)

    $(window).on("kosarba", (event) => {

        kosar.setKosar(event.detail)
    })

    $("#szures").on("keyup", function () {
        let szuro = $(this).val()
        let szurtvegpont = apivegpont + "?q=" + szuro
        console.log(szurtvegpont)
        myAjax.getAjax(szurtvegpont, termekek, kiir)

    })

    const rendezesElem = $("#rendezesiszempont")
    rendezesElem.on("change", function () {
        let szempont = $(this).val()
        switch (szempont) {
            case "nevRendezNo":
                ujvegpont = apivegpont + "?_sort=nev&_order=asc"
                console.log(ujvegpont)
                break;
            case "nevRendezCsokken":
                ujvegpont = apivegpont + "?_sort=nev&_order=desc"
                console.log(ujvegpont)
                break;
            case "arRendezNo":
                ujvegpont = apivegpont + "?_sort=ar&_order=asc"
                console.log(ujvegpont)
                break;
            case "nevRendezCsokken":
                ujvegpont = apivegpont + "?_sort=ar&_order=desc"
                console.log(ujvegpont)
                break;
                default:
                    ujvegpont=apivegpont
                    break;

        }
        myAjax.getAjax(ujvegpont, termekek, kiir)
    })
    function kiir() {
        const szuloElem = $(".termekek")
        const sablonElem = $(".sablonhoz .termek")
        szuloElem.empty()
        sablonElem.show()
        for (let index = 0; index < termekek.length; index++) {


            const ujElem = sablonElem.clone().appendTo(szuloElem)
            let ujObj = new TermekVasarlo(ujElem, termekek[index])
        }
        sablonElem.hide()
    }
})