import React from "react";
import GoogleMap from "./GoogleMap";
import SectionContainer from "../components/SectionContainer";
import ContactBody from "./ContactBody";
import ContactFooter from "./ContactFooter";

const page = () => {
	return (
		<>
			<GoogleMap />
			<SectionContainer>
				<ContactBody />
				<ContactFooter />
			</SectionContainer>
		</>
	);
};

export default page;
