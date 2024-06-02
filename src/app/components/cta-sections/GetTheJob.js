import React from "react";

const GetTheJob = () => {
	return (
		<section className="py-20 w-full table relative bg-background-2 bg-top bg-no-repeat bg-cover">
			<div className="absolute inset-0 bg-slate-900/70"></div>
			<div className="container relative">
				<div className="grid grid-cols-1 text-center">
					<h3 className="mb-4 md:text-[26px] text-2xl text-white font-medium">
						Get the job that's right for you
					</h3>

					<p className="text-white/80 max-w-xl mx-auto">
						Search all the open positions on the web. Get your own personalized salary estimate.
						Read reviews on over 30000+ companies worldwide.
					</p>

					<a
						href="#!"
						data-type="youtube"
						data-id="yba7hPeTSjk"
						className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 mx-auto mt-10"
					>
						<i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default GetTheJob;
