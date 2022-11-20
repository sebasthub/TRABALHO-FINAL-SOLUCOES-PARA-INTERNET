CREATE DATABASE `db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
use db;
CREATE TABLE `manutencao` (
  `idmanutencao` int NOT NULL AUTO_INCREMENT,
  `data` date DEFAULT NULL,
  `solicitante` varchar(45) DEFAULT NULL,
  `veiculo` varchar(45) DEFAULT NULL,
  `empresa_manutencao` varchar(45) DEFAULT NULL,
  `retorno` date DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `problemas` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idmanutencao`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE DATABASE `db_teste` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
use db_teste;
CREATE TABLE `manutencao` (
  `idmanutencao` int NOT NULL AUTO_INCREMENT,
  `data` date DEFAULT NULL,
  `solicitante` varchar(45) DEFAULT NULL,
  `veiculo` varchar(45) DEFAULT NULL,
  `empresa_manutencao` varchar(45) DEFAULT NULL,
  `retorno` date DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `problemas` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idmanutencao`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

