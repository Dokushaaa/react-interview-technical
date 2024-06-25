import React, { useEffect, useState } from "react";
import { ImgUrl } from "../../helpers/functions-general";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderModal from "./HeaderModal";
import { FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
	const [showInfo, setShowInfo] = React.useState(false);
	const handleShowInfo = () => {
		setShowInfo(!showInfo);
	};
	const [showMode, setModeInfo] = React.useState(false);

	const handleModeInfo = () => {
		setModeInfo(!showMode);
	};

	return (
		<>
			{/* sticky top-0  z-[999] */}

			<header className='header flex flex-row items-center gap-5 justify-around md:px-5 bg-header w-full fixed z-[999] top-0 md:py-5'>
				<div className='header__logo flex flex-row items-center gap-2'>
					<img
						className='size-20'
						src={`${ImgUrl}/MiniLogo.svg`}
						alt=''
					/>
					<p className='md:hidden mb-0'>Saavedra</p>
				</div>
				<div className='header__nav hidden md:flex'>
					<ul className='flex flex-row items-center gap-10'>
						<li className='navbar-item'>
							{" "}
							<button>
								<a href='#home'>Home</a>{" "}
							</button>
						</li>
						<li className='navbar-item'>
							<button>
								<a href='#about'>About</a>{" "}
							</button>
						</li>
						<li className='navbar-item'>
							<button>
								<a href='#skills'>Experience</a>{" "}
							</button>
						</li>
						<li className='navbar-item'>
							<button>
								<a href='#contacts'>Contacts</a>{" "}
							</button>
						</li>
					</ul>
				</div>
				<div className='header__btns hidden md:flex md:flex-row md:gap-5 md:items-center'>
					<button
						onClick={handleModeInfo}
						className='text-2xl  duration-500 transition-all'>
						{showMode ? <FaSun /> : <FaMoon />}
					</button>
					<button className='btn btn--yellow'>Contact Me</button>
				</div>
				<button
					onClick={handleShowInfo}
					className='text-2xl md:hidden duration-500 transition-all'>
					{showInfo ? <FaTimes /> : <RxHamburgerMenu />}
				</button>
			</header>
			{showInfo && <HeaderModal showInfo={showInfo} />}
		</>
	);
};

export default Header;
