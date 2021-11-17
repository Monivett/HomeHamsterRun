   //Selector por ID #

   $('#btn_records').click(function () {
    document.getElementById('scores').style.display = 'block';
    Mostrartiempos(1);
});

   $('#x').click(function () {
    document.getElementById('scores').style.display = 'none';
});
$('#n1').click(function () {
    Mostrartiempos(1);
});
$('#n2').click(function () {
    Mostrartiempos(2);
});
$('#n3').click(function () {
    Mostrartiempos(3);
});

function Mostrartiempos(nivel) {
    var FoDatos = new FormData(); //Form de HTML
    FoDatos.append('opc', 6);
    FoDatos.append('nivel', nivel);

    fetch('php/User.php', { method: "POST", body: FoDatos }) //Función asincrona, manda los datos a User.php
        .then(response => {
            return response.text(); //Regresa tipo de dato texto
        })
        .then(data => {
            console.log(data);
            var Jason = data;
            var obj = JSON.parse(Jason);
            console.log(obj); //Imprimimos el texto

            document.getElementById("primerlugar").innerHTML = obj[0]["Username"] +" con un tiempo de: "+ obj[0]["tiempo"] + " seg";
            document.getElementById("segundolugar").innerHTML = obj[1]["Username"] +" con un tiempo de: "+ obj[1]["tiempo"] + " seg";
            document.getElementById("tercerolugar").innerHTML = obj[2]["Username"] +" con un tiempo de: "+ obj[2]["tiempo"] + " seg";
        })

}
