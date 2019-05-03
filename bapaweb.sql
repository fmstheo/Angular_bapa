-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 03 mai 2019 à 05:49
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bapaweb`
--

-- --------------------------------------------------------

--
-- Structure de la table `personnel`
--

DROP TABLE IF EXISTS `personnel`;
CREATE TABLE IF NOT EXISTS `personnel` (
  `idPersonnel` int(10) NOT NULL AUTO_INCREMENT,
  `telP` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nomP` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenomP` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postePrincipalP` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `loginP` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mdpP` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idService` int(10) NOT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `matricule` int(10) NOT NULL,
  `idManager` int(10) DEFAULT NULL,
  `actif` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idPersonnel`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `personnel`
--

INSERT INTO `personnel` (`idPersonnel`, `telP`, `nomP`, `prenomP`, `postePrincipalP`, `loginP`, `mdpP`, `idService`, `email`, `matricule`, `idManager`, `actif`) VALUES
(1, '0558000000', 'Bellavia', 'Fabrice', 'Développeur', 'fb', 'bf', 1, 'f@b.fr', 12, 1, 1),
(2, '0558111111', 'LEFEVRE', 'Manu', 'Développeur', 'ml', 'lm', 1, 'm@l.fr', 11, 2, 1),
(3, '0605040302', 'Lassalle', 'Franck', 'Développeur', 'lf', 'fl', 1, 'f@l.fr', 14, 3, 1),
(4, '0658946523', 'Querre', 'Sandra', 'Développeur', 'qs', 'sq', 1, 's@q.fr', 18, 2, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
