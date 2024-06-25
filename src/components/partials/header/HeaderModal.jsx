/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { ImgUrl } from "../../helpers/functions-general";

const HeaderModal = ({ showInfo }) => {
	const handleCloseShowInfo = () => showInfo(false);
	return (
		<>
			<div className='mobile__sideBar w-2/3 h-screen fixed z-[999] bg-header flex translate-x-1/2 translate-y-[5rem] transition-all duration-500 border-t-2 border-accent'>
				<ul className='mobileNavBar flex flex-col gap-5 items-center py-10 text-2xl w-full'>
					<li>
						<img
							className='size-20'
							src={`${ImgUrl}/MiniLogo.svg`}
							alt=''
						/>
					</li>
					<li className='navbar-item active'>
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
							<a href='#skills'>Experience</a>
						</button>
					</li>
					<li className='navbar-item'>
						<button>
							<a href='#contacts'>Contacts</a>
						</button>
					</li>
					<li className='pt-14 text-base'>
						<p>Saavedra-Portfolio</p>
					</li>
					<li className='text-base'>
						<p>&copy; SaavedraArris/Dokusha</p>
					</li>
				</ul>
			</div>
		</>
	);
};

export default HeaderModal;
