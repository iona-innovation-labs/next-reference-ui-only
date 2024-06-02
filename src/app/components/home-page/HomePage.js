import React from "react";
import MainSection from "./MainSection";

import PopularCategories from "../cta-sections/PopularCategories";
import GetTheJob from "../cta-sections/GetTheJob";
import MillionJobs from "../cta-sections/MillionJobs";
import PopularJobs from "../cta-sections/PopularJobs";
import JobStat from "../cta-sections/JobStat";
import BestCompanies from "../cta-sections/BestCompanies";
import LatestBlog from "../cta-sections/LatestBlog";

const HomePage = () => {
	return (
		<div>
			<MainSection />
			<section className="relative md:pb-24 pb-16">
				<PopularCategories />
				<MillionJobs />
				<PopularJobs />
			</section>
			<GetTheJob />
			<section className="relative md:py-24 py-16">
				<JobStat />
				<BestCompanies />
				<LatestBlog />
			</section>
		</div>
	);
};

export default HomePage;
