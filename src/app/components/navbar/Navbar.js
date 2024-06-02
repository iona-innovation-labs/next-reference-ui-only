"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

import LogoContainer from "./LogoContainer";
import MobileMenu from "./MobileMenu";
import ProfileButton from "./ProfileButton";
import SearchInput from "./SearchInput";
import NavigationMenu from "./NavigationMenu";

const Navbar = () => {
	const pathname = usePathname();

	const checkStringInList = (str, stringList) => {
		for (let i = 0; i < stringList.length; i++) {
			if (str === stringList[i]) {
				return false; // String exists in the list
			}
		}
		return true; // String does not exist in the list
	};

	const lightNavPages = ["/", "/job-detail", "/contact"];

	const isLight = checkStringInList(pathname, lightNavPages);

	const windowScroll = () => {
		const navbar = document.getElementById("topnav");
		if (navbar != null) {
			if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
				navbar.classList.add("nav-sticky");
			} else {
				navbar.classList.remove("nav-sticky");
			}
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", (ev) => {
			ev.preventDefault();
			windowScroll();
		});
	}, []); // no dependencies

	return (
		<div>
			<nav id="topnav" className="defaultscroll is-sticky ">
				<div className="container">
					<LogoContainer isLight={isLight} />
					<MobileMenu isLight={isLight} />
					<ul className="buy-button list-none mb-0">
						<SearchInput />
						<ProfileButton />
					</ul>
					<NavigationMenu isLight={isLight} />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
