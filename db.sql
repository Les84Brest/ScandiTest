-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 26 2021 г., 17:08
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `mvcdb`
--

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `sku` text NOT NULL,
  `price` float NOT NULL,
  `features` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `sku`, `price`, `features`, `type`) VALUES
(49, 'TV shelf', 'tv-shelf', 30.31, '{\"dimensions\" : \"120 х 30х 60\"}', 'furniture'),
(50, 'Michio Kaku. Physics of the Impossible', 'phisics-of-the-impossible', 16.99, '{\"Weight\": \"1.5Kg\"}', 'book'),
(51, 'J. K. Rowling. Harry Potter and the Chamber of Secrets', 'chamber-of-secrets', 15, '{\"Weight\": \"1.7Kg\"}', 'book'),
(52, 'A.Weir. The Martian', 'the-martian-weir', 18, '{\"Weight\": \"1.8Kg\"}', 'book'),
(53, 'Metallica Live Nimes 2009', 'metallica-nimes', 13, '{\"Size\": \"4500Mb\"}', 'DVD'),
(56, 'TV shelf', 'tv-shelf', 30.31, '{\"dimensions\" : \"120 х 30х 60\"}', 'furniture'),
(57, 'Chest of wanders', 'TR22412', 1235, '{\"size\":\"123341 Mb\"}', 'dvd'),
(58, 'Windows XP Service Pack 3', 'WINXPSP3', 150, '{\"size\":\"4180 Mb\"}', 'dvd'),
(59, 'Akunin Erast Fandorin The Death\'s Lover', 'Fando124', 15.45, '{\"weight\":\"1.35 Kg\"}', 'book'),
(98, 'qweqweqwe', 'dqwe', 3, '{\"weight\":\"2123 Kg\"}', 'book'),
(99, 'aaaaa!!!@@#!@#!', '!!!!@@@###$24413412', 12, '{\"size\":\"1212 Mb\"}', 'dvd');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
