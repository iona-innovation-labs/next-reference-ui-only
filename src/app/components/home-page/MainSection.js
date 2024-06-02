import React from "react";

const MainSection = () => {
	return (
		<section
			className="py-36 md:h-screen h-auto items-center flex relative overflow-hidden"
			id="home"
		>
			<div className="container relative">
				<div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
					<div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
						<div className="lg:me-8">
							<h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">
								Find the{" "}
								<span className="before:block before:absolute before:-inset-2 before:-skew-y-6 before:bg-emerald-600 relative inline-block">
									<span className="relative text-white font-bold">Best Job</span>
								</span>{" "}
								<br /> offer for you.
							</h4>

							<p className="text-slate-400 text-lg max-w-xl">
								Find Jobs, Employment & Career Opportunities. Some of the companies we've helped
								recruit excellent applicants over the years.
							</p>

							<div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3 mt-4">
								<form action="#">
									<div className="registration-form text-dark text-start">
										<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
											<div className="filter-search-form relative filter-border">
												<i className="uil uil-briefcase-alt icons"></i>
												<input
													name="name"
													type="text"
													id="job-keyword"
													className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
													placeholder="Search..."
												/>
											</div>

											<div className="filter-search-form relative filter-border">
												<i className="uil uil-map-marker icons"></i>
												{/* TODO:Review this ui */}
												<select
													className="filter-input-box border-0 bg-gray-50 dark:bg-slate-800 w-full  focus:outline-none rounded-md"
													data-trigger
													name="choices-location"
													id="choices-location"
													aria-label="Default select example"
												>
													<option value="BS">Bahamas</option>
													<option value="BH">Bahrain</option>
													<option value="CA">Canada</option>
													<option value="DK">Denmark</option>
													<option value="DJ">Djibouti</option>
													<option value="ER">Eritrea</option>
													<option value="EE">Estonia</option>
													<option value="GM">Gambia</option>
												</select>
											</div>

											<input
												type="submit"
												id="search"
												name="search"
												className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 h-[60px] hover:border-emerald-700 text-white searchbtn submit-btn w-100"
												value="Search"
											/>
										</div>
									</div>
								</form>
							</div>

							<div className="mt-2">
								<span className="text-slate-400">
									<span className="text-dark">Popular Searches :</span> Designer, Developer, Web,
									IOS, PHP Senior Engineer
								</span>
							</div>
						</div>
					</div>

					<div className="lg:col-span-5 md:col-span-6">
						<div className="relative">
							<div className="relative flex justify-end">
								<img
									src="assets/images/about/ab01.jpg"
									className="lg:w-[400px] w-[280px] rounded-xl shadow dark:shadow-gray-700"
									alt=""
								/>
								<div className="absolute lg:bottom-20 -bottom-24 xl:-end-20 lg:-end-10 end-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 z-2">
									<h5 className="text-lg font-semibold mb-3">5k+ candidates get job</h5>

									<ul className="list-none relative">
										<li className="inline-block relative">
											<a href="">
												<img
													src="assets/images/team/01.jpg"
													className="w-10 h-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500"
													alt=""
												/>
											</a>
										</li>
										<li className="inline-block relative -ms-3">
											<a href="">
												<img
													src="assets/images/team/02.jpg"
													className="w-10 h-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500"
													alt=""
												/>
											</a>
										</li>
										<li className="inline-block relative -ms-3">
											<a href="">
												<img
													src="assets/images/team/03.jpg"
													className="w-10 h-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500"
													alt=""
												/>
											</a>
										</li>
										<li className="inline-block relative -ms-3">
											<a href="">
												<img
													src="assets/images/team/04.jpg"
													className="w-10 h-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500"
													alt=""
												/>
											</a>
										</li>
										<li className="inline-block relative -ms-3">
											<a href="">
												<img
													src="assets/images/team/05.jpg"
													className="w-10 h-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500"
													alt=""
												/>
											</a>
										</li>
										<li className="inline-block relative -ms-3">
											<a
												href=""
												className="btn btn-icon table-cell rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white hover:z-1 hover:scale-105"
											>
												<i className="uil uil-plus"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="absolute md:-start-5 start-0 -bottom-16">
								<img
									src="assets/images/about/ab04.jpg"
									className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-xl"
									alt=""
								/>

								<div className="absolute flex justify-between items-center -top-6 md:-start-10 start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-max">
									<i className="uil uil-bell text-[24px] text-amber-500"></i>
									<p className="text-lg font-semibold mb-0 ms-2">Job Alert Subscribe</p>
								</div>
							</div>

							<div className="overflow-hidden absolute md:h-[500px] h-[400px] md:w-[500px] w-[400px] bg-gradient-to-tl to-emerald-600/5 via-emerald-600/50 from-emerald-600 bottom-1/2 translate-y-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -z-1 rounded-full"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainSection;
