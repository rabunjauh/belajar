-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2018 at 03:30 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `belajar`
--

-- --------------------------------------------------------

--
-- Table structure for table `hardwaretb`
--

CREATE TABLE `hardwaretb` (
  `hw_ID` int(5) NOT NULL,
  `hw_category` varchar(10) NOT NULL,
  `hw_manufacture` varchar(50) NOT NULL,
  `hw_MOD` varchar(15) NOT NULL,
  `hw_image` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hardwaretb`
--

INSERT INTO `hardwaretb` (`hw_ID`, `hw_category`, `hw_manufacture`, `hw_MOD`, `hw_image`) VALUES
(1, 'Laptop', 'DELL', 'Latitude E5440', 'latitude5440.jpg'),
(2, 'Desktop', 'DELL', 'Optiplex3010', 'optiplex3010.gif'),
(10, 'Thinclient', 'Ncomputing', 'L300', 'lk300.jpeg'),
(11, '', '', '', ''),
(12, '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hardwaretb`
--
ALTER TABLE `hardwaretb`
  ADD PRIMARY KEY (`hw_ID`),
  ADD KEY `hw_IDs` (`hw_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hardwaretb`
--
ALTER TABLE `hardwaretb`
  MODIFY `hw_ID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
