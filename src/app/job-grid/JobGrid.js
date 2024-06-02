import React from "react";

const JobGrid = () => {
	return (
		<div className="container mt-10">
			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
				<div className="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500">
					<div className="flex justify-between items-start">
						<div>
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
								<img src="assets/images/company/facebook-logo.png" className="h-8 w-8" alt="" />
							</div>
							<a
								href="employer-detail.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Facebook
							</a>
						</div>

						<div className="flex items-center">
							<a
								href="javascript:void(0)"
								className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"
							>
								<i className="mdi mdi-heart"></i>
							</a>
							<a
								href=""
								className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white ms-1"
							>
								<i data-feather="bookmark" className="h-4 w-4"></i>
							</a>
							<a
								href="job-apply.html"
								className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"
							>
								<i className="uil uil-arrow-up-right"></i>
							</a>
						</div>
					</div>

					<div className="mt-3">
						<a
							href="job-detail-one.html"
							className="text-xl hover:text-emerald-600 font-semibold transition-all duration-500"
						>
							Web Designer / Developer
						</a>
						<p className="text-slate-400 mt-2">
							Looking for an experienced Web Designer for an our company.
						</p>

						<div className="mt-3">
							<a href="">
								<span className="bg-orange-500/5 hover:bg-orange-500/20 dark:bg-orange-500/10 hover:dark:bg-orange-500/30 inline-block text-orange-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									Full Time
								</span>
							</a>
							<a href="">
								<span className="bg-purple-600/5 hover:bg-purple-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									$4,000 - $4,500
								</span>
							</a>
							<a href="">
								<span className="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30 inline-block text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500">
									<i className="uil uil-map-marker"></i> Australia
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500">
					<div className="flex justify-between items-start">
						<div>
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
								<img src="assets/images/company/google-logo.png" className="h-8 w-8" alt="" />
							</div>
							<a
								href="employer-detail.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Google
							</a>
						</div>

						<div className="flex items-center">
							<a
								href="javascript:void(0)"
								className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"
							>
								<i className="mdi mdi-heart"></i>
							</a>
							<a
								href=""
								className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white ms-1"
							>
								<i data-feather="bookmark" className="h-4 w-4"></i>
							</a>
							<a
								href="job-apply.html"
								className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"
							>
								<i className="uil uil-arrow-up-right"></i>
							</a>
						</div>
					</div>

					<div className="mt-3">
						<a
							href="job-detail-one.html"
							className="text-xl hover:text-emerald-600 font-semibold transition-all duration-500"
						>
							Marketing Director
						</a>
						<p className="text-slate-400 mt-2">
							Looking for an experienced Web Designer for an our company.
						</p>

						<div className="mt-3">
							<a href="">
								<span className="bg-orange-500/5 hover:bg-orange-500/20 dark:bg-orange-500/10 hover:dark:bg-orange-500/30 inline-block text-orange-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									Full Time
								</span>
							</a>
							<a href="">
								<span className="bg-purple-600/5 hover:bg-purple-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									$4,000 - $4,500
								</span>
							</a>
							<a href="">
								<span className="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30 inline-block text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500">
									<i className="uil uil-map-marker"></i> Australia
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500">
					<div className="flex justify-between items-start">
						<div>
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
								<img src="assets/images/company/android.png" className="h-8 w-8" alt="" />
							</div>
							<a
								href="employer-detail.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Android
							</a>
						</div>

						<div className="flex items-center">
							<a
								href="javascript:void(0)"
								className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"
							>
								<i className="mdi mdi-heart"></i>
							</a>
							<a
								href=""
								className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white ms-1"
							>
								<i data-feather="bookmark" className="h-4 w-4"></i>
							</a>
							<a
								href="job-apply.html"
								className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"
							>
								<i className="uil uil-arrow-up-right"></i>
							</a>
						</div>
					</div>

					<div className="mt-3">
						<a
							href="job-detail-one.html"
							className="text-xl hover:text-emerald-600 font-semibold transition-all duration-500"
						>
							Application Developer
						</a>
						<p className="text-slate-400 mt-2">
							Looking for an experienced Web Designer for an our company.
						</p>

						<div className="mt-3">
							<a href="">
								<span className="bg-orange-500/5 hover:bg-orange-500/20 dark:bg-orange-500/10 hover:dark:bg-orange-500/30 inline-block text-orange-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									Full Time
								</span>
							</a>
							<a href="">
								<span className="bg-purple-600/5 hover:bg-purple-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									$4,000 - $4,500
								</span>
							</a>
							<a href="">
								<span className="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30 inline-block text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500">
									<i className="uil uil-map-marker"></i> Australia
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500">
					<div className="flex justify-between items-start">
						<div>
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
								<img src="assets/images/company/lenovo-logo.png" className="h-8 w-8" alt="" />
							</div>
							<a
								href="employer-detail.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Lenovo
							</a>
						</div>

						<div className="flex items-center">
							<a
								href="javascript:void(0)"
								className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"
							>
								<i className="mdi mdi-heart"></i>
							</a>
							<a
								href=""
								className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white ms-1"
							>
								<i data-feather="bookmark" className="h-4 w-4"></i>
							</a>
							<a
								href="job-apply.html"
								className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"
							>
								<i className="uil uil-arrow-up-right"></i>
							</a>
						</div>
					</div>

					<div className="mt-3">
						<a
							href="job-detail-one.html"
							className="text-xl hover:text-emerald-600 font-semibold transition-all duration-500"
						>
							Senior Product Designer
						</a>
						<p className="text-slate-400 mt-2">
							Looking for an experienced Web Designer for an our company.
						</p>

						<div className="mt-3">
							<a href="">
								<span className="bg-orange-500/5 hover:bg-orange-500/20 dark:bg-orange-500/10 hover:dark:bg-orange-500/30 inline-block text-orange-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									Full Time
								</span>
							</a>
							<a href="">
								<span className="bg-purple-600/5 hover:bg-purple-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									$4,000 - $4,500
								</span>
							</a>
							<a href="">
								<span className="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30 inline-block text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500">
									<i className="uil uil-map-marker"></i> Australia
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500">
					<div className="flex justify-between items-start">
						<div>
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
								<img src="assets/images/company/spotify.png" className="h-8 w-8" alt="" />
							</div>
							<a
								href="employer-detail.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Spotify
							</a>
						</div>

						<div className="flex items-center">
							<a
								href="javascript:void(0)"
								className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"
							>
								<i className="mdi mdi-heart"></i>
							</a>
							<a
								href=""
								className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white ms-1"
							>
								<i data-feather="bookmark" className="h-4 w-4"></i>
							</a>
							<a
								href="job-apply.html"
								className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"
							>
								<i className="uil uil-arrow-up-right"></i>
							</a>
						</div>
					</div>

					<div className="mt-3">
						<a
							href="job-detail-one.html"
							className="text-xl hover:text-emerald-600 font-semibold transition-all duration-500"
						>
							C++ Developer
						</a>
						<p className="text-slate-400 mt-2">
							Looking for an experienced Web Designer for an our company.
						</p>

						<div className="mt-3">
							<a href="">
								<span className="bg-orange-500/5 hover:bg-orange-500/20 dark:bg-orange-500/10 hover:dark:bg-orange-500/30 inline-block text-orange-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									Full Time
								</span>
							</a>
							<a href="">
								<span className="bg-purple-600/5 hover:bg-purple-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									$4,000 - $4,500
								</span>
							</a>
							<a href="">
								<span className="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30 inline-block text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500">
									<i className="uil uil-map-marker"></i> Australia
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500">
					<div className="flex justify-between items-start">
						<div>
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
								<img src="assets/images/company/linkedin.png" className="h-8 w-8" alt="" />
							</div>
							<a
								href="employer-detail.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Linkedin
							</a>
						</div>

						<div className="flex items-center">
							<a
								href="javascript:void(0)"
								className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"
							>
								<i className="mdi mdi-heart"></i>
							</a>
							<a
								href=""
								className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white ms-1"
							>
								<i data-feather="bookmark" className="h-4 w-4"></i>
							</a>
							<a
								href="job-apply.html"
								className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"
							>
								<i className="uil uil-arrow-up-right"></i>
							</a>
						</div>
					</div>

					<div className="mt-3">
						<a
							href="job-detail-one.html"
							className="text-xl hover:text-emerald-600 font-semibold transition-all duration-500"
						>
							Php Developer
						</a>
						<p className="text-slate-400 mt-2">
							Looking for an experienced Web Designer for an our company.
						</p>

						<div className="mt-3">
							<a href="">
								<span className="bg-orange-500/5 hover:bg-orange-500/20 dark:bg-orange-500/10 hover:dark:bg-orange-500/30 inline-block text-orange-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									Full Time
								</span>
							</a>
							<a href="">
								<span className="bg-purple-600/5 hover:bg-purple-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									$4,000 - $4,500
								</span>
							</a>
							<a href="">
								<span className="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30 inline-block text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500">
									<i className="uil uil-map-marker"></i> Australia
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500">
					<div className="flex justify-between items-start">
						<div>
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
								<img src="assets/images/company/circle-logo.png" className="h-8 w-8" alt="" />
							</div>
							<a
								href="employer-detail.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Circle CI
							</a>
						</div>

						<div className="flex items-center">
							<a
								href="javascript:void(0)"
								className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"
							>
								<i className="mdi mdi-heart"></i>
							</a>
							<a
								href=""
								className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white ms-1"
							>
								<i data-feather="bookmark" className="h-4 w-4"></i>
							</a>
							<a
								href="job-apply.html"
								className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"
							>
								<i className="uil uil-arrow-up-right"></i>
							</a>
						</div>
					</div>

					<div className="mt-3">
						<a
							href="job-detail-one.html"
							className="text-xl hover:text-emerald-600 font-semibold transition-all duration-500"
						>
							Web Designer / Developer
						</a>
						<p className="text-slate-400 mt-2">
							Looking for an experienced Web Designer for an our company.
						</p>

						<div className="mt-3">
							<a href="">
								<span className="bg-orange-500/5 hover:bg-orange-500/20 dark:bg-orange-500/10 hover:dark:bg-orange-500/30 inline-block text-orange-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									Full Time
								</span>
							</a>
							<a href="">
								<span className="bg-purple-600/5 hover:bg-purple-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									$4,000 - $4,500
								</span>
							</a>
							<a href="">
								<span className="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30 inline-block text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500">
									<i className="uil uil-map-marker"></i> Australia
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500">
					<div className="flex justify-between items-start">
						<div>
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
								<img src="assets/images/company/skype.png" className="h-8 w-8" alt="" />
							</div>
							<a
								href="employer-detail.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Skype
							</a>
						</div>

						<div className="flex items-center">
							<a
								href="javascript:void(0)"
								className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"
							>
								<i className="mdi mdi-heart"></i>
							</a>
							<a
								href=""
								className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white ms-1"
							>
								<i data-feather="bookmark" className="h-4 w-4"></i>
							</a>
							<a
								href="job-apply.html"
								className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"
							>
								<i className="uil uil-arrow-up-right"></i>
							</a>
						</div>
					</div>

					<div className="mt-3">
						<a
							href="job-detail-one.html"
							className="text-xl hover:text-emerald-600 font-semibold transition-all duration-500"
						>
							Marketing Director
						</a>
						<p className="text-slate-400 mt-2">
							Looking for an experienced Web Designer for an our company.
						</p>

						<div className="mt-3">
							<a href="">
								<span className="bg-orange-500/5 hover:bg-orange-500/20 dark:bg-orange-500/10 hover:dark:bg-orange-500/30 inline-block text-orange-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									Full Time
								</span>
							</a>
							<a href="">
								<span className="bg-purple-600/5 hover:bg-purple-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									$4,000 - $4,500
								</span>
							</a>
							<a href="">
								<span className="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30 inline-block text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500">
									<i className="uil uil-map-marker"></i> Australia
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500">
					<div className="flex justify-between items-start">
						<div>
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
								<img src="assets/images/company/snapchat.png" className="h-8 w-8" alt="" />
							</div>
							<a
								href="employer-detail.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Snapchat
							</a>
						</div>

						<div className="flex items-center">
							<a
								href="javascript:void(0)"
								className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"
							>
								<i className="mdi mdi-heart"></i>
							</a>
							<a
								href=""
								className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white ms-1"
							>
								<i data-feather="bookmark" className="h-4 w-4"></i>
							</a>
							<a
								href="job-apply.html"
								className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"
							>
								<i className="uil uil-arrow-up-right"></i>
							</a>
						</div>
					</div>

					<div className="mt-3">
						<a
							href="job-detail-one.html"
							className="text-xl hover:text-emerald-600 font-semibold transition-all duration-500"
						>
							Application Developer
						</a>
						<p className="text-slate-400 mt-2">
							Looking for an experienced Web Designer for an our company.
						</p>

						<div className="mt-3">
							<a href="">
								<span className="bg-orange-500/5 hover:bg-orange-500/20 dark:bg-orange-500/10 hover:dark:bg-orange-500/30 inline-block text-orange-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									Full Time
								</span>
							</a>
							<a href="">
								<span className="bg-purple-600/5 hover:bg-purple-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									$4,000 - $4,500
								</span>
							</a>
							<a href="">
								<span className="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30 inline-block text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500">
									<i className="uil uil-map-marker"></i> Australia
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500">
					<div className="flex justify-between items-start">
						<div>
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
								<img src="assets/images/company/shree-logo.png" className="h-8 w-8" alt="" />
							</div>
							<a
								href="employer-detail.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Shreethemes
							</a>
						</div>

						<div className="flex items-center">
							<a
								href="javascript:void(0)"
								className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"
							>
								<i className="mdi mdi-heart"></i>
							</a>
							<a
								href=""
								className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white ms-1"
							>
								<i data-feather="bookmark" className="h-4 w-4"></i>
							</a>
							<a
								href="job-apply.html"
								className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"
							>
								<i className="uil uil-arrow-up-right"></i>
							</a>
						</div>
					</div>

					<div className="mt-3">
						<a
							href="job-detail-one.html"
							className="text-xl hover:text-emerald-600 font-semibold transition-all duration-500"
						>
							Senior Product Designer
						</a>
						<p className="text-slate-400 mt-2">
							Looking for an experienced Web Designer for an our company.
						</p>

						<div className="mt-3">
							<a href="">
								<span className="bg-orange-500/5 hover:bg-orange-500/20 dark:bg-orange-500/10 hover:dark:bg-orange-500/30 inline-block text-orange-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									Full Time
								</span>
							</a>
							<a href="">
								<span className="bg-purple-600/5 hover:bg-purple-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									$4,000 - $4,500
								</span>
							</a>
							<a href="">
								<span className="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30 inline-block text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500">
									<i className="uil uil-map-marker"></i> Australia
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500">
					<div className="flex justify-between items-start">
						<div>
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
								<img src="assets/images/company/telegram.png" className="h-8 w-8" alt="" />
							</div>
							<a
								href="employer-detail.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Telegram
							</a>
						</div>

						<div className="flex items-center">
							<a
								href="javascript:void(0)"
								className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"
							>
								<i className="mdi mdi-heart"></i>
							</a>
							<a
								href=""
								className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white ms-1"
							>
								<i data-feather="bookmark" className="h-4 w-4"></i>
							</a>
							<a
								href="job-apply.html"
								className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"
							>
								<i className="uil uil-arrow-up-right"></i>
							</a>
						</div>
					</div>

					<div className="mt-3">
						<a
							href="job-detail-one.html"
							className="text-xl hover:text-emerald-600 font-semibold transition-all duration-500"
						>
							C++ Developer
						</a>
						<p className="text-slate-400 mt-2">
							Looking for an experienced Web Designer for an our company.
						</p>

						<div className="mt-3">
							<a href="">
								<span className="bg-orange-500/5 hover:bg-orange-500/20 dark:bg-orange-500/10 hover:dark:bg-orange-500/30 inline-block text-orange-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									Full Time
								</span>
							</a>
							<a href="">
								<span className="bg-purple-600/5 hover:bg-purple-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									$4,000 - $4,500
								</span>
							</a>
							<a href="">
								<span className="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30 inline-block text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500">
									<i className="uil uil-map-marker"></i> Australia
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500">
					<div className="flex justify-between items-start">
						<div>
							<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
								<img src="assets/images/company/whatsapp.png" className="h-8 w-8" alt="" />
							</div>
							<a
								href="employer-detail.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Whatsapp
							</a>
						</div>

						<div className="flex items-center">
							<a
								href="javascript:void(0)"
								className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"
							>
								<i className="mdi mdi-heart"></i>
							</a>
							<a
								href=""
								className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white ms-1"
							>
								<i data-feather="bookmark" className="h-4 w-4"></i>
							</a>
							<a
								href="job-apply.html"
								className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"
							>
								<i className="uil uil-arrow-up-right"></i>
							</a>
						</div>
					</div>

					<div className="mt-3">
						<a
							href="job-detail-one.html"
							className="text-xl hover:text-emerald-600 font-semibold transition-all duration-500"
						>
							Php Developer
						</a>
						<p className="text-slate-400 mt-2">
							Looking for an experienced Web Designer for an our company.
						</p>

						<div className="mt-3">
							<a href="">
								<span className="bg-orange-500/5 hover:bg-orange-500/20 dark:bg-orange-500/10 hover:dark:bg-orange-500/30 inline-block text-orange-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									Full Time
								</span>
							</a>
							<a href="">
								<span className="bg-purple-600/5 hover:bg-purple-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
									$4,000 - $4,500
								</span>
							</a>
							<a href="">
								<span className="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30 inline-block text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500">
									<i className="uil uil-map-marker"></i> Australia
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="grid md:grid-cols-12 grid-cols-1 mt-8">
				<div className="md:col-span-12 text-center">
					<nav aria-label="Page navigation example">
						<ul className="inline-flex items-center -space-x-px">
							<li>
								<a
									href="#"
									className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
								>
									<i className="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
								>
									1
								</a>
							</li>
							<li>
								<a
									href="#"
									className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
								>
									2
								</a>
							</li>
							<li>
								<a
									href="#"
									aria-current="page"
									className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-emerald-600 border border-emerald-600"
								>
									3
								</a>
							</li>
							<li>
								<a
									href="#"
									className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
								>
									4
								</a>
							</li>
							<li>
								<a
									href="#"
									className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
								>
									5
								</a>
							</li>
							<li>
								<a
									href="#"
									className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
								>
									<i className="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default JobGrid;
