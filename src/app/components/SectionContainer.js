import React from "react";

const SectionContainer = ({ children, className }) => {
	return (
		<section className={className ? className : "relative md:py-24 py-16"}>{children}</section>
	);
};

export default SectionContainer;
