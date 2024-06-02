import React from "react";
import HeroSection from "../job-categories/HeroSection";
import Features from "../components/cta-sections/Features";
import MillionJobs from "../components/cta-sections/MillionJobs";
import GetTheJob2 from "../components/cta-sections/GetTheJob2";
import JobStat from "../components/cta-sections/JobStat";
import QuestionAndAnswer from "../components/cta-sections/QuestionAndAnswer";
import ExploreJob from "../components/cta-sections/ExploreJob";

const page = () => {
	return (
		<>
			<HeroSection title={"About Us"} />
			<section className="relative bg-slate-50 dark:bg-slate-800 lg:py-24 py-16">
				<MillionJobs />
				<Features />
				<GetTheJob2 />
				<JobStat />
				<QuestionAndAnswer />
				<ExploreJob />
			</section>
		</>
	);
};

export default page;
