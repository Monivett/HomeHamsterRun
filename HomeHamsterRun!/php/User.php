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

?>