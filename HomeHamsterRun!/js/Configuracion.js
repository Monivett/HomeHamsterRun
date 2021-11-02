var music_volume;
var sound_volume;
var Dificult;
class Configuracion {
    constructor(pAudio, pSonido, pDificultad) {
        this.Audio = pAudio;
        this.Sonido = pSonido;
        this.Dificultad = pDificultad;
    }

}
$(document).ready(function () {


    leer();



});
function leer() {
    var musica = localStorage.getItem("Audio");
    if (musica) {
        let audio = document.getElementById('Audio');
        audio.volume = musica;
        music_volume = document.getElementById("musicV").value = musica * 100;

    }
    var sonido = localStorage.getItem("Sonido");
    if (sonido) {
        let audio = document.getElementById('Audio3');
        audio.volume = sonido;
        let audio2 = document.getElementById('Audio2');
        audio2.volume = sonido;
        sound_volume = document.getElementById("soundV").value = sonido * 100;

    }
    var dif = localStorage.getItem("Dificultad");
    if (dif) {
   
       $('input:radio[name="dificultad"]').filter('[value='+dif+']').attr('checked', true);

    }
}



function sound() {

    let audio = document.querySelector('#Audio2');
    audio.play();

}
function soundclick() {

    let audio = document.querySelector('#Audio3');
    audio.play();

}

function VolumenMusica(slideAmount) {

    music_volume = document.getElementById("musicV").value;

    let audio = document.querySelector('Audio');
    audio.volume = music_volume / 100;
}

function VolumenSonido(slideAmount) {
    soundclick();
    sound_volume = document.getElementById("soundV").value;

    let audio = document.querySelector('#Audio3');
    audio.volume = sound_volume / 100;
}


$("#btn_Salir").click(function () {
    var dif = document.querySelector('input[name="dificultad"]:checked').value;
    if (dif == 'Facil') {
        Dificult = 'Facil';
    }else{
        Dificult = 'Dificil';
    }
    var config = new Configuracion(
        music_volume / 100,
        sound_volume / 100,
        Dificult
    )

    guardar(config);

    window.location.href = 'Principal.html';
});
function guardar(config) {//Se guarda en la pestaña de aplicación
    //localStorage.setItem("llave", "valor");
    localStorage.clear();
    localStorage.setItem("Audio", config.Audio);
    localStorage.setItem("Sonido", config.Sonido);
    localStorage.setItem("Dificultad", config.Dificultad);
}