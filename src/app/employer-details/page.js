import React from "react";
import HeroSection from "../job-categories/HeroSection";
import SectionContainer from "../components/SectionContainer";
import EmployerHeader from "./EmployerHeader";
import DetailBody from "./DetailBody";
import RelatedCompanies from "../components/cta-sections/RelatedCompanies";
import ExploreJob from "../components/cta-sections/ExploreJob";

const page = () => {
	return (
		<>
			<HeroSection customBG={"bg-background-4"} />
			<SectionContainer className="relative mb:pb-24 pb-16 -mt-16 z-1">
				<EmployerHeader />
				<DetailBody />
				<RelatedCompanies />
				<ExploreJob />
			</SectionContainer>
		</>
	);
};

export default page;
