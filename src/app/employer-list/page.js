import React from "react";
import HeroSection from "../job-categories/HeroSection";
import EmployerList from "./EmployerList";
import SectionContainer from "../components/SectionContainer";
import FAQ from "../components/cta-sections/FAQ";
import ExploreJob from "../components/cta-sections/ExploreJob";

const page = () => {
	return (
		<>
			<HeroSection title={"Employers / Companies"} breadcrumb={"Employers"} />
			<SectionContainer>
				<EmployerList />
				<FAQ />
				<ExploreJob />
			</SectionContainer>
		</>
	);
};

export default page;
