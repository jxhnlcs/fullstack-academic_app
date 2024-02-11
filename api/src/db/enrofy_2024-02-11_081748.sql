/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS enrofy;

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

INSERT INTO `Courses` (CourseID, Title, Description, Price, Type, Model, Category)
VALUES
  ('2', 'Curso de Desenvolvimento Web', 'Aprenda a desenvolver websites modernos.', '1200', 'Tecnologia', 'EAD', 'Graduação'),
  ('3', 'Curso de Marketing Digital', 'Aprenda estratégias avançadas de marketing online.', '1200', 'Marketing', 'EAD', 'Graduação'),
  ('4', 'Curso de Design Gráfico', 'Desenvolva suas habilidades em design visual.', '1000', 'Design', 'Presencial', 'Graduação'),
  ('5', 'Curso de Fotografia Avançada', 'Aprimore suas habilidades em fotografia criativa e técnica.', '800', 'Arte', 'Presencial', 'Pós-Graduação'),
  ('6', 'Curso de Inglês Avançado', 'Aprenda inglês fluente com aulas envolventes e práticas.', '600', 'Idiomas', 'EAD', 'Graduação'),
  ('7', 'Curso de Empreendedorismo', 'Desenvolva habilidades empreendedoras para o sucesso nos negócios.', '1300', 'Negócios', 'Presencial', 'Pós-Graduação'),
  ('8', 'Curso de Yoga e Meditação', 'Pratique yoga e meditação para equilíbrio mental e físico.', '900', 'Exercício', 'EAD', 'Graduação'),
  ('9', 'Curso de História da Arte', 'Explore as diversas formas de expressão artística ao longo da história.', '1100', 'Arte', 'Presencial', 'Pós-Graduação'),
  ('10', 'Curso de Desenvolvimento Mobile', 'Desenvolva aplicativos móveis modernos.', '1400', 'Tecnologia', 'EAD', 'Graduação');