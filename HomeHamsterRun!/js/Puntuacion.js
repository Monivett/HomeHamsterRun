$(document).ready(function () {
  leerUsuario();

});

var UserID;
var puntuacion;
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
      UserID = obj["ID"];
      GetTiempo(1);
    })
}
function GetTiempo(nivel) {
  var FoDatos = new FormData(); //Form de HTML
  FoDatos.append('opc', 7);
  FoDatos.append('nivel', nivel);
  FoDatos.append('UserID', UserID);
  fetch('php/User.php', { method: "POST", body: FoDatos }) //Función asincrona, manda los datos a User.php
    .then(response => {
      return response.text(); //Regresa tipo de dato texto
    })
    .then(data => {
      console.log(data);
      var Jason = data;
      var obj = JSON.parse(Jason);
      console.log(obj); //Imprimimos el texto
      if(data!="[]"){
        puntuacion = obj[0]["tiempo"] + " seg en el nivel " + nivel;
    
      document.getElementById("txtScore").innerHTML = puntuacion;
    

      }else{
        document.getElementById("txtScore").innerHTML = "No hay puntuacion disponible";
      
      }
      

    })
}

//API FACEBOOK

//INCIALIZA EL SDK DE FACEBOOK
window.fbAsyncInit = function () {
  FB.init({
    appId: '380614850336145', //ID DE LA APLICACIÓN pagina: https://developers.facebook.com/apps/380614850336145/settings/basic/
    xfbml: true,
    version: 'v2.9'
  });
  FB.AppEvents.logPageView();
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function shareScore(score) {
  FB.ui({
    method: 'share',
    href: 'https://google.com',
    hashtag: '#HomeHamsterRun',
    quote: "Mi tiempo es de: " + score
  }, function (response) { });
}


