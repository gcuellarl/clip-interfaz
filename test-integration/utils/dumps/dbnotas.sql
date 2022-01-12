-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-01-2022 a las 19:31:46
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
-- Base de datos: `dbnotas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `folletos`
--

CREATE TABLE `folletos` (
  `ID` int(10) UNSIGNED NOT NULL,
  `IDMedio` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `Folleto` varchar(20) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Orden` int(11) NOT NULL DEFAULT 1,
  `Descripcion` varchar(70) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,
  `Activo` int(11) NOT NULL DEFAULT 1,
  `Tipo` enum('PRINCIPAL','SALUD','NACIONAL','INTERNACIONAL','FINANZAS','CULTURA','ESPECTACULOS','DEPORTES','CLASIFICADOS','CIUDAD','POLITICA','SOCIALES','NINOS','UNIVERSITARIOS','GASTRONOMIA','VIAJES','AUTOS','CAMPO','VIVIENDA') CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `folletos`
--

INSERT INTO `folletos` (`ID`, `IDMedio`, `Folleto`, `Orden`, `Descripcion`, `Activo`, `Tipo`) VALUES
(1, 4, 'MD4 Inactivo', 1, 'Seccion Inactiva', 0, 'PRINCIPAL'),
(2, 4, 'MD4 Activo', 1, 'Seccion Activa', 1, 'PRINCIPAL'),
(3, 5, 'MD5 Inactivo', 1, 'Seccion Inactiva', 0, 'PRINCIPAL'),
(4, 5, 'MD5 Activo', 1, 'Seccion Activa', 1, 'PRINCIPAL'),
(5, 6, 'MR6 Inactivo', 1, 'Seccion Inactiva', 0, 'PRINCIPAL'),
(6, 6, 'MR6 Activo', 1, 'Seccion Activa', 1, 'PRINCIPAL'),
(7, 7, 'MR7 Inactivo', 1, 'Seccion Inactiva', 0, 'PRINCIPAL'),
(8, 7, 'MR7 Activo', 1, 'Seccion Activa', 1, 'PRINCIPAL'),
(9, 1, 'MA1', 1, 'Seccion', 0, 'PRINCIPAL'),
(10, 9, 'MI1', 1, 'Seccion', 1, 'PRINCIPAL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medios`
--

CREATE TABLE `medios` (
  `ID` int(10) UNSIGNED NOT NULL,
  `IDTipoMedio` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `FechaAlta` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `FechaBaja` datetime DEFAULT NULL,
  `Nombre` varchar(250) COLLATE latin1_spanish_ci NOT NULL,
  `Periodicidad` varchar(14) COLLATE latin1_spanish_ci NOT NULL DEFAULT '',
  `Logo` varchar(250) COLLATE latin1_spanish_ci NOT NULL,
  `Circulacion` int(11) NOT NULL DEFAULT 0,
  `IDZona` int(11) DEFAULT NULL,
  `Pais` varchar(45) COLLATE latin1_spanish_ci NOT NULL,
  `Estado` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `Ciudad` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `Municipio` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `Orden` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `Clave` varchar(9) COLLATE latin1_spanish_ci DEFAULT NULL,
  `IDIdioma` int(11) NOT NULL DEFAULT 1,
  `DPI` int(5) UNSIGNED NOT NULL DEFAULT 200,
  `Host` varchar(25) COLLATE latin1_spanish_ci DEFAULT NULL,
  `Activo` int(11) NOT NULL DEFAULT 0,
  `HoraInicio` float NOT NULL DEFAULT 5,
  `Prefijo` varchar(25) COLLATE latin1_spanish_ci NOT NULL,
  `ImageMagick` varchar(150) COLLATE latin1_spanish_ci DEFAULT NULL,
  `URL` varchar(250) COLLATE latin1_spanish_ci DEFAULT NULL,
  `RSS` text COLLATE latin1_spanish_ci DEFAULT NULL,
  `UltimaActualizacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Prioridad` int(2) DEFAULT NULL,
  `Tiers` varchar(5) COLLATE latin1_spanish_ci DEFAULT NULL,
  `Tiraje` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `medios`
--

INSERT INTO `medios` (`ID`, `IDTipoMedio`, `FechaAlta`, `FechaBaja`, `Nombre`, `Periodicidad`, `Logo`, `Circulacion`, `IDZona`, `Pais`, `Estado`, `Ciudad`, `Municipio`, `Orden`, `Clave`, `IDIdioma`, `DPI`, `Host`, `Activo`, `HoraInicio`, `Prefijo`, `ImageMagick`, `URL`, `RSS`, `UltimaActualizacion`, `Prioridad`, `Tiers`, `Tiraje`) VALUES
(1, 1, '2020-01-01 00:00:00', NULL, 'Medio Audio', '', '', 0, NULL, '', NULL, '', '', 0, '', 1, 200, '0.0.0.0', 1, 5, '', NULL, NULL, NULL, '2020-01-01 06:00:00', NULL, NULL, NULL),
(2, 2, '2020-01-01 00:00:00', NULL, 'Medio Internet', '', '', 0, NULL, '', NULL, '', '', 0, '', 1, 200, '0.0.0.0', 1, 5, '', NULL, NULL, NULL, '2020-01-01 06:00:00', NULL, NULL, NULL),
(3, 3, '2020-01-01 00:00:00', NULL, 'Medio TV', '', '', 0, NULL, '', NULL, '', '', 0, '', 1, 200, '0.0.0.0', 1, 5, '', NULL, NULL, NULL, '2020-01-01 06:00:00', NULL, NULL, NULL),
(4, 4, '2020-01-01 00:00:00', NULL, 'Medio Diario Inactivo', '', '', 0, NULL, '', NULL, '', '', 0, '', 1, 200, '0.0.0.0', 0, 5, '', NULL, NULL, NULL, '2020-01-01 06:00:00', NULL, NULL, NULL),
(5, 4, '2020-01-01 00:00:00', NULL, 'Medio Diario Activo', '', '', 0, NULL, '', NULL, '', '', 0, '', 1, 200, '0.0.0.0', 1, 5, '', NULL, NULL, NULL, '2020-01-01 06:00:00', NULL, NULL, NULL),
(6, 5, '2020-01-01 00:00:00', NULL, 'Medio Revistas Inactivo', '', '', 0, NULL, '', NULL, '', '', 0, '', 1, 200, '0.0.0.0', 0, 5, '', NULL, NULL, NULL, '2020-01-01 06:00:00', NULL, NULL, NULL),
(7, 5, '2020-01-01 00:00:00', NULL, 'Medio Revistas Activo', '', '', 0, NULL, '', NULL, '', '', 0, '', 1, 200, '0.0.0.0', 1, 5, '', NULL, NULL, NULL, '2020-01-01 06:00:00', NULL, NULL, NULL),
(8, 6, '2020-01-01 00:00:00', NULL, 'Medio Agencia', '', '', 0, NULL, '', NULL, '', '', 0, '', 1, 200, '0.0.0.0', 1, 5, '', NULL, NULL, NULL, '2020-01-01 06:00:00', NULL, NULL, NULL),
(9, 7, '2020-01-01 00:00:00', NULL, 'Medio Especial Transcripciones', '', '', 0, NULL, '', NULL, '', '', 0, '', 1, 200, '0.0.0.0', 1, 5, '', NULL, NULL, NULL, '2020-01-01 06:00:00', NULL, NULL, NULL),
(10, 8, '2020-01-01 00:00:00', NULL, 'Medio Cable', '', '', 0, NULL, '', NULL, '', '', 0, '', 1, 200, '0.0.0.0', 1, 5, '', NULL, NULL, NULL, '2020-01-01 06:00:00', NULL, NULL, NULL),
(11, 9, '2020-01-01 00:00:00', NULL, 'Medio Peticiones Internet', '', '', 0, NULL, '', NULL, '', '', 0, '', 1, 200, '0.0.0.0', 1, 5, '', NULL, NULL, NULL, '2020-01-01 06:00:00', NULL, NULL, NULL),
(12, 10, '2020-01-01 00:00:00', NULL, 'Medio Documentos Comisiones', '', '', 0, NULL, '', NULL, '', '', 0, '', 1, 200, '0.0.0.0', 1, 5, '', NULL, NULL, NULL, '2020-01-01 06:00:00', NULL, NULL, NULL),
(13, 999, '2020-01-01 00:00:00', NULL, 'Medio Default', '', '', 0, NULL, '', NULL, '', '', 0, '', 1, 200, '0.0.0.0', 1, 5, '', NULL, NULL, NULL, '2020-01-01 06:00:00', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seccionesplanacompleta`
--

CREATE TABLE `seccionesplanacompleta` (
  `ID` int(20) NOT NULL,
  `Seccion` varchar(10) NOT NULL DEFAULT '',
  `Descripcion` varchar(40) NOT NULL DEFAULT '',
  `Activo` int(10) NOT NULL DEFAULT 1,
  `UltimaPublicacion` int(1) NOT NULL DEFAULT 0,
  `Coeficiente` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `IDTema` int(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `seccionesplanacompleta`
--

INSERT INTO `seccionesplanacompleta` (`ID`, `Seccion`, `Descripcion`, `Activo`, `UltimaPublicacion`, `Coeficiente`, `IDTema`) VALUES
(1, '  ', 'Ninguna', 0, 0, 0, NULL),
(2, 'PP Color', 'Primeras Planas General Color', 1, 0, 1000, 2),
(3, 'PF Color', 'Primeras Planas Financieras Color', 1, 0, 1, NULL);

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
(1, 'Radio', '1', 'Audio', 0, 2, 'RADIO'),
(2, 'Internet', '1', 'Electronico', 0, 0, 'INTERNET'),
(3, 'TV', '1', 'Video', 0, 2, 'TV'),
(4, 'Diario', '1', 'Impreso', 0, 1, 'PRENSA'),
(5, 'Revistas', '1', 'Impreso', 0, 1, 'REVISTA'),
(6, 'Agencia', '1', 'Agencia', 0, 29, 'INTERNET'),
(8, 'Cable', '1', 'Cable', 0, 15, 'OTROS'),
(9, 'Peticiones de Internet', '1', 'INTERNET', 0, 29, 'INTERNET'),
(10, 'Documentos Comisones', '1', 'Document', 0, 0, 'OTROS'),
(11, 'Especial Transcripciones', '1', 'Radio', 0, 29, 'RADIO'),
(999, 'Default', '1', 'Default', 0, 0, 'OTROS');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `folletos`
--
ALTER TABLE `folletos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDMedio` (`IDMedio`);

--
-- Indices de la tabla `medios`
--
ALTER TABLE `medios`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Medios_IDTipoMedio` (`IDTipoMedio`),
  ADD KEY `URL` (`URL`);

--
-- Indices de la tabla `seccionesplanacompleta`
--
ALTER TABLE `seccionesplanacompleta`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `tiposmedio`
--
ALTER TABLE `tiposmedio`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `folletos`
--
ALTER TABLE `folletos`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `medios`
--
ALTER TABLE `medios`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `seccionesplanacompleta`
--
ALTER TABLE `seccionesplanacompleta`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `tiposmedio`
--
ALTER TABLE `tiposmedio`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1128;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `folletos`
--
ALTER TABLE `folletos`
  ADD CONSTRAINT `Folletos_ibfk_1` FOREIGN KEY (`IDMedio`) REFERENCES `medios` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
