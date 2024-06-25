import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setIsSeach, setKeyword }) => {
	const handleChange = async (e) => {
		if (e.target.value === "") {
			setIsSeach(false);
		} else {
			setIsSeach(true);
		}
		setKeyword(e.target.value);
	};

	return (
		<form
			action=''
			className='relative pb-4'>
			<input
				type='text'
				placeholder='Search here...'
				className='w-full p-2 px-2 pl-5 outline-none border  bg-primary border-content/20 rounded-md placeholder:text-search placeholder:opacity-90'
				onChange={(e) => handleChange(e)}
			/>
			<FaSearch
				className='absolute top-2 right-2 z-20 text-accent text-2xl
			opacity-80 font-bold'
			/>
		</form>
	);
};

export default SearchBar;
