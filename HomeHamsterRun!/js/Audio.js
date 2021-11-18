class Configuracion {
    constructor(pAudio, pSonido, pDificultad) {
        this.Audio = pAudio;
        this.Sonido = pSonido;
        this.Dificultad = pDificultad;
    }

}
var music_volume;
var sound_volume;
var Dificult;
$(document).ready(function () {
    leer();
});
function leer() {
    var musica = localStorage.getItem("Audio");
    if (musica) {
        let audio = document.getElementById('Audio');
        audio.volume = musica;


    }
    var sonido = localStorage.getItem("Sonido");
    if (sonido) {
        let audio = document.getElementById('Audio3');
        audio.volume = sonido;
        let audio2 = document.getElementById('Audio2');
        audio2.volume = sonido;
  

    }

}



function sound() {

    let audio = document.querySelector('#Audio2');
    audio.play();

}
function soundGolpe() {

    let audio = document.querySelector('#Audio4');
    audio.play();

}
function soundItem() {

    let audio = document.querySelector('#Audio5');
    audio.play();

}
function soundDisparo() {

    let audio = document.querySelector('#Audio6');
    audio.play();

}
function soundclick() {

    let audio = document.querySelector('#Audio3');
    audio.play();

}

function VolumenMusica(slideAmount) {

    var music_volume = document.getElementById("musicV").value;

    let audio = document.querySelector('Audio');
    audio.volume = music_volume / 100;
}