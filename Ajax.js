class MyAjax{
    constructor(){}
    getAjax(apivegpont, tomb, myCallBack) {
        tomb.splice(0,tomb.length)
        $.ajax({
            url: apivegpont,
            type: "GET",
            success: function (result) {
                result.forEach(element => {
                    tomb.push(element)
                });
                myCallBack(tomb)
            }
        })
    }

    postAjax(apivegpont,adat ) {
        $.ajax({
            url: apivegpont,
            type: "POST",
            data:adat,
            success: function (result) { }
        })
    }

    deleteAjax(apivegpont,id ) {
        $.ajax({
            url: apivegpont+"/"+id,
            type: "DELETE",
            success: function (result) { }
        })
    }

    putAjax(apivegpont,adat ,id) {
        $.ajax({
            url: apivegpont+"/"+id,
            type: "PUT",
            data:adat,
            success: function (result) { }
        })
    }
}