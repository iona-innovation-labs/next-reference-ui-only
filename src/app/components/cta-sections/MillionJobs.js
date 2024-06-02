import React from "react";

const MillionJobs = () => {
	return (
		<div className="container md:mt-24 md:pb-16 mt-16">
			<div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
				<div className="lg:col-span-5 md:col-span-6">
					<div className="relative">
						<div className="relative">
							<img
								src="assets/images/about/ab01.jpg"
								className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700"
								alt=""
							/>
							<div className="absolute top-0 translate-y-2/4 end-0 text-center">
								<a
									href="#!"
									data-type="youtube"
									data-id="yba7hPeTSjk"
									className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white"
								>
									<i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
								</a>
							</div>
						</div>
						<div className="absolute md:-end-5 end-0 -bottom-16">
							<img
								src="assets/images/about/ab02.jpg"
								className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
					<div className="lg:ms-5">
						<h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">
							Millions of jobs. <br /> Find the one that's right for you.
						</h3>

						<p className="text-slate-400 max-w-xl">
							Search all the open positions on the web. Get your own personalized salary estimate.
							Read reviews on over 30000+ companies worldwide.
						</p>

						<ul className="list-none text-slate-400 mt-4">
							<li className="mb-1 flex">
								<i className="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Digital
								Marketing Solutions for Tomorrow
							</li>
							<li className="mb-1 flex">
								<i className="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Our Talented
								& Experienced Marketing Agency
							</li>
							<li className="mb-1 flex">
								<i className="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Create your
								own skin to match your brand
							</li>
						</ul>

						<div className="mt-6">
							<a
								href="contact.html"
								className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white mt-2 rounded-md"
							>
								<i className="uil uil-envelope"></i> Contact us
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MillionJobs;
