import React from "react";
import HeroSection from "../job-categories/HeroSection";
import Features from "../components/cta-sections/Features";
import FAQ from "../components/cta-sections/FAQ";
import ExploreJob from "../components/cta-sections/ExploreJob";
import SectionContainer from "../components/SectionContainer";

const page = () => {
	return (
		<>
			<HeroSection title={"How it works?"} breadcrumb={"Services"} />
			<Features withoutHeader={true} />
			<SectionContainer>
				<FAQ />
				<ExploreJob />
			</SectionContainer>
		</>
	);
};

export default page;
