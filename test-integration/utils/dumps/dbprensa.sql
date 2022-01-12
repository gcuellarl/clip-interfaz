-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-01-2022 a las 22:09:17
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbprensa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idpp`
--

CREATE TABLE `idpp` (
  `id` int(11) NOT NULL,
  `section` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL,
  `active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `idpp`
--

INSERT INTO `idpp` (`id`, `section`, `description`, `active`) VALUES
(1, '  ', 'Ninguna', 0),
(2, 'PP Color', 'Primeras Planas General Color', 1),
(3, 'PF Color', 'Primeras Planas Financieras Color', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medios`
--

CREATE TABLE `medios` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `medios`
--

INSERT INTO `medios` (`id`, `name`, `active`) VALUES
(4, 'Medio Diario Inactivo', 0),
(5, 'Medio Diario Activo', 1),
(6, 'Medio Revistas Inactivo', 0),
(7, 'Medio Revistas Activo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secciones`
--

CREATE TABLE `secciones` (
  `id` int(11) NOT NULL,
  `idMedium` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `active` int(11) NOT NULL,
  `type` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `secciones`
--

INSERT INTO `secciones` (`id`, `idMedium`, `name`, `active`, `type`) VALUES
(1, 4, 'MD4 Inactivo', 0, 'PRINCIPAL'),
(2, 4, 'MD4 Activo', 1, 'PRINCIPAL'),
(3, 5, 'MD5 Inactivo', 0, 'PRINCIPAL'),
(4, 5, 'MD5 Activo', 1, 'PRINCIPAL'),
(5, 6, 'MR6 Inactivo', 0, 'PRINCIPAL'),
(6, 6, 'MR6 Activo', 1, 'PRINCIPAL'),
(7, 7, 'MR7 Inactivo', 0, 'PRINCIPAL'),
(8, 7, 'MR7 Activo', 1, 'PRINCIPAL'),
(9, 1, 'MA1', 0, 'PRINCIPAL'),
(10, 9, 'MI1', 1, 'PRINCIPAL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiposmedio`
--

CREATE TABLE `tiposmedio` (
  `ID` int(10) UNSIGNED NOT NULL,
  `Tipo` varchar(45) COLLATE latin1_spanish_ci NOT NULL DEFAULT '',
  `Activo` char(1) COLLATE latin1_spanish_ci NOT NULL DEFAULT '1',
  `Formato` varchar(15) COLLATE latin1_spanish_ci NOT NULL DEFAULT '',
  `Orden` int(11) NOT NULL DEFAULT 0,
  `TipoTema` int(10) NOT NULL DEFAULT 7,
  `Categoria` enum('PRENSA','REVISTA','RADIO','TV','INTERNET','OTROS') COLLATE latin1_spanish_ci NOT NULL DEFAULT 'OTROS'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `tiposmedio`
--

INSERT INTO `tiposmedio` (`ID`, `Tipo`, `Activo`, `Formato`, `Orden`, `TipoTema`, `Categoria`) VALUES
(1, 'Radio AM', '1', 'Audio', 0, 2, 'RADIO'),
(2, 'Radio FM', '1', 'Audio', 0, 2, 'RADIO'),
(3, 'TV Abierta', '1', 'Video', 0, 2, 'TV'),
(4, 'Diario', '1', 'Impreso', 0, 1, 'PRENSA');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `idpp`
--
ALTER TABLE `idpp`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medios`
--
ALTER TABLE `medios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `INDEX_IDMEDIUM` (`idMedium`);

--
-- Indices de la tabla `tiposmedio`
--
ALTER TABLE `tiposmedio`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tiposmedio`
--
ALTER TABLE `tiposmedio`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
