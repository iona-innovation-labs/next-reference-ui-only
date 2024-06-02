"use client";
import { changeLayout } from "@/app/assets/helper";
import React from "react";

const PerspectiveSwitcher = () => {
	const onClick = (e) => {
		changeLayout(e);
	};
	return (
		<div className="fixed top-[40%] -left-3 z-50">
			<a href="" id="switchRtl" onClick={onClick}>
				<span className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden">
					LTR
				</span>
				<span className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">
					RTL
				</span>
			</a>
		</div>
	);
};

export default PerspectiveSwitcher;
