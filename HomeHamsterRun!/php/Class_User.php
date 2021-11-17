<?php

require_once 'Connection.php';

session_start();

class User extends conexion {

    public function Registrar ( $json ) {

        $datos = json_decode( $json, true );

        $nombre = $datos['nombre'];
        $correo = $datos['correo'];
        $contrasena = $datos['contrasena'];

        $query = "Call Proc_Usuario( 'I', '0', '$nombre','$correo','$contrasena','0');";
        $verificacion = parent::rowsAfectados( $query );
        //Si se agrego

        if ( $verificacion == 1 ) {
            $success = 'success';
            return 1;
        } else {
            $success = 'fail';
            return  parent::Error();
        }
        ;
    }

    public function Login ( $json ) {

        $datos = json_decode( $json, true );

        $username = $datos['username'];
        $contrasena = $datos['contrasena'];

        $query = "Call Proc_Login( '$username','$contrasena');";
        $datos = parent::ObtenerUsuario( $query );
   

        return $datos;
    }

    public function Login2 ( $json ) {

        $datos = json_decode( $json, true );

        $username = $datos['username'];
        $contrasena = $datos['contrasena'];

        $query = "Call Proc_Login( '$username','$contrasena');";
        $datos = parent::obtenerDatos( $query );
 

        return $datos;
    }

    public function getPerfilUsuario() {
        header( 'Content-Type: application/json' );
        if ( isset( $_SESSION['ID'] ) ) {


            $ID = $_SESSION['ID'];
            $Username = $_SESSION['Username'];
            $Email = $_SESSION['Email'];
            $Contraseña = $_SESSION['Contraseña'];
   

            $json = [
                'ID' => $ID,
                'Username' => $Username,
                'Email'=> $Email,
                'Contraseña'=> $Contraseña

            ];
            return $json;
        } else {
            $success = 0;
            return $success;
        }
    }

    public function RegistrarPuntuacion ( $json ) {

        $datos = json_decode( $json, true );

        $UserID = $datos['UserID'];
        $tiempo = $datos['tiempo'];
        $nivel = $datos['nivel'];

        $query = "Call Proc_Tiempo( 'I', '$UserID', '$tiempo','$nivel');";
        $verificacion = parent::rowsAfectados( $query );
        //Si se agrego

        if ( $verificacion == 1 ) {
            $success = 'success';
            return 1;
        } else {
            $success = 'fail';
            return  parent::Error();
        }
        ;
    }

    public function VerPuntuacion ( $json ) {

        $datos = json_decode( $json, true );

    
        $nivel = $datos['nivel'];

        $query = "Call Proc_Tiempo( 'A', '0', '0','$nivel');";
        $datos = parent::obtenerDatos( $query );

        return ( $datos );
    }

    
    public function VerPuntuacionUser ( $json ) {

        $datos = json_decode( $json, true );

    
        $nivel = $datos['nivel'];
        $UserID = $datos['UserID'];
        $query = "Call Proc_Tiempo( 'S', '$UserID', '0','$nivel');";
        $datos = parent::obtenerDatos( $query );

        return ( $datos );
    }
}

?>