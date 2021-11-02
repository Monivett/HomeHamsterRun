const formularioLogin = document.getElementById('Login'); //ACCEDEMOS AL FORMULARIO
const inputs = document.querySelectorAll('#Login input'); //ACCEDEMOS A TODOS LOS INPUTS DEL Login

formularioLogin.addEventListener("submit", e => {

    var user = document.getElementById('inputUser').value;
    var contrasena = document.getElementById('inputPassword').value;


    e.preventDefault();


    var FoDatos = new FormData(); //Form de HTML

    FoDatos.append('username', user);
    FoDatos.append('contrasena', contrasena);

    FoDatos.append('opc', 4);

    fetch('php/User.php', { method: "POST", body: FoDatos }) //Función asincrona, manda los datos a User.php
        .then(response => {
            return response.text(); //Regresa tipo de dato texto
        })
        .then(data => {
            console.log(data);
            var Jason = data;
            var obj = JSON.parse(Jason);
            if(data!="[]"){
                 alert("Has iniciado sesión");
                 localStorage.setItem("Username2", user);
                 localStorage.setItem("IDplayer2", obj[0]["ID"]);
                 window.location.href="Nivel.html";  
            }
            else{
                alert("Favor de ingresar los datos correctamente");
            }
           
          
            console.log(data); //Imprimimos el texto
         

        })
   
});
