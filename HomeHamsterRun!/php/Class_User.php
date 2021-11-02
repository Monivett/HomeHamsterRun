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
        //Si se agrego

        return $datos;
    }

    public function getPerfilUsuario() {
        header( 'Content-Type: application/json' );
        if ( isset( $_SESSION['ID'] ) ) {
            $ID = $_SESSION['ID'];
            $nombre = $_SESSION['Nombre'];
            $genero = $_SESSION['Género'];
            $fechaNac = $_SESSION['FechaNacimiento'];
            $correo = $_SESSION['Email'];
            $password = $_SESSION['Contraseña'];
            $fechaRegistro = $_SESSION['FechaRegistro'];
            $fechaMod = $_SESSION['FechaMod'];
            $rol = $_SESSION['Rol'];

            $json = [
                'ID' => $ID,
                'Nombre' => $nombre,
                'Género'=> $genero,
                'FechaNacimiento'=> $fechaNac,
                'Email'=> $correo,
                'Contraseña'=> $password, //Esto es ilegal eh
                'FechaRegistro'=> $fechaRegistro,
                'FechaMod'=> $fechaMod,
                'Rol'=> $rol

            ];
            return $json;
        } else {
            $success = 0;
            return $success;
        }
    }

}

?>