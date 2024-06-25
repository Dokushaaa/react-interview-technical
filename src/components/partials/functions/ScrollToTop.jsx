import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
	let calcScrollValue = () => {
		let scrollProgress = document.getElementById("progressTop");
		let progressValue = document.getElementById("progressTop-value");

		let pos = document.documentElement.scrollTop;
		let calcHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		let scrollValue = Math.round((pos * 100) / calcHeight);

		if (pos > 100) {
			scrollProgress.style.opacity = "100";
		} else {
			scrollProgress.style.opacity = "0";
		}

		scrollProgress.addEventListener("click", () => {
			document.documentElement.scrollTop = 0;
		});

		scrollProgress.style.background = `conic-gradient(#663399 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
	};

	window.onscroll = calcScrollValue;
	window.onload = calcScrollValue;

	return (
		<div id='progressTop'>
			<span id='progressTop-value'>
				<FaArrowUp className='text-[25px] text-content' />
			</span>
		</div>
	);
};

export default ScrollToTop;
