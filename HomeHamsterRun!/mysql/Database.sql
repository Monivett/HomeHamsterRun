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

CREATE TABLE `tiempo` (
  `UserID` int(11) DEFAULT NULL,
  `tiempo` float DEFAULT NULL,
  `nivel` int(11) DEFAULT NULL,
  KEY `Usuario` (`UserID`),
  CONSTRAINT `Usuario` FOREIGN KEY (`UserID`) REFERENCES `usuario` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



#PROCEDURE USUARIO-----------------------------------------
DROP procedure IF EXISTS `Proc_Usuario`;
DELIMITER $$
CREATE PROCEDURE `Proc_Usuario`(
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
CREATE PROCEDURE `Proc_Login`(

	IN PUser	VARCHAR(300),
	IN PContraseña		VARCHAR(300)

    )
BEGIN

		SELECT  ID,
				Username,						
				Email,				
				Contraseña
              FROM Usuario
		WHERE Username = PUser AND Contraseña =PContraseña;

END$$
DELIMITER ;

DELIMITER $$
CREATE  PROCEDURE `Proc_Tiempo`(
	IN opcion			char(1),
    IN PID_Usuario		INT,
    IN PTiempo			FLOAT,
    IN PNivel			INT
    )
BEGIN
IF opcion = 'I'
THEN
DELETE FROM tiempo WHERE UserID = PID_Usuario AND nivel = PNivel;
		INSERT INTO tiempo(UserID,tiempo,nivel)
		VALUES (PID_Usuario,PTiempo,PNivel);
END IF;
IF opcion ='U'
	THEN
		UPDATE tiempo
		SET  tiempo				= PTiempo
		WHERE UserID = PID_Usuario AND nivel = PNivel;
	
end if;	
IF opcion ='S' #Muestra mi puntuación
	THEN
		SELECT UserID, tiempo ,nivel
		FROM  tiempo			
		WHERE UserID = PID_Usuario AND nivel = PNivel
		order by tiempo asc;
	
end if;	
IF opcion ='A' #Puntuación de todos
	THEN
		SELECT Username, tiempo ,nivel
		FROM  tiempo	
		INNER JOIN usuario ON ID = UserID
		WHERE nivel = PNivel
		order by tiempo asc;
	
end if;	
END$$
DELIMITER ;

