import React from "react";

const JobStat = () => {
	return (
		<div className="container">
			<div className="relative grid md:grid-cols-3 grid-cols-1 items-center gap-[30px] z-1">
				<div className="counter-box text-center">
					<h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white text-black">
						<span className="counter-value" data-target="1548">
							1010
						</span>
						K+
					</h1>
					<h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">
						Job Fulfillment
					</h5>
				</div>

				<div className="counter-box text-center">
					<h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white text-black">
						<span className="counter-value" data-target="25">
							2
						</span>
						+
					</h1>
					<h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Branches</h5>
				</div>

				<div className="counter-box text-center">
					<h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white text-black">
						<span className="counter-value" data-target="9">
							0
						</span>
						+
					</h1>
					<h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">
						Years Experience
					</h5>
				</div>
			</div>
		</div>
	);
};

export default JobStat;
