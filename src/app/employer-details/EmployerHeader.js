import React from "react";

const EmployerHeader = () => {
	return (
		<div class="container">
			<div class="grid grid-cols-1">
				<div class="md:flex justify-between items-center shadow dark:shadow-gray-700 rounded-md p-6 bg-white dark:bg-slate-900">
					<div class="flex items-center">
						<img
							src="assets/images/company/skype.png"
							class="h-20 w-20 p-3 shadow dark:shadow-gray-700 rounded-md bg-slate-50 dark:bg-slate-800"
							alt=""
						/>

						<div class="ms-4">
							<h5 class="text-xl font-bold">Skype</h5>
							<h6 class="text-base text-slate-400">
								<i class="uil uil-map-marker"></i> Canberra, Australia
							</h6>
						</div>
					</div>

					<div class="md:mt-0 mt-4">
						<a
							href=""
							class="btn btn-sm bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md"
						>
							Follow
						</a>
						<a
							href=""
							class="btn btn-sm bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-1"
						>
							See Jobs
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmployerHeader;
