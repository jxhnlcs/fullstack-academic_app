/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
DROP TABLE IF EXISTS `Courses`;
CREATE TABLE `Courses` (
  `CourseID` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) NOT NULL,
  `Description` text,
  `Price` int(11) NOT NULL,
  `Type` varchar(255) DEFAULT NULL,
  `Model` varchar(255) DEFAULT NULL,
  `Category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`CourseID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Password` char(64) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Telefone` varchar(15) DEFAULT NULL,
  `CEP` varchar(10) DEFAULT NULL,
  `CPF` varchar(14) DEFAULT NULL,
  `Nascimento` date DEFAULT NULL,
  `Documento` blob,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `Username` (`Username`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Courses`(CourseID,Title,Description,Price,Type,Model,Category) VALUES('2','\'Curso de Desenvolvimento Web\'','X\'417072656e6461206120646573656e766f6c766572207765627369746573206d6f6465726e6f732e\'','1200','\'Tecnologia\'','\'EAD\'','\'Graduação\''),('3','\'Curso de Marketing Digital\'','X\'417072656e646120657374726174c3a967696173206176616ec3a761646173206465206d61726b6574696e67206f6e6c696e652e\'','1200','\'Marketing\'','\'EAD\'','\'Graduação\''),('4','\'Curso de Design Gráfico\'','X\'446573656e766f6c7661207375617320686162696c69646164657320656d2064657369676e2076697375616c2e\'','1000','\'Design\'','\'Presencial\'','\'Graduação\''),('5','\'Curso de Fotografia Avançada\'','X\'417072696d6f7265207375617320686162696c69646164657320646520666f746f67726166696120636f6d2074c3a9636e69636173206176616ec3a7616461732e\'','800','\'Arte\'','\'Presencial\'','\'Pós-Graduação\''),('6','\'Curso de Inglês Avançado\'','X\'417072656e646120696e676cc3aa7320666c75656e746520636f6d2061756c6173206176616ec3a7616461732065207072c3a174696361732e\'','600','\'Idiomas\'','\'EAD\'','\'Graduação\''),('7','\'Curso de Empreendedorismo\'','X\'446573656e766f6c766120686162696c69646164657320656d707265656e6465646f726173207061726120696e696369617220736575207072c3b37072696f206e6567c3b363696f2e\'','1300','\'Negócios\'','\'Presencial\'','\'Pós-Graduação\''),('8','\'Curso de Yoga e Meditação\'','X\'507261746971756520796f67612065206d6564697461c3a7c3a36f2070617261206f20657175696cc3ad6272696f2066c3ad7369636f2065206d656e74616c2e\'','900','\'Exercício\'','\'EAD\'','\'Graduação\''),('9','\'Curso de História da Arte\'','X\'4578706c6f726520617320646976657273617320666f726d61732064652065787072657373c3a36f20617274c3ad737469636120616f206c6f6e676f2064612068697374c3b37269612e\'','1100','\'Arte\'','\'Presencial\'','\'Pós-Graduação\''),('10','\'Curso de Desenvolvimento Mobile\'','X\'446573656e766f6c76612061706c6963617469766f73206dc3b376656973207061726120694f53206520416e64726f69642e\'','1400','\'Tecnologia\'','\'EAD\'','\'Graduação\'');