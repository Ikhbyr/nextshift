-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 15, 2020 at 11:29 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `funds`
--

CREATE TABLE `funds` (
  `title` text DEFAULT NULL,
  `totalPrice` double NOT NULL,
  `profitRate` text NOT NULL,
  `duringOperation` text NOT NULL,
  `Distribution` text NOT NULL,
  `investmentAmount` double NOT NULL,
  `photo` text NOT NULL,
  `created_date` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `percentage` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `funds`
--

INSERT INTO `funds` (`title`, `totalPrice`, `profitRate`, `duringOperation`, `Distribution`, `investmentAmount`, `photo`, `created_date`, `percentage`) VALUES
('3', 3, '3', '3', '3', 3, '[value-7]', '2020-04-15 16:01:24', NULL),
('3', 3, '3', '3', '3', 3, '[value-7]', '2020-04-15 16:01:49', NULL),
('3', 3, '3', '3', '3', 3, '[value-7]', '2020-04-15 16:02:03', NULL),
('2', 2, '2', '2', '2', 2, '[value-7]', '2020-04-15 16:07:08', NULL),
('3', 3, '3', '3', '3', 3, '[value-7]', '2020-04-15 16:08:21', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
