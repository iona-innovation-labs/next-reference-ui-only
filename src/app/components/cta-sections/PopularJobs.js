import React from "react";

const PopularJobs = () => {
	return (
		<div className="container md:mt-24 mt-16">
			<div className="grid grid-cols-1 pb-8 text-center">
				<h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
					Popular Jobs
				</h3>

				<p className="text-slate-400 max-w-xl mx-auto">
					Search all the open positions on the web. Get your own personalized salary estimate. Read
					reviews on over 30000+ companies worldwide.
				</p>
			</div>

			<div className="grid md:grid-cols-2 mt-8 gap-[30px]">
				<div className="group rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500">
					<div className="flex items-center justify-between p-6">
						<div className="flex items-center">
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
								<img src="assets/images/company/facebook-logo.png" className="h-8 w-8" alt="" />
							</div>

							<div className="ms-3">
								<a
									href="employer-detail.html"
									className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
								>
									Facebook
								</a>
								<span className="block text-sm text-slate-400">2 days ago</span>
							</div>
						</div>

						<a
							href="job-apply.html"
							className="btn btn-icon btn-lg rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border border-slate-100 dark:border-slate-800 text-emerald-600 group-hover:text-white"
						>
							<i className="uil uil-arrow-up-right"></i>
						</a>
					</div>

					<div className="lg:flex items-center justify-between border-t border-gray-100 dark:border-gray-800 p-6">
						<div>
							<a
								href="job-detail-one.html"
								className="text-lg font-semibold hover:text-emerald-600"
							>
								Web Designer / Developer
							</a>
							<p className="text-slate-400 mt-1">Total Openings: 1</p>
						</div>

						<p className="text-slate-400 lg:mt-0 mt-4">
							<i className="uil uil-usd-circle text-[20px] text-emerald-600"></i> $950 - $1100/mo
						</p>
					</div>

					<div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
						<div>
							<span className="inline-block font-semibold">
								<i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>Verified
							</span>
							<ul className="list-none inline-block ms-1 text-yellow-400">
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline text-slate-400 font-semibold">4.8</li>
							</ul>
						</div>
						<span className="inline-block me-1 text-slate-400">
							<i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"></i>
							Australia
						</span>
					</div>
				</div>

				<div className="group rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500">
					<div className="flex items-center justify-between p-6">
						<div className="flex items-center">
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
								<img src="assets/images/company/google-logo.png" className="h-8 w-8" alt="" />
							</div>

							<div className="ms-3">
								<a
									href="employer-detail.html"
									className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
								>
									Google
								</a>
								<span className="block text-sm text-slate-400">2 days ago</span>
							</div>
						</div>

						<a
							href="job-apply.html"
							className="btn btn-icon btn-lg rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border border-slate-100 dark:border-slate-800 text-emerald-600 group-hover:text-white"
						>
							<i className="uil uil-arrow-up-right"></i>
						</a>
					</div>

					<div className="lg:flex items-center justify-between border-t border-gray-100 dark:border-gray-800 p-6">
						<div>
							<a
								href="job-detail-one.html"
								className="text-lg font-semibold hover:text-emerald-600"
							>
								Marketing Director
							</a>
							<p className="text-slate-400 mt-1">Total Openings: 1</p>
						</div>

						<p className="text-slate-400 lg:mt-0 mt-4">
							<i className="uil uil-usd-circle text-[20px] text-emerald-600"></i> $950 - $1100/mo
						</p>
					</div>

					<div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
						<div>
							<span className="inline-block font-semibold">
								<i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>Verified
							</span>
							<ul className="list-none inline-block ms-1 text-yellow-400">
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline text-slate-400 font-semibold">4.8</li>
							</ul>
						</div>
						<span className="inline-block me-1 text-slate-400">
							<i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"></i>
							USA
						</span>
					</div>
				</div>

				<div className="group rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500">
					<div className="flex items-center justify-between p-6">
						<div className="flex items-center">
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
								<img src="assets/images/company/android.png" className="h-8 w-8" alt="" />
							</div>

							<div className="ms-3">
								<a
									href="employer-detail.html"
									className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
								>
									Android
								</a>
								<span className="block text-sm text-slate-400">2 days ago</span>
							</div>
						</div>

						<a
							href="job-apply.html"
							className="btn btn-icon btn-lg rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border border-slate-100 dark:border-slate-800 text-emerald-600 group-hover:text-white"
						>
							<i className="uil uil-arrow-up-right"></i>
						</a>
					</div>

					<div className="lg:flex items-center justify-between border-t border-gray-100 dark:border-gray-800 p-6">
						<div>
							<a
								href="job-detail-one.html"
								className="text-lg font-semibold hover:text-emerald-600"
							>
								Application Developer
							</a>
							<p className="text-slate-400 mt-1">Total Openings: 1</p>
						</div>

						<p className="text-slate-400 lg:mt-0 mt-4">
							<i className="uil uil-usd-circle text-[20px] text-emerald-600"></i> $950 - $1100/mo
						</p>
					</div>

					<div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
						<div>
							<span className="inline-block font-semibold">
								<i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>Verified
							</span>
							<ul className="list-none inline-block ms-1 text-yellow-400">
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline text-slate-400 font-semibold">4.8</li>
							</ul>
						</div>
						<span className="inline-block me-1 text-slate-400">
							<i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"></i>
							China
						</span>
					</div>
				</div>

				<div className="group rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500">
					<div className="flex items-center justify-between p-6">
						<div className="flex items-center">
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
								<img src="assets/images/company/lenovo-logo.png" className="h-8 w-8" alt="" />
							</div>

							<div className="ms-3">
								<a
									href="employer-detail.html"
									className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
								>
									Lenovo
								</a>
								<span className="block text-sm text-slate-400">2 days ago</span>
							</div>
						</div>

						<a
							href="job-apply.html"
							className="btn btn-icon btn-lg rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border border-slate-100 dark:border-slate-800 text-emerald-600 group-hover:text-white"
						>
							<i className="uil uil-arrow-up-right"></i>
						</a>
					</div>

					<div className="lg:flex items-center justify-between border-t border-gray-100 dark:border-gray-800 p-6">
						<div>
							<a
								href="job-detail-one.html"
								className="text-lg font-semibold hover:text-emerald-600"
							>
								Senior Product Designer
							</a>
							<p className="text-slate-400 mt-1">Total Openings: 1</p>
						</div>

						<p className="text-slate-400 lg:mt-0 mt-4">
							<i className="uil uil-usd-circle text-[20px] text-emerald-600"></i> $950 - $1100/mo
						</p>
					</div>

					<div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
						<div>
							<span className="inline-block font-semibold">
								<i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>Verified
							</span>
							<ul className="list-none inline-block ms-1 text-yellow-400">
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline text-slate-400 font-semibold">4.8</li>
							</ul>
						</div>
						<span className="inline-block me-1 text-slate-400">
							<i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"></i>
							Dubai
						</span>
					</div>
				</div>

				<div className="group rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500">
					<div className="flex items-center justify-between p-6">
						<div className="flex items-center">
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
								<img src="assets/images/company/spotify.png" className="h-8 w-8" alt="" />
							</div>

							<div className="ms-3">
								<a
									href="employer-detail.html"
									className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
								>
									Spotify
								</a>
								<span className="block text-sm text-slate-400">2 days ago</span>
							</div>
						</div>

						<a
							href="job-apply.html"
							className="btn btn-icon btn-lg rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border border-slate-100 dark:border-slate-800 text-emerald-600 group-hover:text-white"
						>
							<i className="uil uil-arrow-up-right"></i>
						</a>
					</div>

					<div className="lg:flex items-center justify-between border-t border-gray-100 dark:border-gray-800 p-6">
						<div>
							<a
								href="job-detail-one.html"
								className="text-lg font-semibold hover:text-emerald-600"
							>
								C++ Developer
							</a>
							<p className="text-slate-400 mt-1">Total Openings: 1</p>
						</div>

						<p className="text-slate-400 lg:mt-0 mt-4">
							<i className="uil uil-usd-circle text-[20px] text-emerald-600"></i> $950 - $1100/mo
						</p>
					</div>

					<div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
						<div>
							<span className="inline-block font-semibold">
								<i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>Verified
							</span>
							<ul className="list-none inline-block ms-1 text-yellow-400">
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline text-slate-400 font-semibold">4.8</li>
							</ul>
						</div>
						<span className="inline-block me-1 text-slate-400">
							<i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"></i>
							India
						</span>
					</div>
				</div>

				<div className="group rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500">
					<div className="flex items-center justify-between p-6">
						<div className="flex items-center">
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
								<img src="assets/images/company/linkedin.png" className="h-8 w-8" alt="" />
							</div>

							<div className="ms-3">
								<a
									href="employer-detail.html"
									className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
								>
									Linkedin
								</a>
								<span className="block text-sm text-slate-400">2 days ago</span>
							</div>
						</div>

						<a
							href="job-apply.html"
							className="btn btn-icon btn-lg rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border border-slate-100 dark:border-slate-800 text-emerald-600 group-hover:text-white"
						>
							<i className="uil uil-arrow-up-right"></i>
						</a>
					</div>

					<div className="lg:flex items-center justify-between border-t border-gray-100 dark:border-gray-800 p-6">
						<div>
							<a
								href="job-detail-one.html"
								className="text-lg font-semibold hover:text-emerald-600"
							>
								Php Developer
							</a>
							<p className="text-slate-400 mt-1">Total Openings: 1</p>
						</div>

						<p className="text-slate-400 lg:mt-0 mt-4">
							<i className="uil uil-usd-circle text-[20px] text-emerald-600"></i> $950 - $1100/mo
						</p>
					</div>

					<div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
						<div>
							<span className="inline-block font-semibold">
								<i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>Verified
							</span>
							<ul className="list-none inline-block ms-1 text-yellow-400">
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline">
									<i className="mdi mdi-star text-lg"></i>
								</li>
								<li className="inline text-slate-400 font-semibold">4.8</li>
							</ul>
						</div>
						<span className="inline-block me-1 text-slate-400">
							<i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"></i>
							Pakistan
						</span>
					</div>
				</div>
			</div>

			<div className="grid md:grid-cols-12 grid-cols-1 mt-8">
				<div className="md:col-span-12 text-center">
					<a
						href="job-list-five.html"
						className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
					>
						See More Jobs <i className="uil uil-arrow-right align-middle"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default PopularJobs;
