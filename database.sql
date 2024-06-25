-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2024 at 01:07 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_portfoliomain`
--
DROP DATABASE IF EXISTS `react_portfoliomain`;
CREATE DATABASE IF NOT EXISTS `react_portfoliomain` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `react_portfoliomain`;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_about`
--

DROP TABLE IF EXISTS `tbl_about`;
CREATE TABLE `tbl_about` (
  `about_aid` int(11) NOT NULL,
  `about_title` text NOT NULL,
  `about_description` text NOT NULL,
  `about_image` text NOT NULL,
  `about_is_active` tinyint(1) NOT NULL,
  `about_published_date` varchar(50) NOT NULL,
  `about_created` varchar(50) NOT NULL,
  `about_datetime` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_about`
--

INSERT INTO `tbl_about` (`about_aid`, `about_title`, `about_description`, `about_image`, `about_is_active`, `about_published_date`, `about_created`, `about_datetime`) VALUES
(2, 'Hi my name is Arris Saavedra, Also known as Dokusha (Online)', 'I am an aspiring web developer specializing in ReactJs. I am a soon-to-be graduate of STI San Pablo\\\'s BSIT 4-Year Course this July 24, 2024. I am currently enjoying my career via learning new things about web-development here at Frontline Businesss Solutions. after my time here is over (486 hrs) i will be learning how to pair up ReactJs, and NextJs on my own free time.', 'motherfucker.jpg', 1, '2024-05-19 22:16:15', '2024-05-17', '2024-05-19 22:16:15');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_background`
--

DROP TABLE IF EXISTS `tbl_background`;
CREATE TABLE `tbl_background` (
  `background_aid` int(11) NOT NULL,
  `background_title` text NOT NULL,
  `background_description` text NOT NULL,
  `background_image` text NOT NULL,
  `background_is_active` tinyint(1) NOT NULL,
  `background_published_date` varchar(50) NOT NULL,
  `background_created` varchar(50) NOT NULL,
  `background_datetime` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_background`
--

INSERT INTO `tbl_background` (`background_aid`, `background_title`, `background_description`, `background_image`, `background_is_active`, `background_published_date`, `background_created`, `background_datetime`) VALUES
(2, 'College: STI San Pablo (2020-2024)', 'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY (BSIT) 2020- July 2024', 'sti.jpg', 1, '2024-05-18', '2024-05-18', '2024-05-18 22:01:12');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_certs`
--

DROP TABLE IF EXISTS `tbl_certs`;
CREATE TABLE `tbl_certs` (
  `certs_aid` int(11) NOT NULL,
  `certs_title` text NOT NULL,
  `certs_description` text NOT NULL,
  `certs_image` text NOT NULL,
  `certs_is_active` tinyint(1) NOT NULL,
  `certs_published_date` varchar(50) NOT NULL,
  `certs_created` varchar(50) NOT NULL,
  `certs_datetime` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_certs`
--

INSERT INTO `tbl_certs` (`certs_aid`, `certs_title`, `certs_description`, `certs_image`, `certs_is_active`, `certs_published_date`, `certs_created`, `certs_datetime`) VALUES
(2, 'Computer Assisted Programming', 'Philippine Skilling Summit 2022', 'Saavedra Arris -Jeff  - Computer-assisted Education Track  - Skilling Summit 2022.jpg', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:09:43'),
(3, 'Digital Security Track', 'Philippine Skilling Summit 2022', 'Saavedra Arris -Jeff  - Digital Security Track  - Skilling Summit 2022.jpg', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:09:56'),
(4, 'Gaming Technology Track', 'Philippine Skilling Summit 2022', 'Saavedra Arris -Jeff  - Gaming Technology Track  - Skilling Summit 2022.jpg', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:10:09'),
(5, 'Quantum Computing Track', 'Philippine Skilling Summit 2022', 'Saavedra Arris -Jeff  - Quantum Computing Track  - Skilling Summit 2022.jpg', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:10:25'),
(6, 'Introduction to angular', 'GoPhilippines', 'webinar_certificate.jpg', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:10:51'),
(7, 'Progamming Languages: Java, C/C++/C#', 'GoPhilippines', 'webinar_certificate111.jpg', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:11:36'),
(8, 'freeCodeCamp: JavaScript', 'Developers use HTML and CSS to control the content and styling of a page. And they use JavaScript to make that page interactive.', 'javascript.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:18:04'),
(9, 'Huawei: Network Foundations', 'Huawei Cloud Service Technology (Network Technology 2)', 'network foundation.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:19:00'),
(10, 'freeCodeCamp: Responsive Web Design', 'In this Responsive Web Design Certification, you\\\'ll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.', 'Responsvie Web Design.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:19:36'),
(11, 'Oracle Academy: Database Foundations', '...', 'oracle academy.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:20:07');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contacts`
--

DROP TABLE IF EXISTS `tbl_contacts`;
CREATE TABLE `tbl_contacts` (
  `contacts_aid` int(11) NOT NULL,
  `contacts_web` text NOT NULL,
  `contacts_userhandle` text NOT NULL,
  `contacts_username` text NOT NULL,
  `contacts_is_active` tinyint(1) NOT NULL,
  `contacts_published_date` varchar(50) NOT NULL,
  `contacts_created` varchar(50) NOT NULL,
  `contacts_datetime` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_contacts`
--

INSERT INTO `tbl_contacts` (`contacts_aid`, `contacts_web`, `contacts_userhandle`, `contacts_username`, `contacts_is_active`, `contacts_published_date`, `contacts_created`, `contacts_datetime`) VALUES
(1, 'FaceBook', 'https://www.facebook.com/ArrisSaavedra/', 'Arris Saavedera', 1, '2024-05-19 20:14:50', '2024', '2024-05-19 20:14:50'),
(2, 'Instagram', 'https://www.instagram.com/dokushaaa/', '@dokushaaa', 1, '2024-05-19 20:14:58', '2024', '2024-05-19 20:14:58'),
(3, 'LinkedIn', 'https://www.linkedin.com/in/arris-jeff-saavedra-a6787a260', 'Arris-Jeff Saavedra', 1, '2024-05-20 07:57:34', '2024', '2024-05-20 07:57:34'),
(4, 'Twitter', 'https://x.com/DokushaShikami', 'Dokusha', 1, '2024-05-19 20:15:11', '2024', '2024-05-19 20:15:11'),
(5, 'Gmail', 'mailto:saavedraarrisss@gmail.com', 'Saavedra Arris', 1, '2024-05-19 22:10:00', '2024', '2024-05-19 22:10:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_hero`
--

DROP TABLE IF EXISTS `tbl_hero`;
CREATE TABLE `tbl_hero` (
  `hero_aid` int(11) NOT NULL,
  `hero_title` text NOT NULL,
  `hero_description` text NOT NULL,
  `hero_context` text NOT NULL,
  `hero_image` text NOT NULL,
  `hero_is_active` tinyint(1) NOT NULL,
  `hero_published_date` varchar(50) NOT NULL,
  `hero_created` varchar(50) NOT NULL,
  `hero_datetime` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_hero`
--

INSERT INTO `tbl_hero` (`hero_aid`, `hero_title`, `hero_description`, `hero_context`, `hero_image`, `hero_is_active`, `hero_published_date`, `hero_created`, `hero_datetime`) VALUES
(2, 'Saavedra, Arris-Jeff S', 'an upcoming graduate of STI College San Pablo City. Specializing in project management.', 'I also am training to be able to be a full-stack developer in the near future', 'reactjs-svgrepo-com.svg', 1, '2024-05-19 00:48:05', '2024', '2024-05-19 00:48:05');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_proglang`
--

DROP TABLE IF EXISTS `tbl_proglang`;
CREATE TABLE `tbl_proglang` (
  `proglang_aid` int(11) NOT NULL,
  `proglang_title` text NOT NULL,
  `proglang_description` text NOT NULL,
  `proglang_image` text NOT NULL,
  `proglang_is_active` tinyint(1) NOT NULL,
  `proglang_published_date` varchar(50) NOT NULL,
  `proglang_created` varchar(50) NOT NULL,
  `proglang_datetime` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_proglang`
--

INSERT INTO `tbl_proglang` (`proglang_aid`, `proglang_title`, `proglang_description`, `proglang_image`, `proglang_is_active`, `proglang_published_date`, `proglang_created`, `proglang_datetime`) VALUES
(1, 'C Sharp', 'C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines', 'c-sharp-svgrepo-com.svg', 1, '2024-05-17', '2024-05-17', '2024-05-17 14:29:18'),
(2, 'Java', 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.', 'java-svgrepo-com.svg', 1, '2024-05-17', '2024-05-17', '2024-05-17 14:30:27'),
(3, 'Oracle', 'Oracle makes software, called database management systems (DBMS), to create and manage databases. An RDBMS is a relational database management system. An Oracle Database (aka Oracle RDBMS) is a collection of data organized by type with relationships being maintained between the different types.', 'oracle-svgrepo-com.svg', 1, '2024-05-17', '2024-05-17', '2024-05-17 14:31:17'),
(4, 'HTML', 'HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.', 'html-5-svgrepo-com.svg', 1, '2024-05-17', '2024-05-17', '2024-05-17 14:31:39'),
(5, 'CSS', 'Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.', 'css-3-svgrepo-com.svg', 1, '2024-05-17', '2024-05-17', '2024-05-17 14:32:28'),
(6, 'JavaScript', 'JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.', 'js-svgrepo-com.svg', 1, '2024-05-17', '2024-05-17', '2024-05-17 14:32:54'),
(7, 'Sass', 'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called \\\"the indented syntax,\\\" uses a syntax similar to Haml.', 'sass-svgrepo-com.svg', 1, '2024-05-17', '2024-05-17', '2024-05-17 14:33:45'),
(8, 'Tailwind CSS', 'Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables', 'tailwind-svgrepo-com.svg', 1, '2024-05-17', '2024-05-17', '2024-05-17 14:34:24'),
(9, 'ReactJS', 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.', 'reactjs-svgrepo-com.svg', 1, '2024-05-17', '2024-05-17', '2024-05-17 14:34:46'),
(10, 'Python', 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.', 'python-svgrepo-com.svg', 1, '2024-05-17', '2024-05-17', '2024-05-17 14:35:09');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

DROP TABLE IF EXISTS `tbl_projects`;
CREATE TABLE `tbl_projects` (
  `projects_aid` int(11) NOT NULL,
  `projects_title` text NOT NULL,
  `projects_description` text NOT NULL,
  `projects_image` text NOT NULL,
  `projects_is_active` tinyint(1) NOT NULL,
  `projects_published_date` varchar(50) NOT NULL,
  `projects_created` varchar(50) NOT NULL,
  `projects_datetime` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`projects_aid`, `projects_title`, `projects_description`, `projects_image`, `projects_is_active`, `projects_published_date`, `projects_created`, `projects_datetime`) VALUES
(1, 'InsideStyle', 'A portrayal of a real estate website. initially introduced to us a challenge by our proctor of the time during our responsive web design: html, and css module', '1.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:46:08'),
(2, 'The Recipe', 'A Website template from behance.net', '2.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:46:58'),
(3, 'Behance.net : Blog', 'a blog website template from behance.net', 'behance.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:48:57'),
(4, 'Car-dealership template:', 'Rakudokuten dealership is a fictional car delearship website made for the purpose of practicing SASS', 'cardealershipsass.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:49:55'),
(5, 'FBS Clone', 'A clone of the real FBS website. for educational purpose only. used with tailwindcss, and html', 'fbs clone.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:50:42'),
(6, 'FCA Frequently Asked Questions', 'a clone of the real FAQ page of frontline christian academy\\\'s website. made with tailwindcss, and html', 'fca faq.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:51:27'),
(7, 'Gym Project Website', 'A gym website template made with SASS, html, and basic JavaScript', 'gymproject.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:52:03'),
(8, 'Insight', 'A template website made with TailwindCSS, Html, and JavaScript.', 'insight.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:52:44'),
(9, 'Tailwind: Starbucks', 'a non-dynamic copy of starbucks made with tailwindcss, and html', 'map.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:53:17'),
(10, 'McDonalds : SASS', 'a copy of mcDonalds\\\' website made with Sass, and HTML', 'mcdodo.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:53:46'),
(11, 'Michi Ichraku: Sass', 'A website template made with Sass, and HTML', 'michi ichiraku.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:54:09'),
(12, 'Netflix Clone: ReactJS', 'A netflix clone. made with ReactJS props, components, tailwindcss, and react-router-dom.', 'netflix clone.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:55:16'),
(13, 'Portfolio template: Behance.net SASS', 'A website template made with SASS', 'portfolio.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:55:49'),
(14, 'Starbucks: ReactJS', 'A website made with ReactJS. featuring dymanic web-design via tailwindcss.', 'react starbs.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:56:21'),
(15, 'Youtube: ReactJS', 'A youtube clone. made with reactJS, and tailwindcss.', 'ytclone.png', 1, '2024-05-18', '2024-05-18', '2024-05-18 21:57:01');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE `tbl_user` (
  `user_aid` int(11) NOT NULL,
  `user_is_active` tinyint(1) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_key` varchar(250) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_created` varchar(20) NOT NULL,
  `user_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_aid`, `user_is_active`, `user_name`, `user_email`, `user_key`, `user_password`, `user_created`, `user_datetime`) VALUES
(1, 1, 'Arris Saavedra', 'SaavedraArrisss@gmail.com', '', '$2y$10$DsUXKSUHJFARg.I/QiPece7Co4fTfJ2Dr4r8cXcGxy5ZL.afLLqiC', '2024-05-20 12:46:44', '2024-05-20 15:42:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_about`
--
ALTER TABLE `tbl_about`
  ADD PRIMARY KEY (`about_aid`);

--
-- Indexes for table `tbl_background`
--
ALTER TABLE `tbl_background`
  ADD PRIMARY KEY (`background_aid`);

--
-- Indexes for table `tbl_certs`
--
ALTER TABLE `tbl_certs`
  ADD PRIMARY KEY (`certs_aid`);

--
-- Indexes for table `tbl_contacts`
--
ALTER TABLE `tbl_contacts`
  ADD PRIMARY KEY (`contacts_aid`);

--
-- Indexes for table `tbl_hero`
--
ALTER TABLE `tbl_hero`
  ADD PRIMARY KEY (`hero_aid`);

--
-- Indexes for table `tbl_proglang`
--
ALTER TABLE `tbl_proglang`
  ADD PRIMARY KEY (`proglang_aid`);

--
-- Indexes for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`projects_aid`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_about`
--
ALTER TABLE `tbl_about`
  MODIFY `about_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_background`
--
ALTER TABLE `tbl_background`
  MODIFY `background_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_certs`
--
ALTER TABLE `tbl_certs`
  MODIFY `certs_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_contacts`
--
ALTER TABLE `tbl_contacts`
  MODIFY `contacts_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_hero`
--
ALTER TABLE `tbl_hero`
  MODIFY `hero_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_proglang`
--
ALTER TABLE `tbl_proglang`
  MODIFY `proglang_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `projects_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
