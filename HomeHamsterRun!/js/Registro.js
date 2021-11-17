const formularioRegistro = document.getElementById('Registro');

formularioRegistro.addEventListener("submit", e => {



    var nombre = document.getElementById('inputUser').value;
    var correo = document.getElementById('inputEmail').value;
    var constrasena = document.getElementById('inputPassword').value;

    e.preventDefault();


    var FoDatos = new FormData(); //Form artificial de HTML

    FoDatos.append('nombre', nombre);
    FoDatos.append('correo', correo);
    FoDatos.append('contrasena', constrasena);
    FoDatos.append('opc', 1);

    fetch('php/User.php', { method: "POST", body: FoDatos }) //Función asincrona, manda los datos a User.php
        .then(response => {
            return response.text(); //Regresa tipo de dato texto
        })
        .then(data => {
            console.log(data); //Imprimimos el texto
            if (data == 1) {
                alert("Te has registrado correctamente");
                window.location.href = "Login.html";


            } else if (data == "Duplicate entry '" + nombre + "' for key 'Username'") {
                alert("Error: Ya existe este usuario");
            }
            else {
                alert("Error: No se pudo registrar");
            }


        })

});
