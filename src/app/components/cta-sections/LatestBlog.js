import React from "react";

const LatestBlog = () => {
	return (
		<div className="container md:mt-24 mt-16">
			<div className="grid grid-cols-1 pb-8 text-center">
				<h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
					Latest Blog or News
				</h3>

				<p className="text-slate-400 max-w-xl mx-auto">
					Search all the open positions on the web. Get your own personalized salary estimate. Read
					reviews on over 30000+ companies worldwide.
				</p>
			</div>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
				<div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
					<div className="relative overflow-hidden">
						<img
							src="assets/images/blog/01.jpg"
							className="scale-110 group-hover:scale-100 transition-all duration-500"
							alt=""
						/>
					</div>

					<div className="relative p-6">
						<div className="absolute start-6 -top-4">
							<span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
								Arts
							</span>
						</div>

						<div className="">
							<div className="flex mb-4">
								<span className="text-slate-400 text-sm">
									<i className="uil uil-calendar-alt text-slate-900 dark:text-white me-2"></i>20th
									February, 2023
								</span>
								<span className="text-slate-400 text-sm ms-3">
									<i className="uil uil-clock text-slate-900 dark:text-white me-2"></i>5 min read
								</span>
							</div>

							<a
								href="blog-detail.html"
								className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
							>
								11 Tips to Help You Get New Clients Through Cold Calling
							</a>

							<div className="flex justify-between items-center mt-3">
								<a
									href="blog-detail.html"
									className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
								>
									Read More <i className="uil uil-arrow-right"></i>
								</a>
								<span className="text-slate-400 text-sm">
									by{" "}
									<a
										href=""
										className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
									>
										Google
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
					<div className="relative overflow-hidden">
						<img
							src="assets/images/blog/02.jpg"
							className="scale-110 group-hover:scale-100 transition-all duration-500"
							alt=""
						/>
					</div>

					<div className="relative p-6">
						<div className="absolute start-6 -top-4">
							<span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
								Illustration
							</span>
						</div>

						<div className="">
							<div className="flex mb-4">
								<span className="text-slate-400 text-sm">
									<i className="uil uil-calendar-alt text-slate-900 dark:text-white me-2"></i>20th
									February, 2023
								</span>
								<span className="text-slate-400 text-sm ms-3">
									<i className="uil uil-clock text-slate-900 dark:text-white me-2"></i>5 min read
								</span>
							</div>

							<a
								href="blog-detail.html"
								className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
							>
								DigitalOcean launches first Canadian data centre in Toronto
							</a>

							<div className="flex justify-between items-center mt-3">
								<a
									href="blog-detail.html"
									className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
								>
									Read More <i className="uil uil-arrow-right"></i>
								</a>
								<span className="text-slate-400 text-sm">
									by{" "}
									<a
										href=""
										className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
									>
										Facebook
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
					<div className="relative overflow-hidden">
						<img
							src="assets/images/blog/03.jpg"
							className="scale-110 group-hover:scale-100 transition-all duration-500"
							alt=""
						/>
					</div>

					<div className="relative p-6">
						<div className="absolute start-6 -top-4">
							<span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
								Music
							</span>
						</div>

						<div className="">
							<div className="flex mb-4">
								<span className="text-slate-400 text-sm">
									<i className="uil uil-calendar-alt text-slate-900 dark:text-white me-2"></i>20th
									February, 2023
								</span>
								<span className="text-slate-400 text-sm ms-3">
									<i className="uil uil-clock text-slate-900 dark:text-white me-2"></i>5 min read
								</span>
							</div>

							<a
								href="blog-detail.html"
								className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
							>
								Using Banner Stands To Increase Trade Show Traffic
							</a>

							<div className="flex justify-between items-center mt-3">
								<a
									href="blog-detail.html"
									className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
								>
									Read More <i className="uil uil-arrow-right"></i>
								</a>
								<span className="text-slate-400 text-sm">
									by{" "}
									<a
										href=""
										className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
									>
										Linkedin
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestBlog;
