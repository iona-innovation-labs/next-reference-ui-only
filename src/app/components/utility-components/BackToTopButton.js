"use client";
import React from "react";
import { topFunction } from "@/app/assets/helper";

const BackToTopButton = () => {
	const onClick = () => {
		topFunction();
	};
	return (
		<a
			href="#"
			onClick={onClick}
			id="back-to-top"
			className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-emerald-600 text-white justify-center items-center"
		>
			<i className="uil uil-arrow-up"></i>
		</a>
	);
};

export default BackToTopButton;
