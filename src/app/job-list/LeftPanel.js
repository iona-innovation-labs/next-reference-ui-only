import React from "react";

const LeftPanel = () => {
	return (
		<div class="lg:col-span-4 md:col-span-6">
			<div class="shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900 sticky top-20">
				<form>
					<div class="grid grid-cols-1 gap-3">
						<div>
							<label for="searchname" class="font-semibold">
								Search Company
							</label>
							<div class="relative mt-2">
								<i class="uil uil-search text-lg absolute top-[5px] start-3"></i>
								<input
									name="search"
									id="searchname"
									type="text"
									class="form-input border border-slate-100 dark:border-slate-800 ps-10"
									placeholder="Search"
								/>
							</div>
						</div>

						<div>
							<label class="font-semibold">Categories</label>
							<select class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
								<option value="WD">Web Designer</option>
								<option value="WD">Web Developer</option>
								<option value="UI">UI / UX Desinger</option>
							</select>
						</div>

						<div>
							<label class="font-semibold">Location</label>
							<select class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
								<option value="NY">New York</option>
								<option value="MC">North Carolina</option>
								<option value="SC">South Carolina</option>
							</select>
						</div>

						<div>
							<label class="font-semibold">Job Types</label>
							<div class="block mt-2">
								<div class="flex justify-between">
									<div class="inline-flex items-center mb-0">
										<input
											class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
											type="checkbox"
											value=""
											id="fulltime"
										/>
										<label class="form-checkbox-label text-slate-400" for="fulltime">
											Full Time
										</label>
									</div>

									<span class="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
										3
									</span>
								</div>
								<div class="flex justify-between">
									<div class="inline-flex items-center mb-0">
										<input
											class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
											type="checkbox"
											value=""
											id="parttime"
										/>
										<label class="form-checkbox-label text-slate-400" for="parttime">
											Part Time
										</label>
									</div>

									<span class="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
										7
									</span>
								</div>
								<div class="flex justify-between">
									<div class="inline-flex items-center mb-0">
										<input
											class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
											type="checkbox"
											value=""
											id="Freelancing"
										/>
										<label class="form-checkbox-label text-slate-400" for="Freelancing">
											Freelancing
										</label>
									</div>

									<span class="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
										4
									</span>
								</div>
								<div class="flex justify-between">
									<div class="inline-flex items-center mb-0">
										<input
											class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
											type="checkbox"
											value=""
											id="fixedprice"
										/>
										<label class="form-checkbox-label text-slate-400" for="fixedprice">
											Fixed Price
										</label>
									</div>

									<span class="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
										6
									</span>
								</div>
								<div class="flex justify-between">
									<div class="inline-flex items-center mb-0">
										<input
											class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
											type="checkbox"
											value=""
											id="Remote"
										/>
										<label class="form-checkbox-label text-slate-400" for="Remote">
											Remote
										</label>
									</div>

									<span class="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
										7
									</span>
								</div>
								<div class="flex justify-between">
									<div class="inline-flex items-center mb-0">
										<input
											class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
											type="checkbox"
											value=""
											id="hourlybasis"
										/>
										<label class="form-checkbox-label text-slate-400" for="hourlybasis">
											Hourly Basis
										</label>
									</div>

									<span class="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
										44
									</span>
								</div>
							</div>
						</div>

						<div>
							<label class="font-semibold">Salary</label>
							<div class="block mt-2">
								<div>
									<label class="inline-flex items-center">
										<input
											type="radio"
											class="form-radio border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
											name="radio-colors"
											value="1"
											checked
										/>
										<span class="text-slate-400">10k - 15k</span>
									</label>
								</div>
								<div>
									<label class="inline-flex items-center">
										<input
											type="radio"
											class="form-radio border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
											name="radio-colors"
											value="1"
										/>
										<span class="text-slate-400">15k - 25k</span>
									</label>
								</div>
								<div>
									<label class="inline-flex items-center">
										<input
											type="radio"
											class="form-radio border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
											name="radio-colors"
											value="1"
										/>
										<span class="text-slate-400">more than 25K</span>
									</label>
								</div>
							</div>
						</div>

						<div>
							<input
								type="submit"
								class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full"
								value="Apply Filter"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LeftPanel;
