import React from "react";
import LightMode from "../../../partials/functions/LightMode";
import { CiBellOn } from "react-icons/ci";
import {
	LiaAngleDownSolid,
	LiaKeySolid,
	LiaSignOutAltSolid,
	LiaUserCircle,
} from "react-icons/lia";
import { Link } from "react-router-dom";
import ModalWrapper from "../../../partials/modals/ModalWrapper";

const DbHeader = ({
	title = "EMPLOYEE INFORMATION SYSTEM",
	name = "Hiro",
	email = "hiro@gmail.com",
}) => {
	const [showInfo, setShowInfo] = React.useState(false);
	const handleShowInfo = () => {
		setShowInfo(!showInfo);
		// console.log(showInfo);
	};
	return (
		<>
			<header className='border-b-4 border-accent py-1 w-full z-[99]'>
				<div className='container '>
					<div className='flex items-center gap-5 justify-between relative'>
						<h4 className='text-content mb-0 font-bold uppercase'>{title}</h4>
						<div className='flex items-center gap-5'>
							<LightMode />
							<button className='text-3xl'>
								<CiBellOn />
							</button>
							<img
								src='https://via.placeholder.com/40x40'
								className='size-[40px] rounded-full object-cover'
								alt=''
							/>
							<div>
								<button
									className='flex items-center gap-5'
									onClick={handleShowInfo}>
									{name}
									<LiaAngleDownSolid />
								</button>

								<div
									className={`transition-all duration-500 ${
										showInfo ? "block " : "hidden"
									} header-dropdown absolute bg-primary p-6  border-b-4 border-x-2 border-accent rounded-md right-[-10px] top-[calc(100%+20px)] text-center shadow-md z-50`}>
									<img
										src='https://via.placeholder.com/40x40'
										className='size-[40px] rounded-full object-cover mx-auto'
										alt=''
									/>

									<h4 className='mb-1'>{name}</h4>
									<p className='text-sm w-[150px] truncate'>{email}</p>
									<ul className='flex justify-center gap-5 '>
										<li>
											<Link
												to='#'
												className='text-2xl'>
												<LiaUserCircle />
											</Link>
										</li>
										<li>
											<Link
												to='#'
												className='text-2xl'>
												<LiaKeySolid />
											</Link>
										</li>
										<li>
											<button className='text-2xl'>
												<LiaSignOutAltSolid />
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default DbHeader;
