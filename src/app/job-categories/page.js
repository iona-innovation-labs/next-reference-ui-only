import React from "react";
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";

const page = () => {
	return (
		<div>
			<HeroSection title={"Job Categories"} />
			<CategoriesSection />
		</div>
	);
};

export default page;
