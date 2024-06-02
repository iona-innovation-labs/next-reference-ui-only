import React from "react";

const Features = ({ withoutHeader }) => {
	return (
		<div className="container md:mt-24 mt-16">
			{!withoutHeader && (
				<div className="grid grid-cols-1 pb-8 text-center">
					<h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
						Jobstack Features
					</h3>

					<p className="text-slate-400 max-w-xl mx-auto">
						Search all the open positions on the web. Get your own personalized salary estimate.
						Read reviews on over 30000+ companies worldwide.
					</p>
				</div>
			)}

			<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
				<div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
					<div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
						<i className="uil uil-phone text-[30px] text-emerald-600 group-hover:text-white"></i>
					</div>

					<div className="mt-4">
						<a
							href=""
							className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500"
						>
							24/7 Support
						</a>

						<p className="text-slate-400 mt-3 mb-2">
							Many desktop publishing now use and a search for job.
						</p>

						<a href="" className="hover:text-emerald-600 font-medium transition-all duration-500">
							Read More <i className="uil uil-arrow-right"></i>
						</a>
					</div>
				</div>

				<div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
					<div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
						<i className="uil uil-atom text-[30px] text-emerald-600 group-hover:text-white"></i>
					</div>

					<div className="mt-4">
						<a
							href=""
							className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500"
						>
							Tech & Startup Jobs
						</a>

						<p className="text-slate-400 mt-3 mb-2">
							Many desktop publishing now use and a search for job.
						</p>

						<a href="" className="hover:text-emerald-600 font-medium transition-all duration-500">
							Read More <i className="uil uil-arrow-right"></i>
						</a>
					</div>
				</div>

				<div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
					<div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
						<i className="uil uil-user-arrows text-[30px] text-emerald-600 group-hover:text-white"></i>
					</div>

					<div className="mt-4">
						<a
							href=""
							className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500"
						>
							Quick & Easy
						</a>

						<p className="text-slate-400 mt-3 mb-2">
							Many desktop publishing now use and a search for job.
						</p>

						<a href="" className="hover:text-emerald-600 font-medium transition-all duration-500">
							Read More <i className="uil uil-arrow-right"></i>
						</a>
					</div>
				</div>

				<div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
					<div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
						<i className="uil uil-hourglass text-[30px] text-emerald-600 group-hover:text-white"></i>
					</div>

					<div className="mt-4">
						<a
							href=""
							className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500"
						>
							Save Time
						</a>

						<p className="text-slate-400 mt-3 mb-2">
							Many desktop publishing now use and a search for job.
						</p>

						<a href="" className="hover:text-emerald-600 font-medium transition-all duration-500">
							Read More <i className="uil uil-arrow-right"></i>
						</a>
					</div>
				</div>

				<div className="group p-6 shadow dark:shadow-gray-800 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
					<div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-800 rounded-lg transition-all duration-500">
						<i className="uil uil-user-arrows text-[30px] text-emerald-600 group-hover:text-white"></i>
					</div>

					<div className="mt-4">
						<a
							href=""
							className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500"
						>
							Apply with confidence
						</a>

						<p className="text-slate-400 mt-3 mb-2">
							Many desktop publishing now use and a search for job.
						</p>

						<a href="" className="hover:text-emerald-600 font-medium transition-all duration-500">
							Read More <i className="uil uil-arrow-right"></i>
						</a>
					</div>
				</div>

				<div className="group p-6 shadow dark:shadow-gray-800 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
					<div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-800 rounded-lg transition-all duration-500">
						<i className="uil uil-user-arrows text-[30px] text-emerald-600 group-hover:text-white"></i>
					</div>

					<div className="mt-4">
						<a
							href=""
							className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500"
						>
							Reduce Hiring Bias
						</a>

						<p className="text-slate-400 mt-3 mb-2">
							Many desktop publishing now use and a search for job.
						</p>

						<a href="" className="hover:text-emerald-600 font-medium transition-all duration-500">
							Read More <i className="uil uil-arrow-right"></i>
						</a>
					</div>
				</div>

				<div className="group p-6 shadow dark:shadow-gray-800 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
					<div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-800 rounded-lg transition-all duration-500">
						<i className="uil uil-briefcase text-[30px] text-emerald-600 group-hover:text-white"></i>
					</div>

					<div className="mt-4">
						<a
							href=""
							className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500"
						>
							Proactive Employers
						</a>

						<p className="text-slate-400 mt-3 mb-2">
							Many desktop publishing now use and a search for job.
						</p>

						<a href="" className="hover:text-emerald-600 font-medium transition-all duration-500">
							Read More <i className="uil uil-arrow-right"></i>
						</a>
					</div>
				</div>

				<div className="group p-6 shadow dark:shadow-gray-800 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
					<div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-800 rounded-lg transition-all duration-500">
						<i className="uil uil-user-arrows text-[30px] text-emerald-600 group-hover:text-white"></i>
					</div>

					<div className="mt-4">
						<a
							href=""
							className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500"
						>
							No Missed Opportunities
						</a>

						<p className="text-slate-400 mt-3 mb-2">
							Many desktop publishing now use and a search for job.
						</p>

						<a href="" className="hover:text-emerald-600 font-medium transition-all duration-500">
							Read More <i className="uil uil-arrow-right"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
