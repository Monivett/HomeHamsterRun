<?php
//Toma los datos de javascript y los manda a Class_User
require_once 'Class_User.php';
$user = new User;

//recibe el json y lo tranforma a un arreglo
$postbody = file_get_contents( 'php://input' );
//Agarra el form que mando
$datos = json_decode( $postbody, true );
//Convierte en json los datos

//REGISTRO
if ( $_POST['opc'] == 1 ) {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    $json = [
        'nombre' => $nombre,
        'correo'=> $correo,
        'contrasena'=> $contrasena

    ];

    $pasa = json_encode( $json );
    //Convierte en json

    $result = $user->Registrar( $pasa );
    echo $result;
}

//LOGIN
if ( $_POST['opc'] == 2 ) {

    $correo = $_POST['username'];
    $contrasena = $_POST['contrasena'];

    $json = [
        'username'=> $correo,
        'contrasena'=> $contrasena,
    ];

    $pasa = json_encode( $json );
    //Convierte en json

    $result = $user -> Login( $pasa );
    echo $result;

}

//LOGIN2
if ( $_POST['opc'] == 4 ) {

    $correo = $_POST['username'];
    $contrasena = $_POST['contrasena'];

    $json = [
        'username'=> $correo,
        'contrasena'=> $contrasena,
    ];

    $pasa = json_encode( $json );
    //Convierte en json

    $result = $user -> Login2( $pasa );
    echo json_encode( $result );

}

//Obtener datos del usuario
if ( $_POST['opc'] == 3 ) {

    $result = $user -> getPerfilUsuario();
    echo json_encode( $result );

}
//REGISTRAMOS LA PUNTUACIÓN
if ( $_POST['opc'] == 5 ) {
    $UserID = $_POST['UserID'];
    $tiempo = $_POST['tiempo'];
    $nivel = $_POST['nivel'];

    $json = [
        'UserID' => $UserID,
        'tiempo'=> $tiempo,
        'nivel'=> $nivel

    ];

    $pasa = json_encode( $json );
    $result = $user->RegistrarPuntuacion( $pasa );
    echo $result;
}
//MOSTRAMOS LA PUNTUACIÓN DE TODOS
if ( $_POST['opc'] == 6 ) {
   
    $nivel = $_POST['nivel'];

    $json = [
      
        'nivel'=> $nivel

    ];

    $pasa = json_encode( $json );
    $result = $user->VerPuntuacion( $pasa );
    echo json_encode( $result );
}
//MOSTRAMOS LA PUNTUACIÓN DEL USUARIO
if ( $_POST['opc'] == 7 ) {
   
    $nivel = $_POST['nivel'];
    $UserID = $_POST['UserID'];
    $json = [
      
        'nivel'=> $nivel,
        'UserID'=> $UserID

    ];

    $pasa = json_encode( $json );
    $result = $user->VerPuntuacionUser( $pasa );
    echo json_encode( $result );
}
?>