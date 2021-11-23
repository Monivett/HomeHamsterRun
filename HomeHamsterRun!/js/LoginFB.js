window.fbAsyncInit = function () {
    // FB JavaScript SDK configuration and setup
    FB.init({
        appId: '3140496469559704', // FB App ID
        cookie: true,  // enable cookies to allow the server to access the session
        xfbml: true,  // parse social plugins on this page
        version: 'v3.2' // use graph api version 2.8
    });

    // Check whether the user already logged in
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            //display user data
            //getFbUserData();
        }
    });
};

// Load the JavaScript SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Facebook login with JavaScript SDK
function fbLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            // Get and display the user profile data
            getFbUserData();
        } else {
            document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
        }
    }, { scope: 'email' });
}
function saveUserData(userData) {
    console.log(userData)
}
// Fetch the user profile data from facebook
function getFbUserData() {
    FB.api('/me', { locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture' },
        function (response) {
            var FoDatos = new FormData(); //Form artificial de HTML

            FoDatos.append('nombre', response.first_name);
            FoDatos.append('correo', response.email);
            FoDatos.append('contrasena', response.id);

            FoDatos.append('opc', 1);

            
        fetch('php/User.php', { method: "POST", body: FoDatos }) //Función asincrona, manda los datos a User.php
        .then(response => {
            return response.text(); //Regresa tipo de dato texto
        })
        .then(data => {
            console.log(data); //Imprimimos el texto
            if (data == 1) {
                 LOGIN(response.first_name, response.id);


            } else if (data == "Duplicate entry '" + response.first_name + "' for key 'Username'") {
                LOGIN(response.first_name, response.id);
            }
            else {
                alert("Error: No se pudo iniciar sesión con Facebook");
            }


        })

        });
}

// Logout from facebook
function fbLogout() {
    FB.logout(function () {
        document.getElementById('fbLink').setAttribute("onclick", "fbLogin()");
        document.getElementById('fbLink').innerHTML = '<img src="images/fb-login-btn.png"/>';
        document.getElementById('userData').innerHTML = '';
        document.getElementById('status').innerHTML = '<p>You have successfully logout from Facebook.</p>';
    });
}

function LOGIN(username, contrasena){
    
    var FoDatos = new FormData(); //Form de HTML

    FoDatos.append('username', username);
    FoDatos.append('contrasena', contrasena);

    FoDatos.append('opc', 2);

    fetch('php/User.php', { method: "POST", body: FoDatos }) //Función asincrona, manda los datos a User.php
        .then(response => {
            return response.text(); //Regresa tipo de dato texto
        })
        .then(data => {
            if(data==1){
                 alert("Has iniciado sesión");
                 window.location.href="Principal.html";  
            }
            else{
                alert("No se puedo iniciar sesión con Facebook");
            }
           
          
            console.log(data); //Imprimimos el texto
         

        })
}