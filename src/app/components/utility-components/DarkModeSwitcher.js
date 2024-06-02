"use client";
import React from "react";
import { changeTheme } from "@/app/assets/helper";

const DarkModeSwitcher = () => {
	const onClick = (e) => {
		changeTheme(e);
	};
	return (
		<>
			<div className="fixed top-1/4 -left-2 z-50">
				<span className="relative inline-block rotate-90">
					<input
						type="checkbox"
						className="checkbox opacity-0 absolute"
						id="chk"
						onClick={onClick}
					/>
					<label
						className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
						for="chk"
					>
						<i className="uil uil-moon text-[20px] text-yellow-500"></i>
						<i className="uil uil-sun text-[20px] text-yellow-500"></i>
						<span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
					</label>
				</span>
			</div>
		</>
	);
};

export default DarkModeSwitcher;
