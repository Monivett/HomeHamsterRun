CREATE DATABASE HHR;
USE HHR;

CREATE TABLE `usuario` (
  `ID` int(11) NOT NULL AUTO_INCREMENT ,
  `Username` varchar(200) DEFAULT NULL unique,
  `Email` varchar(200) UNIQUE DEFAULT NULL ,
  `Contraseña` varchar(200) DEFAULT NULL ,
  `Tiempo` INT,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;



#PROCEDURE USUARIO-----------------------------------------
DROP procedure IF EXISTS `Proc_Usuario`;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_Usuario`(
	IN opcion			char(1),
    IN PID_Usuario		INT,
	IN PUsername		VARCHAR(300),
	IN PCorreo			VARCHAR(300),
	IN PContraseña		VARCHAR(300),
    IN PTiempo			INT
    )
BEGIN
IF opcion = 'I'
THEN
		INSERT INTO Usuario(Username,Email,Contraseña,Tiempo)
		VALUES (PUsername,PCorreo,PContraseña,1000);
END IF;
IF opcion ='U'
	THEN
		UPDATE Usuario
		SET  Tiempo				= PTiempo
		WHERE ID = PID_Usuario;
	
end if;	
END$$
DELIMITER ;

#PROCEDURE LOGIN-----------------------------------------
DROP procedure IF EXISTS `Proc_Login`;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_Login`(

	IN PUser	VARCHAR(300),
	IN PContraseña		VARCHAR(300)

    )
BEGIN

		SELECT  ID,
				Username,						
				Email,				
				Contraseña,
				Tiempo
              FROM Usuario
		WHERE Username = PUser AND Contraseña =PContraseña;

END$$
DELIMITER ;

CALL `hhr`.`Proc_Login`('Monivett','ajio');

