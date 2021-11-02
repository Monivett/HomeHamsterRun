var Pausa = false;
var Musicplay = true;

$(document).ready(function () {
    leerUsuario();
});

//BOTON PAUSA---------------
$("#btn_Pausa").click(function () {
    Pausa = true;
    document.getElementById('background_pausa').style.display = 'block';
});

$("#btn_Volver").click(function () {
    Pausa = false;
    document.getElementById('background_pausa').style.display = 'none';
});

//VERIFICA SI ELIGIO MULTIJUGADOR 
var modo = localStorage.getItem("ModoJuego");
if (modo == "Solitario") {

    nPlayers = 1;

}else{
    nPlayers = 2;
    LeerUser2();
}

function play() {
 
    let audio = document.querySelector('#Audio');
    if(Musicplay ==false){
        document.getElementById('botonsilencio').style.display = 'block';
        document.getElementById('botonreproducir').style.display = 'none';
        audio.play();
        Musicplay = true;
    }else{
        document.getElementById('botonsilencio').style.display = 'none';
        document.getElementById('botonreproducir').style.display = 'block';
        audio.pause();
        Musicplay = false;
    }
}
function leerUsuario(){
    var FoDatos = new FormData(); //Form artificial de HTML


    FoDatos.append('opc', 3);

    fetch('php/User.php', { method: "POST", body: FoDatos }) //Función asincrona, manda los datos a User.php
        .then(response => {
            return response.text(); //Regresa tipo de dato texto
        })
        .then(data => {
            console.log(data); //Imprimimos el texto
            var Jason = data;
            var obj = JSON.parse(Jason);
            document.getElementById('username').innerHTML = obj["Username"];

        })
}


function LeerUser2() {
    var datos = localStorage.getItem("Username2");
    if (datos) {
        document.getElementById('username2').innerHTML =datos;
    } else {
        window.location.href = 'Registro multi.html'
    }
}