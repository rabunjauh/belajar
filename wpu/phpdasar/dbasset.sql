-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 27, 2018 at 08:52 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbasset`
--

-- --------------------------------------------------------

--
-- Table structure for table `aktifitas`
--

CREATE TABLE `aktifitas` (
  `akt_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `user` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `approvaltb`
--

CREATE TABLE `approvaltb` (
  `approvalid` int(11) NOT NULL,
  `reqhodapp` varchar(1) NOT NULL,
  `mishodapp` varchar(1) NOT NULL,
  `approvaldate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `depttb`
--

CREATE TABLE `depttb` (
  `deptID` int(2) NOT NULL,
  `deptNM` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `depttb`
--

INSERT INTO `depttb` (`deptID`, `deptNM`) VALUES
(13, 'MIS'),
(14, 'Project & Operation'),
(15, 'HRD'),
(16, 'Finance'),
(17, 'SCM'),
(18, 'HSE'),
(19, 'Estimator'),
(20, 'Engineering'),
(21, 'QAQC');

-- --------------------------------------------------------

--
-- Table structure for table `devcattb`
--

CREATE TABLE `devcattb` (
  `dev_catID` int(2) NOT NULL,
  `dev_catNM` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `devcattb`
--

INSERT INTO `devcattb` (`dev_catID`, `dev_catNM`) VALUES
(1, 'Desktop'),
(2, 'Notebook'),
(3, 'Peripheral'),
(4, 'Monitor'),
(5, 'Thin Client');

-- --------------------------------------------------------

--
-- Table structure for table `emptb`
--

CREATE TABLE `emptb` (
  `emp_ID` int(11) NOT NULL,
  `emp_NM` varchar(30) NOT NULL,
  `emp_SEX` varchar(6) NOT NULL,
  `emp_JD` date NOT NULL,
  `emp_FD` date NOT NULL,
  `emp_PHONE` varchar(20) NOT NULL,
  `deptID` int(2) NOT NULL,
  `manager_ID` int(2) NOT NULL,
  `pos_ID` int(2) NOT NULL,
  `project_ID` int(2) NOT NULL,
  `emp_LOC` varchar(8) NOT NULL,
  `emp_STAT` varchar(10) NOT NULL,
  `emp_INPDATE` date NOT NULL,
  `user_STAT` varchar(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emptb`
--

INSERT INTO `emptb` (`emp_ID`, `emp_NM`, `emp_SEX`, `emp_JD`, `emp_FD`, `emp_PHONE`, `deptID`, `manager_ID`, `pos_ID`, `project_ID`, `emp_LOC`, `emp_STAT`, `emp_INPDATE`, `user_STAT`) VALUES
(12, 'MUSTAFA', 'Male', '2014-12-12', '2015-12-11', '0812 6826 5638', 13, 5, 2, 1, 'All Yard', 'Active', '2015-08-26', '1'),
(13, 'ARI ANGGRAINI', 'Female', '2013-02-19', '2016-10-27', '0821 7488 8156', 15, 8, 6, 1, 'All Yard', 'Active', '2015-08-26', '1'),
(14, 'DADANG FAUZAN', 'Male', '2015-05-12', '2015-12-26', '085278429125', 20, 13, 3, 1, 'Yard 1', 'Active', '2015-08-26', '1'),
(15, 'ACHMAD DUCHA JULIARDIANTO', 'Male', '2012-10-17', '2016-06-24', '0856 6837 3701', 20, 13, 3, 1, 'Yard 1', 'Active', '2015-08-27', '1'),
(16, 'ADE SYAFRIANI', 'Female', '2015-07-15', '2015-10-09', '0852 6422 3652', 14, 9, 68, 6, 'All Yard', 'Not Active', '2015-08-27', '0'),
(17, 'ADI SURIADI', 'Male', '2014-09-10', '2016-12-29', '0812 7003 2939', 14, 9, 7, 1, 'All Yard', 'Active', '2015-08-28', '1'),
(18, ' FERRY SETIO WARDOYO ', 'Male', '2015-03-03', '2016-02-20', ' 0821 7224 0333 ', 17, 10, 57, 1, 'All Yard', 'Active', '2015-10-02', '0'),
(19, ' ANANTO YUDI WINARNO ', 'Male', '2015-01-21', '2019-06-28', ' 0822 6899 2333 ', 17, 10, 61, 1, 'Yard 1', 'Active', '2015-10-02', '0'),
(20, 'WAHYU MAULANA', 'Male', '2014-09-16', '2015-12-16', '0811 7552 126', 13, 5, 2, 1, 'All Yard', 'Active', '2015-12-10', '0'),
(22, 'YODY HASAN', 'Male', '2015-08-05', '2015-12-04', '0878 0000 0000', 13, 5, 1, 1, 'All Yard', 'Active', '2015-12-16', '0'),
(23, 'MIS', 'Male', '2015-12-01', '2015-12-01', '-', 13, 5, 1, 1, 'All Yard', 'Active', '2015-12-16', '0'),
(24, 'Ganesha Gunawan', 'Male', '2015-12-01', '2016-01-01', '0878 0000 0001', 17, 10, 56, 1, 'All Yard', 'Active', '2015-12-17', '1');

-- --------------------------------------------------------

--
-- Table structure for table `emptb3`
--

CREATE TABLE `emptb3` (
  `emp_ID` int(11) NOT NULL,
  `emp_NO` varchar(6) NOT NULL,
  `emp_NM` varchar(25) NOT NULL,
  `emp_SEX` varchar(6) NOT NULL,
  `emp_JD` date NOT NULL,
  `emp_FD` date NOT NULL,
  `emp_PHONE` varchar(20) NOT NULL,
  `emp_DEPT` varchar(15) NOT NULL,
  `emp_MANAGER` varchar(50) NOT NULL,
  `emp_POS` varchar(25) NOT NULL,
  `emp_PROJ` varchar(15) NOT NULL,
  `emp_LOC` varchar(8) NOT NULL,
  `emp_STAT` varchar(1) NOT NULL,
  `emp_INPDATE` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emptb3`
--

INSERT INTO `emptb3` (`emp_ID`, `emp_NO`, `emp_NM`, `emp_SEX`, `emp_JD`, `emp_FD`, `emp_PHONE`, `emp_DEPT`, `emp_MANAGER`, `emp_POS`, `emp_PROJ`, `emp_LOC`, `emp_STAT`, `emp_INPDATE`) VALUES
(1, '1234', 'Mustafa', 'male', '2014-12-12', '2015-12-12', '0812', 'MIS', 'Yody', 'IT Technician', 'All', 'All', 'c', '0000-00-00 00:00:00'),
(5, '02-127', 'YOKY SETYAWAN', 'Male', '2015-06-22', '2015-09-19', '0812', 'QAQC', 'Arif', 'Inspector', 'Kaombo', 'Yard 1', 'c', '2015-07-19 23:31:54'),
(6, '02-128', 'MUHAMMAD SUKARMIN', 'Male', '2015-02-07', '2016-01-31', '0812', 'Project', 'Pungut', 'Welder', 'Kaombo', 'Yard 1', 'c', '2015-07-19 23:34:27'),
(7, '01-014', 'SRINIVASAN VARADARUJULU', 'Male', '2015-05-27', '2015-05-26', '0813', 'SCM', 'Kelvin', 'Manager', 'All', 'All Yard', 'C', '2015-07-19 23:46:38'),
(8, '02-137', 'KARNO BARKAH', 'Male', '2015-06-09', '2015-08-14', '0812', 'Project', 'Nadit', 'PROJECT MATERIAL CONTROL', 'MV27', 'Yard 2', 'C', '2015-07-20 18:20:15'),
(9, '02-138', 'DOAN KURNIAWAN', 'Male', '2015-04-08', '2015-10-02', '0812', 'QAQC', 'Arif', 'Inspector', 'All', 'Yard 1', 'C', '2015-07-20 18:23:41');

-- --------------------------------------------------------

--
-- Table structure for table `hardwaretb`
--

CREATE TABLE `hardwaretb` (
  `hw_ID` int(5) NOT NULL,
  `hw_category` varchar(10) NOT NULL,
  `hw_manufacture` varchar(50) NOT NULL,
  `hw_ST` varchar(11) NOT NULL,
  `hw_MOD` varchar(15) NOT NULL,
  `hw_PROCESSOR` varchar(20) DEFAULT NULL,
  `hw_MEM` varchar(10) DEFAULT NULL,
  `hw_HDD` varchar(7) DEFAULT NULL,
  `hw_DESC` varchar(20) NOT NULL,
  `hw_STAT` varchar(10) NOT NULL,
  `hw_image` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hardwaretb`
--

INSERT INTO `hardwaretb` (`hw_ID`, `hw_category`, `hw_manufacture`, `hw_ST`, `hw_MOD`, `hw_PROCESSOR`, `hw_MEM`, `hw_HDD`, `hw_DESC`, `hw_STAT`, `hw_image`) VALUES
(1, 'Laptop', 'DELL', '12345678', 'Latitude E5410', 'INTEL I5', '4', '500', 'Main', 'In Use', 'latitude5440.jpg'),
(2, 'Desktop', 'Dell', '87654321', 'Optiplex3010', 'Intel I3', '8', '320', 'Main', 'In use', 'optiplex3010.gif'),
(8, 's', 'sfff', 'sss', 'ss', 'ss', 's', 's', 's', 's', 's');

-- --------------------------------------------------------

--
-- Table structure for table `hw_parttb`
--

CREATE TABLE `hw_parttb` (
  `hwp_ID` int(11) NOT NULL,
  `hwp_SN` varchar(10) NOT NULL,
  `hwp_TYPE` varchar(10) NOT NULL,
  `hwp_DESC` varchar(30) NOT NULL,
  `hwp_CAP` varchar(30) NOT NULL,
  `hwp_STAT` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `managertb`
--

CREATE TABLE `managertb` (
  `manager_ID` int(2) NOT NULL,
  `manager_NM` varchar(30) NOT NULL,
  `deptID` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `managertb`
--

INSERT INTO `managertb` (`manager_ID`, `manager_NM`, `deptID`) VALUES
(5, 'Wen Chang Wang', 13),
(6, 'Estimator', 19),
(7, 'Kenny', 16),
(8, 'HENDRO HARTANTO', 15),
(9, 'COLIN LIM', 14),
(10, 'GANESHA GUNAWAN', 17),
(12, 'Mohamed Helmi', 18),
(13, 'Deden Rahmat Hidayat', 20),
(14, 'THANASEKAR', 21);

-- --------------------------------------------------------

--
-- Table structure for table `manutb`
--

CREATE TABLE `manutb` (
  `manuID` int(3) NOT NULL,
  `manuNM` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manutb`
--

INSERT INTO `manutb` (`manuID`, `manuNM`) VALUES
(1, 'DELL'),
(2, 'ACER'),
(3, 'ASUS');

-- --------------------------------------------------------

--
-- Table structure for table `moduletb`
--

CREATE TABLE `moduletb` (
  `module_ID` int(5) NOT NULL,
  `module_NM` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `link` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `status` varchar(10) COLLATE latin1_general_ci NOT NULL,
  `active` enum('Y','N') COLLATE latin1_general_ci NOT NULL DEFAULT 'Y',
  `urutan` int(5) NOT NULL,
  `session_ID` varchar(100) COLLATE latin1_general_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `moduletb`
--

INSERT INTO `moduletb` (`module_ID`, `module_NM`, `link`, `status`, `active`, `urutan`, `session_ID`) VALUES
(1, 'User Management', '?menu=user', '1', 'Y', 1, ''),
(2, 'Hardware', '?menu=hwdata', '5', 'Y', 3, ''),
(6, 'Report', '?menu=report', '2', 'Y', 3, ''),
(4, 'Employeee', '?menu=empdata', '3', 'Y', 2, ''),
(5, 'Request', '?menu=request', '4', 'Y', 4, ''),
(7, 'Hardware', '?menu=hwdata', '1', 'Y', 3, ''),
(10, 'Request', '?menu=request', '1', 'Y', 4, ''),
(11, 'Department', '?menu=department', '3', 'Y', 2, ''),
(12, 'Manager', '?menu=manager', '3', 'Y', 3, ''),
(13, 'Position', '?menu=position', '3', 'Y', 4, ''),
(14, 'Project', '?menu=project', '3', 'Y', 5, '');

-- --------------------------------------------------------

--
-- Table structure for table `new_table`
--

CREATE TABLE `new_table` (
  `emp_ID` int(11) NOT NULL,
  `emp_NO` varchar(6) NOT NULL,
  `emp_NM` varchar(25) NOT NULL,
  `emp_INPDATE` datetime NOT NULL,
  `emp_LOC` varchar(8) NOT NULL,
  `emp_STAT` varchar(1) NOT NULL,
  `emp_DEPT` varchar(15) NOT NULL,
  `emp_PROJ` varchar(15) NOT NULL,
  `emp_SPV` varchar(50) NOT NULL,
  `emp_POS` varchar(20) NOT NULL,
  `emp_COSCEN` varchar(10) NOT NULL,
  `emp_PHONE` varchar(20) NOT NULL,
  `emp_TAXNO` varchar(20) NOT NULL,
  `emp_FD` date NOT NULL,
  `emp_JD` date NOT NULL,
  `emp_BOP` varchar(15) NOT NULL,
  `emp_BOD` date NOT NULL,
  `emp_SEX` varchar(6) NOT NULL,
  `emp_ADD` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `postb`
--

CREATE TABLE `postb` (
  `pos_ID` int(2) NOT NULL,
  `pos_NM` varchar(30) NOT NULL,
  `manager_ID` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `postb`
--

INSERT INTO `postb` (`pos_ID`, `pos_NM`, `manager_ID`) VALUES
(1, ' MIS EXECUTIVE', 5),
(2, 'IT TECHNICIAN', 5),
(3, 'STRUCTURE DRAFTER', 13),
(4, 'FINANCE ASSISTANT', 7),
(5, 'HSE OFFICER', 12),
(6, ' HR OFFICER', 8),
(7, ' HELPER', 9),
(8, 'SENIOR QA/QC DOCUMENT CONTROLL', 14),
(9, 'ADMIN BUYER', 10),
(10, 'PROCESS ENGINEERING', 13),
(12, 'ARCHITECTURE DESIGNER II', 13),
(13, 'E & I DRAFTER', 13),
(14, 'E & I DESIGNER', 13),
(15, 'HVAC ENGINEER', 13),
(16, 'PIPING DESIGNER', 13),
(17, 'SENIOR STRUCTURE DRAFTER', 13),
(18, 'STRUCTURE DESIGNER', 13),
(19, 'STRUCTURE ENGINEER', 13),
(20, ' RIGGER SUPERVISOR', 9),
(21, 'ASSISTANT PROJECT ENGINEER', 9),
(22, 'ASSISTANT QUANTITY SURVEYOR', 9),
(23, 'BLASTER PAINTER', 9),
(24, 'BLASTING & PAINTING SUPERVISOR', 9),
(25, 'CNC MACHINE OPERATOR', 9),
(26, 'CONSTRUCTION SUPERINTENDENT', 9),
(27, 'E & I SUPERINTENDENT', 9),
(28, 'E&I ELECTRICIAN', 9),
(29, 'E&I FITTER', 9),
(30, 'E&I PRODUCTION ENGINEER', 9),
(31, 'E&I SUPERVISOR', 9),
(32, 'ELECTRICIAN LEADER', 9),
(33, 'ELECTRICIAN MAINTENANCE', 9),
(34, 'FINANCE OFFICER', 7),
(35, 'FINANCE MANAGER', 7),
(36, 'ASST FINANCE MANAGER', 7),
(37, 'HSE MANAGER', 12),
(38, 'ASST HSE MANAGER', 12),
(39, 'HSE ADMINISTRATION', 12),
(40, 'HR EXECUTVE', 8),
(41, 'HR MANAGER', 8),
(42, 'RECEPTIONIST', 8),
(43, 'DATA ENTRY', 8),
(44, 'QA/QC COORDINATOR', 14),
(45, 'QA/QC INSPECTOR', 14),
(46, 'SENIOR DOCCUMENT CONTROLL', 14),
(47, 'PAINTING INSPECTOR', 14),
(48, 'E&I INSPECTOR', 14),
(49, 'ITR COORDINATOR', 14),
(50, 'SENIOR QA/QC DOCUMENT CONTROLL', 14),
(51, 'MATERIAL INSPECTOR', 14),
(52, 'QC PIPING INSPECTOR', 14),
(53, 'ITR DOCUMENT CONTROL', 14),
(54, 'ASST QAQC MANAGER', 14),
(55, 'QA/QC MANAGER', 14),
(56, 'SCM MANAGER', 10),
(57, ' LOGISTIC ASSISTANT MANAGER', 10),
(58, 'PROCUREMENT OFFICER', 10),
(59, 'SHIPPING OFFICER', 10),
(60, 'STORE LEADER', 10),
(61, 'STOREKEEPER', 10),
(62, 'TECHNICAL BUYER', 10),
(63, 'ADMIN STORE', 10),
(64, 'WAREHOUSE SUPERVISOR', 10),
(65, 'MATERIAL SUPERVISOR', 10),
(66, 'SHIPPING ADMIN', 10),
(67, 'MIS MANAGER', 5),
(68, 'TIME KEEPER', 9);

-- --------------------------------------------------------

--
-- Table structure for table `projecttb`
--

CREATE TABLE `projecttb` (
  `project_ID` int(2) NOT NULL,
  `Project_NM` varchar(15) NOT NULL,
  `project_STAT` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projecttb`
--

INSERT INTO `projecttb` (`project_ID`, `Project_NM`, `project_STAT`) VALUES
(1, 'All Project', 'Active'),
(2, 'Moho Nord', 'Active'),
(3, 'MV27', 'Active'),
(4, 'Kaombo', 'Active'),
(5, 'Ten', 'Active'),
(6, 'Wartsila', 'Active'),
(7, 'Yinson', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `reqformtb`
--

CREATE TABLE `reqformtb` (
  `reqformid` int(11) NOT NULL,
  `reqformno` int(11) NOT NULL,
  `reqformitem` varchar(15) NOT NULL,
  `reqformtbselect` varchar(1) NOT NULL,
  `reqformtbrmk` varchar(30) NOT NULL,
  `reqformdate` varchar(2) NOT NULL,
  `reqformmonth` varchar(2) NOT NULL,
  `reqformyear` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `request_tb`
--

CREATE TABLE `request_tb` (
  `request_id` int(11) NOT NULL,
  `emp_ID` int(11) NOT NULL,
  `hw_ID` int(11) NOT NULL,
  `computer` enum('Yes','No') NOT NULL,
  `manager_ID` int(2) NOT NULL,
  `email` enum('Yes','No') NOT NULL,
  `emailrmk` varchar(100) NOT NULL,
  `printer` enum('Yes','No') NOT NULL,
  `printerrmk` varchar(100) NOT NULL,
  `shared_folder` enum('Yes','No') NOT NULL,
  `shared_folderrmk` varchar(100) NOT NULL,
  `application_access` enum('Yes','No') NOT NULL,
  `internet` enum('Yes','No') NOT NULL,
  `internetrmk` varchar(100) NOT NULL,
  `others` enum('Yes','No') NOT NULL,
  `remark` varchar(100) NOT NULL,
  `request_date` date NOT NULL,
  `req_status` varchar(20) NOT NULL,
  `approval_date` date NOT NULL,
  `approvalid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `request_tb`
--

INSERT INTO `request_tb` (`request_id`, `emp_ID`, `hw_ID`, `computer`, `manager_ID`, `email`, `emailrmk`, `printer`, `printerrmk`, `shared_folder`, `shared_folderrmk`, `application_access`, `internet`, `internetrmk`, `others`, `remark`, `request_date`, `req_status`, `approval_date`, `approvalid`) VALUES
(1, 16, 0, 'Yes', 9, 'Yes', '', 'Yes', '', 'Yes', '', 'Yes', 'Yes', '', 'No', '', '2015-12-01', 'Pending MIS', '0000-00-00', 0),
(2, 19, 0, 'Yes', 10, 'Yes', '', 'Yes', '', 'Yes', '', 'Yes', 'Yes', '', 'Yes', 'SCM server\r\nWarehouse Printer,', '2015-12-01', 'Pending MIS HOD', '0000-00-00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `swtb`
--

CREATE TABLE `swtb` (
  `sw_ID` int(11) NOT NULL,
  `sw_NM` varchar(30) NOT NULL,
  `sw_TYPE` varchar(15) NOT NULL,
  `sw_PK` varchar(15) NOT NULL,
  `sw_STAT` varchar(15) NOT NULL,
  `hw_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `usertb`
--

CREATE TABLE `usertb` (
  `session_ID` varchar(100) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `username` varchar(30) NOT NULL,
  `emp_PASS` varchar(100) NOT NULL,
  `level` varchar(1) NOT NULL,
  `block` enum('Y','N') NOT NULL DEFAULT 'N',
  `emp_ID` int(11) NOT NULL,
  `user_INPDATE` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usertb`
--

INSERT INTO `usertb` (`session_ID`, `username`, `emp_PASS`, `level`, `block`, `emp_ID`, `user_INPDATE`) VALUES
('870684047d330e1255332cd5ff95fdd1', 'achmad.juliardanto', '870684047d330e1255332cd5ff95fdd1', '5', 'N', 15, '2015-08-27'),
('8beeb717a046fca6b1a9c56df56b9ba5', 'adi.suriadi', '8beeb717a046fca6b1a9c56df56b9ba5', '1', 'N', 17, '2015-09-06'),
('bg1ubqkgtjlho8engui3ab7ap0', 'ganesha.gunawan', 'a0fad6dd3a08ccb6901cde567a6031be', '4', 'N', 24, '2015-12-17'),
('j319e2g7qbc4ib45al0u8222a6', 'it', '0d149b90e7394297301c90191ae775f0', '1', 'N', 12, '2015-08-26'),
('oqkv5jj05nih9cdhfcn5hjk6a7', 'dadang.fauzan', 'f7a51a5fb1ec31830d335b25b4857de0', '5', 'N', 14, '2015-08-26'),
('tr76t5i99kqboa3n62ooagqd77', 'hrd', '4bf31e6f4b818056eaacb83dff01c9b8', '3', 'N', 13, '2015-08-26');

-- --------------------------------------------------------

--
-- Table structure for table `vendortb`
--

CREATE TABLE `vendortb` (
  `vendor_ID` int(11) NOT NULL,
  `vendor_NM` varchar(30) NOT NULL,
  `vendor_ADD` varchar(50) NOT NULL,
  `vendor_STAT` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendortb`
--

INSERT INTO `vendortb` (`vendor_ID`, `vendor_NM`, `vendor_ADD`, `vendor_STAT`) VALUES
(1, 'Duta Komputer', 'Sei Panas Batam', 'Active'),
(2, 'TELIN', 'Batam Centre', '');

-- --------------------------------------------------------

--
-- Table structure for table `warrantytb`
--

CREATE TABLE `warrantytb` (
  `warID` int(3) NOT NULL,
  `warSTAT` varchar(11) NOT NULL,
  `warSTARTD` date NOT NULL,
  `warENDD` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aktifitas`
--
ALTER TABLE `aktifitas`
  ADD PRIMARY KEY (`akt_id`);

--
-- Indexes for table `approvaltb`
--
ALTER TABLE `approvaltb`
  ADD PRIMARY KEY (`approvalid`);

--
-- Indexes for table `depttb`
--
ALTER TABLE `depttb`
  ADD PRIMARY KEY (`deptID`);

--
-- Indexes for table `devcattb`
--
ALTER TABLE `devcattb`
  ADD PRIMARY KEY (`dev_catID`);

--
-- Indexes for table `emptb`
--
ALTER TABLE `emptb`
  ADD PRIMARY KEY (`emp_ID`),
  ADD KEY `emp_ID` (`emp_ID`),
  ADD KEY `emp_ID_2` (`emp_ID`),
  ADD KEY `project_ID` (`project_ID`),
  ADD KEY `pos_ID` (`pos_ID`),
  ADD KEY `project_ID_2` (`project_ID`);

--
-- Indexes for table `emptb3`
--
ALTER TABLE `emptb3`
  ADD PRIMARY KEY (`emp_ID`),
  ADD UNIQUE KEY `emp_NO` (`emp_NO`),
  ADD KEY `emp_ID` (`emp_ID`),
  ADD KEY `emp_ID_2` (`emp_ID`),
  ADD KEY `emp_NO_2` (`emp_NO`),
  ADD KEY `emp_NO_3` (`emp_NO`);

--
-- Indexes for table `hardwaretb`
--
ALTER TABLE `hardwaretb`
  ADD PRIMARY KEY (`hw_ID`),
  ADD KEY `hw_IDs` (`hw_ID`);

--
-- Indexes for table `hw_parttb`
--
ALTER TABLE `hw_parttb`
  ADD PRIMARY KEY (`hwp_ID`);

--
-- Indexes for table `managertb`
--
ALTER TABLE `managertb`
  ADD PRIMARY KEY (`manager_ID`),
  ADD KEY `managertb_ibfk_1` (`deptID`);

--
-- Indexes for table `manutb`
--
ALTER TABLE `manutb`
  ADD PRIMARY KEY (`manuID`);

--
-- Indexes for table `moduletb`
--
ALTER TABLE `moduletb`
  ADD PRIMARY KEY (`module_ID`);

--
-- Indexes for table `new_table`
--
ALTER TABLE `new_table`
  ADD PRIMARY KEY (`emp_ID`);

--
-- Indexes for table `postb`
--
ALTER TABLE `postb`
  ADD PRIMARY KEY (`pos_ID`),
  ADD KEY `manager_ID` (`manager_ID`);

--
-- Indexes for table `projecttb`
--
ALTER TABLE `projecttb`
  ADD PRIMARY KEY (`project_ID`);

--
-- Indexes for table `reqformtb`
--
ALTER TABLE `reqformtb`
  ADD PRIMARY KEY (`reqformid`);

--
-- Indexes for table `request_tb`
--
ALTER TABLE `request_tb`
  ADD PRIMARY KEY (`request_id`),
  ADD KEY `emp_ID` (`emp_ID`),
  ADD KEY `main_hw_ID` (`hw_ID`);

--
-- Indexes for table `swtb`
--
ALTER TABLE `swtb`
  ADD PRIMARY KEY (`sw_ID`);

--
-- Indexes for table `usertb`
--
ALTER TABLE `usertb`
  ADD PRIMARY KEY (`session_ID`),
  ADD KEY `emp_ID` (`emp_ID`);

--
-- Indexes for table `vendortb`
--
ALTER TABLE `vendortb`
  ADD PRIMARY KEY (`vendor_ID`);

--
-- Indexes for table `warrantytb`
--
ALTER TABLE `warrantytb`
  ADD PRIMARY KEY (`warID`),
  ADD KEY `warID` (`warID`),
  ADD KEY `warID_2` (`warID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aktifitas`
--
ALTER TABLE `aktifitas`
  MODIFY `akt_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `approvaltb`
--
ALTER TABLE `approvaltb`
  MODIFY `approvalid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `depttb`
--
ALTER TABLE `depttb`
  MODIFY `deptID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `devcattb`
--
ALTER TABLE `devcattb`
  MODIFY `dev_catID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `emptb`
--
ALTER TABLE `emptb`
  MODIFY `emp_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `emptb3`
--
ALTER TABLE `emptb3`
  MODIFY `emp_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `hardwaretb`
--
ALTER TABLE `hardwaretb`
  MODIFY `hw_ID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `managertb`
--
ALTER TABLE `managertb`
  MODIFY `manager_ID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `manutb`
--
ALTER TABLE `manutb`
  MODIFY `manuID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `moduletb`
--
ALTER TABLE `moduletb`
  MODIFY `module_ID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `postb`
--
ALTER TABLE `postb`
  MODIFY `pos_ID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `projecttb`
--
ALTER TABLE `projecttb`
  MODIFY `project_ID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `reqformtb`
--
ALTER TABLE `reqformtb`
  MODIFY `reqformid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `request_tb`
--
ALTER TABLE `request_tb`
  MODIFY `request_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `swtb`
--
ALTER TABLE `swtb`
  MODIFY `sw_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vendortb`
--
ALTER TABLE `vendortb`
  MODIFY `vendor_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `warrantytb`
--
ALTER TABLE `warrantytb`
  MODIFY `warID` int(3) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `emptb3`
--
ALTER TABLE `emptb3`
  ADD CONSTRAINT `emptb3_ibfk_1` FOREIGN KEY (`emp_ID`) REFERENCES `emptb3` (`emp_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `managertb`
--
ALTER TABLE `managertb`
  ADD CONSTRAINT `managertb_ibfk_1` FOREIGN KEY (`deptID`) REFERENCES `depttb` (`deptID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `postb`
--
ALTER TABLE `postb`
  ADD CONSTRAINT `postb_ibfk_1` FOREIGN KEY (`manager_ID`) REFERENCES `managertb` (`manager_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reqformtb`
--
ALTER TABLE `reqformtb`
  ADD CONSTRAINT `reqformtb_ibfk_1` FOREIGN KEY (`reqformid`) REFERENCES `emptb` (`emp_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `request_tb`
--
ALTER TABLE `request_tb`
  ADD CONSTRAINT `request_tb_ibfk_1` FOREIGN KEY (`emp_ID`) REFERENCES `emptb` (`emp_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
