import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<>
			<div className='404pager'>
				<div className='flex flex-col justify-center gap-2 items-center h-screen'>
					<h1 className='text-accent text-3xl'>
						<span className='italic'>404</span> - Page Not Found
					</h1>
					<p>Sorry, the page you are looking for could not be found.</p>
					<img
						src='/public/404.gif'
						alt='ducking-around'
						className='size-[20rem] transition-all rounded-md border-2 border-gradient-to-r from-blue-500 to-purple-500'
					/>
					<button className='btn btn--accent'>
						<Link to='/login'>Proceed to Login?</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default PageNotFound;
