//LEE EL LOCAL STORAGE
var mod = localStorage.getItem("ModoJuego");
if (mod) {

    $('input:radio[name="modo"]').filter('[value=' + mod + ']').attr('checked', true);

} else {
    localStorage.setItem("ModoJuego", "Solitario");
    $('input:radio[name="modo"]').filter('[value=Solitario]').attr('checked', true);
}
if (mod == "Multijugador") {
    LeerUser2();
}

//ACTUALIZA
$('input:radio[name="modo"]').change(function () {
    if ($(this).val() == 'Solitario') { //Si elige solo
        localStorage.setItem("ModoJuego", "Solitario");
    } else { //Si elige multi
        localStorage.setItem("ModoJuego", "Multijugador");
        LeerUser2();
    }
});


function LeerUser2() {
    var datos = localStorage.getItem("Username2");
    if (datos) {
document.getElementById('btncerrar2').style.display= 'block';
    } else {
        window.location.href = 'Registro multi.html'
        localStorage.setItem("ModoJuego", "Solitario");
    }
}

function CerrarJugador2(){
    localStorage.setItem("ModoJuego", "Solitario");
    localStorage.removeItem("Username2");
    localStorage.removeItem("IDplayer2");
}