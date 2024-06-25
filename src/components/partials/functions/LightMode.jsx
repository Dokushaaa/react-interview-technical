import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";

const LightMode = () => {
	function handleChangeColorTheme() {
		if (
			localStorage.getItem("theme") !== null &&
			localStorage.getItem("theme") === "dark"
		) {
			localStorage.setItem("theme", "light");
			document.querySelector("body").setAttribute("class", "");
			document.querySelector("body").setAttribute("class", "light");
		} else {
			localStorage.setItem("theme", "dark");
			document.querySelector("body").setAttribute("class", "");
			document.querySelector("body").setAttribute("class", "dark");
		}
	}
	React.useEffect(() => {
		if (localStorage.getItem("theme") !== null) {
			document.querySelector("body").setAttribute("class", "");
			document
				.querySelector("body")
				.setAttribute("class", localStorage.getItem("theme"));
		}
	}, [localStorage.getItem("theme")]);
	const readTheme = localStorage.getItem("theme");

	const handleModeInfo = () => {
		setModeInfo(!showMode);
	};

	return (
		<>
			<button onClick={() => handleChangeColorTheme()}>
				<FaMoon
					className='rotate-20 text-content transition-all
				duration-500'
				/>
			</button>
		</>
	);
};

export default LightMode;
