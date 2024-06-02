import React from "react";
import ExploreJob from "../components/cta-sections/ExploreJob";

const page = () => {
	return (
		<section className="bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
			<div className="container mt-10">
				<div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
					<div className="lg:col-span-8 md:col-span-6">
						<div className="md:flex items-center p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900">
							<img
								src="assets/images/company/lenovo-logo.png"
								className="rounded-full h-28 w-28 p-4 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700"
								alt=""
							/>

							<div className="md:ms-4 md:mt-0 mt-6">
								<h5 className="text-xl font-semibold">Back-End Developer</h5>
								<div className="mt-2">
									<span className="text-slate-400 font-medium me-2 inline-block">
										<i className="uil uil-building text-[18px] text-emerald-600 me-1"></i> Lenovo
										pvt. ltd.
									</span>
									<span className="text-slate-400 font-medium me-2 inline-block">
										<i className="uil uil-map-marker text-[18px] text-emerald-600 me-1"></i>{" "}
										Beijing, China
									</span>
								</div>
							</div>
						</div>

						<h5 className="text-lg font-semibold mt-6">Job Description:</h5>

						<p className="text-slate-400 mt-4">
							One disadvantage of Lorum Ipsum is that in Latin certain letters appear more
							frequently than others - which creates a distinct visual impression. Moreover, in
							Latin only words at the beginning of sentences are capitalized.
						</p>
						<p className="text-slate-400 mt-4">
							This means that Lorem Ipsum cannot accurately represent, for example, German, in which
							all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual
							filler for German texts. If the fill text is intended to illustrate the
							characteristics of different typefaces.
						</p>
						<p className="text-slate-400 mt-4">
							It sometimes makes sense to select texts containing the various letters and symbols
							specific to the output language.
						</p>

						<h5 className="text-lg font-semibold mt-6">Responsibilities and Duties: </h5>
						<p className="text-slate-400 mt-4">
							It sometimes makes sense to select texts containing the various letters and symbols
							specific to the output language.
						</p>
						<ul className="list-none">
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>Participate in
								requirements analysis
							</li>
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>Write clean, scalable
								code using C# and .NET frameworks
							</li>
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>Test and deploy
								applications and systems
							</li>
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>Revise, update,
								refactor and debug code
							</li>
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>Improve existing
								software
							</li>
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>Develop documentation
								throughout the software development life cycle (SDLC)
							</li>
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>Serve as an expert on
								applications and provide technical support
							</li>
						</ul>

						<h5 className="text-lg font-semibold mt-6">
							Required Experience, Skills and Qualifications:{" "}
						</h5>
						<p className="text-slate-400 mt-4">
							It sometimes makes sense to select texts containing the various letters and symbols
							specific to the output language.
						</p>
						<ul className="list-none">
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>Proven experience as a
								.NET Developer or Application Developer
							</li>
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>good understanding of
								SQL and Relational Databases, specifically Microsoft SQL Server.
							</li>
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>Experience designing,
								developing and creating RESTful web services and APIs
							</li>
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>Basic know how of Agile
								process and practices
							</li>
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>Good understanding of
								object-oriented programming.
							</li>
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>Good understanding of
								concurrent programming.
							</li>
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>Sound knowledge of
								application architecture and design.
							</li>
							<li className="text-slate-400 mt-2">
								<i className="uil uil-arrow-right text-emerald-600 me-1"></i>Excellent problem
								solving and analytical skills
							</li>
						</ul>

						<div className="mt-5">
							<a
								href="job-apply.html"
								className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto"
							>
								Apply Now
							</a>
						</div>
					</div>

					<div className="lg:col-span-4 md:col-span-6">
						<div className="shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
							<div className="p-6">
								<h5 className="text-lg font-semibold">Job Information</h5>
							</div>
							<div className="p-6 border-t border-slate-100 dark:border-t-gray-700">
								<ul className="list-none">
									<li className="flex items-center">
										<i data-feather="user-check" className="h-5 w-5"></i>

										<div className="ms-4">
											<p className="font-medium">Employee Type:</p>
											<span className="text-emerald-600 font-medium text-sm">Full Time</span>
										</div>
									</li>

									<li className="flex items-center mt-3">
										<i data-feather="map-pin" className="h-5 w-5"></i>

										<div className="ms-4">
											<p className="font-medium">Location:</p>
											<span className="text-emerald-600 font-medium text-sm">Beijing, China</span>
										</div>
									</li>

									<li className="flex items-center mt-3">
										<i data-feather="monitor" className="h-5 w-5"></i>

										<div className="ms-4">
											<p className="font-medium">Job Type:</p>
											<span className="text-emerald-600 font-medium text-sm">
												Back-end Developer
											</span>
										</div>
									</li>

									<li className="flex items-center mt-3">
										<i data-feather="briefcase" className="h-5 w-5"></i>

										<div className="ms-4">
											<p className="font-medium">Experience:</p>
											<span className="text-emerald-600 font-medium text-sm">2+ years</span>
										</div>
									</li>

									<li className="flex items-center mt-3">
										<i data-feather="book" className="h-5 w-5"></i>

										<div className="ms-4">
											<p className="font-medium">Qualifications:</p>
											<span className="text-emerald-600 font-medium text-sm">MCA</span>
										</div>
									</li>

									<li className="flex items-center mt-3">
										<i data-feather="dollar-sign" className="h-5 w-5"></i>

										<div className="ms-4">
											<p className="font-medium">Salary:</p>
											<span className="text-emerald-600 font-medium text-sm">$4000 - $4500</span>
										</div>
									</li>

									<li className="flex items-center mt-3">
										<i data-feather="clock" className="h-5 w-5"></i>

										<div className="ms-4">
											<p className="font-medium">Date posted:</p>
											<span className="text-emerald-600 font-medium text-sm">28th Feb, 2023</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container lg:mt-24 mt-16">
				<div className="grid grid-cols-1 pb-8 text-center">
					<h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
						Related Vacancies
					</h3>

					<p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
						Search all the open positions on the web. Get your own personalized salary estimate.
						Read reviews on over 30000+ companies worldwide.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
					<div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900">
						<div className="flex items-center justify-between">
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

							<span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
								Full Time
							</span>
						</div>

						<div className="mt-6">
							<a
								href="job-detail-one.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Web Designer / Developer
							</a>
							<h6 className="text-base font-medium">
								<i className="uil uil-map-marker"></i> Australia
							</h6>
						</div>

						<div className="mt-6">
							<div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
								<div className="bg-emerald-600 h-[6px] rounded-full" style={{ width: "55%" }}></div>
							</div>
							<div className="mt-2">
								<span className="text-slate-400 text-sm">
									<span className="text-slate-900 dark:text-white font-semibold inline-block">
										21 applied
									</span>{" "}
									of 40 vacancy
								</span>
							</div>
						</div>
					</div>

					<div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900">
						<div className="flex items-center justify-between">
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

							<span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
								Part Time
							</span>
						</div>

						<div className="mt-6">
							<a
								href="job-detail-one.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Marketing Director
							</a>
							<h6 className="text-base font-medium">
								<i className="uil uil-map-marker"></i> USA
							</h6>
						</div>

						<div className="mt-6">
							<div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
								<div className="bg-emerald-600 h-[6px] rounded-full" style={{ width: "55%" }}></div>
							</div>
							<div className="mt-2">
								<span className="text-slate-400 text-sm">
									<span className="text-slate-900 dark:text-white font-semibold inline-block">
										21 applied
									</span>{" "}
									of 40 vacancy
								</span>
							</div>
						</div>
					</div>

					<div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900">
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md" />
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
						<span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
							Remote
						</span>{" "}
						<div className="mt-6">
							<a
								href="job-detail-one.html"
								className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
							>
								Application Developer
							</a>
							<h6 className="text-base font-medium">
								<i className="uil uil-map-marker"></i> China
							</h6>
						</div>
						<div className="mt-6">
							<div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
								<div className="bg-emerald-600 h-[6px] rounded-full" style={{ width: "55%" }}></div>
							</div>
							<div className="mt-2">
								<span className="text-slate-400 text-sm">
									<span className="text-slate-900 dark:text-white font-semibold inline-block">
										21 applied
									</span>{" "}
									of 40 vacancy
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ExploreJob />
		</section>
	);
};

export default page;
