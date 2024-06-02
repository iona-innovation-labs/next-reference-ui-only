import React from "react";

const PopularCategories = () => {
	return (
		<div className="container">
			<div className="grid grid-cols-1 pb-8 text-center">
				<h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
					Popular Categories
				</h3>

				<p className="text-slate-400 max-w-xl mx-auto">
					Search all the open positions on the web. Get your own personalized salary estimate. Read
					reviews on over 30000+ companies worldwide.
				</p>
			</div>

			<div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
				<div className="group px-3 py-10 rounded-full shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
					<div className="w-16 h-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
						<i className="uil uil-gitlab"></i>
					</div>

					<div className="content mt-6">
						<a href="" className="title text-lg font-semibold hover:text-emerald-600">
							Business <br /> Development
						</a>
						<p className="text-slate-400 mt-3">74 Jobs</p>
					</div>
				</div>

				<div className="group px-3 py-10 rounded-full shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
					<div className="w-16 h-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
						<i className="uil uil-book-open"></i>
					</div>

					<div className="content mt-6">
						<a href="" className="title text-lg font-semibold hover:text-emerald-600">
							Marketing & <br /> Communication
						</a>
						<p className="text-slate-400 mt-3">20 Jobs</p>
					</div>
				</div>

				<div className="group px-3 py-10 rounded-full shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
					<div className="w-16 h-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
						<i className="uil uil-chart-pie-alt"></i>
					</div>

					<div className="content mt-6">
						<a href="" className="title text-lg font-semibold hover:text-emerald-600">
							Project <br /> Management
						</a>
						<p className="text-slate-400 mt-3">35 Jobs</p>
					</div>
				</div>

				<div className="group px-3 py-10 rounded-full shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
					<div className="w-16 h-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
						<i className="uil uil-feedback"></i>
					</div>

					<div className="content mt-6">
						<a href="" className="title text-lg font-semibold hover:text-emerald-600">
							Customer <br /> Service
						</a>
						<p className="text-slate-400 mt-3">46 Jobs</p>
					</div>
				</div>

				<div className="group px-3 py-10 rounded-full shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
					<div className="w-16 h-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
						<i className="uil uil-presentation-line"></i>
					</div>

					<div className="content mt-6">
						<a href="" className="title text-lg font-semibold hover:text-emerald-600">
							Software <br /> Engineering
						</a>
						<p className="text-slate-400 mt-3">60 Jobs</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopularCategories;
