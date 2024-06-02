import React from "react";
import JobGridHero from "./JobGridHero";
import JobGridSearch from "./JobGridSearch";
import JobGrid from "./JobGrid";
import ExploreJob from "../components/cta-sections/ExploreJob";
import HeresWhy from "../components/cta-sections/HeresWhy";

const page = () => {
	return (
		<div>
			<JobGridHero />

			<section class="relative -mt-[42px] md:pb-24 pb-16">
				<JobGridSearch />
				<JobGrid />
				<HeresWhy />
				<ExploreJob />
			</section>
		</div>
	);
};

export default page;
