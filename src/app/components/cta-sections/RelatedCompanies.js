import React from "react";

const RelatedCompanies = () => {
	return (
		<div className="container lg:mt-24 mt-16">
			<div className="grid grid-cols-1 pb-8 text-center">
				<h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
					Related Companies
				</h3>

				<p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
					Search all the open positions on the web. Get your own personalized salary estimate. Read
					reviews on over 30000+ companies worldwide.
				</p>
			</div>

			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
				<div className="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6">
					<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
						<img src="assets/images/company/circle-logo.png" className="h-8 w-8" alt="" />
					</div>

					<div className="mt-4">
						<a href="" className="text-lg hover:text-emerald-600 font-semibold">
							Circle CI
						</a>
						<p className="text-slate-400 mt-2">Digital Marketing Solutions for Tomorrow</p>
					</div>

					<div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
						<span className="text-slate-400">
							<i className="uil uil-map-marker"></i> Pakistan
						</span>
						<span className="block font-semibold text-emerald-600">6 Jobs</span>
					</div>
				</div>

				<div className="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6">
					<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
						<img src="assets/images/company/telegram.png" className="h-8 w-8" alt="" />
					</div>

					<div className="mt-4">
						<a href="" className="text-lg hover:text-emerald-600 font-semibold">
							Telegram
						</a>
						<p className="text-slate-400 mt-2">Digital Marketing Solutions for Tomorrow</p>
					</div>

					<div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
						<span className="text-slate-400">
							<i className="uil uil-map-marker"></i> India
						</span>
						<span className="block font-semibold text-emerald-600">6 Jobs</span>
					</div>
				</div>

				<div className="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6">
					<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
						<img src="assets/images/company/whatsapp.png" className="h-8 w-8" alt="" />
					</div>

					<div className="mt-4">
						<a href="" className="text-lg hover:text-emerald-600 font-semibold">
							Whatsapp
						</a>
						<p className="text-slate-400 mt-2">Digital Marketing Solutions for Tomorrow</p>
					</div>

					<div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
						<span className="text-slate-400">
							<i className="uil uil-map-marker"></i> Rush
						</span>
						<span className="block font-semibold text-emerald-600">6 Jobs</span>
					</div>
				</div>

				<div className="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6">
					<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
						<img src="assets/images/company/spotify.png" className="h-8 w-8" alt="" />
					</div>

					<div className="mt-4">
						<a href="" className="text-lg hover:text-emerald-600 font-semibold">
							Spotify
						</a>
						<p className="text-slate-400 mt-2">Digital Marketing Solutions for Tomorrow</p>
					</div>

					<div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
						<span className="text-slate-400">
							<i className="uil uil-map-marker"></i> Turkey
						</span>
						<span className="block font-semibold text-emerald-600">6 Jobs</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RelatedCompanies;
