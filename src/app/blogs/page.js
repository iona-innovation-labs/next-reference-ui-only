import React from "react";
import BlogItems from "./BlogItems";
import HeroSection from "../job-categories/HeroSection";
import SectionContainer from "../components/SectionContainer";

const page = () => {
	return (
		<>
			<HeroSection title={"Blogs or News"} breadcrumb={"Blogs"} />
			<SectionContainer>
				<BlogItems />
			</SectionContainer>
		</>
	);
};

export default page;
