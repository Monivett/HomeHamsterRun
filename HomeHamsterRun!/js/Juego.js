var Pausa = false;
var Musicplay = true;
$("#btn_Pausa").click(function () {
    Pausa = true;
    document.getElementById('background_pausa').style.display = 'block';
});

$("#btn_Volver").click(function () {
    Pausa = false;
    document.getElementById('background_pausa').style.display = 'none';
});

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
