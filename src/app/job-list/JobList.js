import React from "react";
import LeftPanel from "./LeftPanel";
import MainPanel from "./MainPanel";

const JobList = () => {
	return (
		<section class="relative md:py-24 py-16">
			<div class="container">
				<div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
					<LeftPanel />
					<MainPanel />
				</div>
			</div>
		</section>
	);
};

export default JobList;
