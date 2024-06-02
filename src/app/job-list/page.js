import React from "react";
import HeroSection from "../job-categories/HeroSection";

import JobList from "./JobList";
import ExploreJob from "../components/cta-sections/ExploreJob";
import HeresWhy from "../components/cta-sections/HeresWhy";

const page = () => {
	return (
		<>
			<section class="relative -mt-[42px] md:pb-24 pb-16">
				<HeroSection title={"Job List"} />
				<JobList />
				<HeresWhy />
				<ExploreJob />
			</section>
		</>
	);
};

export default page;
