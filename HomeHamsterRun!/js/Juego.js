var Pausa = false;
var Musicplay = true;
var UserID;
var UserID2;
var difMultiplier;
//BOTON PAUSA---------------
$("#btn_Pausa").click(function () {
    Pausa = true;
    document.getElementById('background_pausa').style.display = 'block';
});

$("#btn_Volver").click(function () {
    Pausa = false;
    document.getElementById('background_pausa').style.display = 'none';
});
$(document).ready(function () {
    leerUsuario();
    document.getElementById('botonsilencio').style.display = 'none';
});
//VERIFICA SI ELIGIO MULTIJUGADOR 
var modo = localStorage.getItem("ModoJuego");
if (modo == "Solitario") {

    nPlayers = 1;

} else {
    nPlayers = 2;
    LeerUser2();
}
//VERIFICA EL MODEO DE DIFICULTAD
var modo = localStorage.getItem("Dificultad");
if (modo == "Facil") {

    difMultiplier = 1;
    console.log(difMultiplier);
} else {
    difMultiplier = 2;
    console.log(difMultiplier);
}

function leerUsuario() {
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
            UserID = obj["ID"];
        })
}


function LeerUser2() {
    var datos = localStorage.getItem("Username2");
    if (datos) {
        document.getElementById('username2').innerHTML = datos;
        UserID2 = localStorage.getItem("IDplayer2");
    } else {
        window.location.href = 'Registro multi.html'
    }
}

//PLAY A LA MUSICA
function play() {

    let audio = document.querySelector('#Audio');
    if (Musicplay == false) {
        document.getElementById('botonsilencio').style.display = 'none';
        document.getElementById('botonreproducir').style.display = 'block';
        audio.play();
        Musicplay = true;
    } else {
        document.getElementById('botonsilencio').style.display = 'block';
        document.getElementById('botonreproducir').style.display = 'none';
        audio.pause();
        Musicplay = false;
    }
}

//ENEMIGOS
function moveEnemy(enemy) {
    var coll = false;
    if (enemy.mobile == true) {
        if (enemy.mov < enemy.maxmov) {
            enemy.translateZ(enemy.speed * deltaTime);
            enemy.mov += enemy.speed * deltaTime;
            enemy.box.setFromObject(enemy);
            for (j = 0; j < players.length; j++) {
                if (enemy.box.intersectsBox(players[j].box)) {
                    players[j].hp -= enemy.dmg;
                    sound();
                    coll = true;
                    break;
                }
            }
        }
        else {
            enemy.rotateY(THREE.Math.degToRad(180));
            enemy.mov = 0;

        }
    }
    else {
        for (j = 0; j < players.length; j++) {
            if (enemy.box.intersectsBox(players[j].box)) {
                players[j].hp -= enemy.dmg;
                sound();
                coll = true;
                break;
            }
        }
    }
    return coll;
}
//VIDA
function updateHP(player, bar) {
    if (player.hp >= 0) {
        document.getElementById(bar).style.width = player.hp.toString() + '%';
    }
    else {
        document.getElementById(bar).style.width = '0%';
    }
}

function distance(a, b) {
    return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
}

function RegistrarTiempo(nivel, tiempo) {

    var FoDatos = new FormData(); //Form artificial de HTML

    FoDatos.append('UserID', UserID);
    FoDatos.append('tiempo', tiempo);
    FoDatos.append('nivel', nivel);
    FoDatos.append('opc', 5);

    fetch('php/User.php', { method: "POST", body: FoDatos }) //Función asincrona, manda los datos a User.php
        .then(response => {
            return response.text(); //Regresa tipo de dato texto
        })
        .then(data => {
            console.log(data); //Imprimimos el texto
            if (data == 1 || data == "") {
                console.log("Se registró la puntuación")

            }
            else {
                alert("Error: No se pudo registrar la puntuación");
            }


        })

}

function RegistrarTiempo2(nivel, tiempo) {

    var FoDatos = new FormData(); //Form artificial de HTML

    FoDatos.append('UserID', UserID2);
    FoDatos.append('tiempo', tiempo);
    FoDatos.append('nivel', nivel);
    FoDatos.append('opc', 5);

    fetch('php/User.php', { method: "POST", body: FoDatos }) //Función asincrona, manda los datos a User.php
        .then(response => {
            return response.text(); //Regresa tipo de dato texto
        })
        .then(data => {
            console.log(data); //Imprimimos el texto
            if (data == 1 || data == "") {
                console.log("Se registró la puntuación")

            }
            else {
                alert("Error: No se pudo registrar la puntuación");
            }


        })

}