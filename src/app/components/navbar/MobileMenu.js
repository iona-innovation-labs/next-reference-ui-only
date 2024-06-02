"use client";
import React from "react";
import { toggleMenu } from "@/app/assets/helper";

const MobileMenu = () => {
	const onClick = () => {
		toggleMenu();
	};
	return (
		<div className="menu-extras">
			<div className="menu-item">
				<a className="navbar-toggle" id="isToggle" onClick={onClick}>
					<div className="lines">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</a>
			</div>
		</div>
	);
};

export default MobileMenu;
