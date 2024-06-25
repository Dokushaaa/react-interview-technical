import React from "react";
import { Link } from "react-router-dom";
import { TbIcons } from "react-icons/tb";
import { FaRocketchat, FaCalendarAlt, FaDatabase } from "react-icons/fa";
import Logo from "./svg/Logo";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaGears } from "react-icons/fa6";

const Navigation = () => {
	return (
		<>
			{/* TODO: fix aside navbar get components from youtube */}
			<aside className='px-4 py-6 w-[250px]  h-screen relative border-r border-line'>
				<div className='flex items-center gap-5 sticky top-0'>
					<Logo />
					<h2 className='mb-0 uppercase text-justify'>School Dashboard</h2>
				</div>
				<ul className='nav'>
					<li className='nav-link active'>
						<Link to='#'>
							<TbIcons />
							Dashboard
						</Link>
					</li>
					<li className='nav-link'>
						<Link to='#'>
							<FaRocketchat />
							Messenger
						</Link>
					</li>
					<li className='nav-link'>
						<Link to='#'>
							<FaCalendarAlt />
							Calendar
						</Link>
					</li>
					<li className='nav-link'>
						<Link to='#'>
							<FaDatabase />
							Database
						</Link>
					</li>
					<li className='nav-link'>
						<Link to='#'>
							<AiOutlineSchedule />
							Attendance
						</Link>
					</li>
					<li className='nav-link'>
						<Link to='#'>
							<FaGears />
							Settings
						</Link>
					</li>
				</ul>
			</aside>
		</>
	);
};

export default Navigation;
