
$(function () {
    const termekek = []
    const myAjax = new MyAjax()
    let apivegpont = "http://localhost:3000/termek";
    myAjax.getAjax(apivegpont, termekek, kiir)

    
    $(window).on("torles", (event) => {

       console.log(event.detail.id)
       myAjax.deleteAjax(apivegpont,event.detail.id)
    })
    $(window).on("modosit", (event) => {

        //kosar.setKosar(event.detail)
        console.log(event.detail)
        $("#termekID").val(event.detail.id)
        $("#termeknev").val(event.detail.nev)
        $("#termekLeiras").val(event.detail.leiras)
        $("#termekAr").val(event.detail.ar)
        $("#termekKep").attr("name",event.detail.kep)
        $("#ajaxUj").attr("disabled",true)
        $("#ajaxModosit").attr("disabled",false)
  
    })

$("#ajaxUj").on("click",function(){
    let adat={}
    adat.nev=$("#termeknev").val()
    adat.leiras=$("#termekLeiras").val()
    adat.ar=Number($("#termekAr").val())
    adat.kep= $("#termekKep").val()
    myAjax.postAjax(apivegpont,adat)
})
$("#ajaxModosit").on("click",function(){
    let adat={}
    adat.id=$("#termekID").val()
    adat.nev=$("#termeknev").val()
    adat.leiras=$("#termekLeiras").val()
    adat.ar=Number($("#termekAr").val())
    adat.kep= $("#termekKep").val()
    myAjax.putAjax(apivegpont,adat,adat.id)
})
    function kiir() {
        const szuloElem = $(".termekek")
        const sablonElem = $("thead .termek")
        szuloElem.empty()
        sablonElem.show()
        for (let index = 0; index < termekek.length; index++) {


            const ujElem = sablonElem.clone().appendTo(szuloElem)
            let ujObj = new TermekAdmin(ujElem, termekek[index])
        }
        sablonElem.hide()
    }
})