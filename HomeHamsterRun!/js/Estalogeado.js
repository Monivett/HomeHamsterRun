
$(document).ready(function () {
    leerUsuario();
    
 });

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
            if(data!=0){
                window.location.href = 'Principal.html';
            }
        })
}