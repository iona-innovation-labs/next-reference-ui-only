import React from "react";
import BlogDetails from "./BlogDetail";
import BlogDetailsHeader from "./BlogDetailHeader";
import SectionContainer from "../components/SectionContainer";
import RelatedBlogs from "../components/cta-sections/RelatedBlogs";
import ExploreJob from "../components/cta-sections/ExploreJob";

const page = () => {
	return (
		<>
			<BlogDetailsHeader />
			<SectionContainer>
				<BlogDetails />
				<RelatedBlogs />
				<ExploreJob />
			</SectionContainer>
		</>
	);
};

export default page;
