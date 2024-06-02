import React from "react";

const JobGridSearch = () => {
	return (
		<div className="container z-1">
			<div className="d-flex" id="reserve-form">
				<div className="md:w-5/6 mx-auto">
					<div className="lg:col-span-10">
						<div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
							<form action="#">
								<div className="registration-form text-dark text-start">
									<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
										<div className="filter-search-form relative filter-border">
											<i className="uil uil-briefcase-alt icons"></i>
											<input
												name="name"
												type="text"
												id="job-keyword"
												className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
												placeholder="Search your Keywords"
											/>
										</div>

										<div className="filter-search-form relative filter-border">
											<i className="uil uil-map-marker icons"></i>
											<select
												className="form-select w-full bg-gray-50 dark:bg-slate-800"
												data-trigger
												name="choices-location"
												id="choices-location"
												aria-label="Default select example"
											>
												<option value="AF">Afghanistan</option>
												<option value="AZ">Azerbaijan</option>
												<option value="BS">Bahamas</option>
												<option value="BH">Bahrain</option>
												<option value="CA">Canada</option>
												<option value="CV">Cape Verde</option>
												<option value="DK">Denmark</option>
												<option value="DJ">Djibouti</option>
												<option value="ER">Eritrea</option>
												<option value="EE">Estonia</option>
												<option value="GM">Gambia</option>
											</select>
										</div>

										<div className="filter-search-form relative filter-border">
											<i className="uil uil-briefcase-alt icons"></i>
											<select
												className="form-select w-full bg-gray-50 dark:bg-slate-800"
												data-trigger
												name="choices-type"
												id="choices-type"
												aria-label="Default select example"
											>
												<option selected="" value="1">
													Full Time
												</option>
												<option value="2">Part Time</option>
												<option value="3">Freelancer</option>
												<option value="4">Remote Work</option>
												<option value="5">Office Work</option>
											</select>
										</div>

										<input
											type="submit"
											id="search"
											name="search"
											style={{ height: "60px" }}
											className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100"
											value="Search"
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobGridSearch;
