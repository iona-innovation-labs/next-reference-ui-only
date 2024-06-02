import React from "react";
import SectionContainer from "../components/SectionContainer";
import Pricing from "./Pricing";
import HeroSection from "../job-categories/HeroSection";
import HeresWhy from "../components/cta-sections/HeresWhy";
import ExploreJob from "../components/cta-sections/ExploreJob";

const page = () => {
	return (
		<>
			<HeroSection title={"Pricing"} />
			<SectionContainer>
				<Pricing />
				<HeresWhy />
				<ExploreJob />
			</SectionContainer>
		</>
	);
};

export default page;
