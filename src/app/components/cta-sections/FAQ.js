import React from "react";

const FAQ = () => {
	return (
		<div className="container md:mt-24 md:pb-16 mt-16">
			<div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
				<div className="lg:col-span-5 md:col-span-6">
					<div className="relative">
						<div className="relative">
							<img
								src="assets/images/about/ab01.jpg"
								className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700"
								alt=""
							/>
							<div className="absolute top-0 translate-y-2/4 end-0 text-center">
								<a
									href="#!"
									data-type="youtube"
									data-id="yba7hPeTSjk"
									className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white"
								>
									<i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
								</a>
							</div>
						</div>
						<div className="absolute md:-end-5 end-0 -bottom-16">
							<img
								src="assets/images/about/ab02.jpg"
								className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700"
								alt=""
							/>
						</div>
					</div>
				</div>

				<div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
					<div className="lg:ms-5">
						<h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">
							Frequently Asked Questions
						</h3>

						<p className="text-slate-400 max-w-xl">
							Search all the open positions on the web. Get your own personalized salary estimate.
							Read reviews on over 30000+ companies worldwide.
						</p>

						<div id="accordion-collapseone" data-accordion="collapse" className="mt-8">
							<div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden">
								<h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
									<button
										type="button"
										className="flex justify-between items-center p-5 w-full font-semibold text-left"
										data-accordion-target="#accordion-collapse-body-1"
										aria-expanded="true"
										aria-controls="accordion-collapse-body-1"
									>
										<span>How does it work ?</span>
										<svg
											data-accordion-icon
											className="w-4 h-4 rotate-180 shrink-0"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clip-rule="evenodd"
											></path>
										</svg>
									</button>
								</h2>
								<div
									id="accordion-collapse-body-1"
									className="hidden"
									aria-labelledby="accordion-collapse-heading-1"
								>
									<div className="p-5">
										<p className="text-slate-400 dark:text-gray-400">
											There are many variations of passages of Lorem Ipsum available, but the
											majority have suffered alteration in some form.
										</p>
									</div>
								</div>
							</div>

							<div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
								<h2 className="text-base font-semibold" id="accordion-collapse-heading-2">
									<button
										type="button"
										className="flex justify-between items-center p-5 w-full font-semibold text-left"
										data-accordion-target="#accordion-collapse-body-2"
										aria-expanded="false"
										aria-controls="accordion-collapse-body-2"
									>
										<span>Do I need a designer to use Jobstack ?</span>
										<svg
											data-accordion-icon
											className="w-4 h-4 shrink-0"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clip-rule="evenodd"
											></path>
										</svg>
									</button>
								</h2>
								<div
									id="accordion-collapse-body-2"
									className="hidden"
									aria-labelledby="accordion-collapse-heading-2"
								>
									<div className="p-5">
										<p className="text-slate-400 dark:text-gray-400">
											There are many variations of passages of Lorem Ipsum available, but the
											majority have suffered alteration in some form.
										</p>
									</div>
								</div>
							</div>

							<div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
								<h2 className="text-base font-semibold" id="accordion-collapse-heading-3">
									<button
										type="button"
										className="flex justify-between items-center p-5 w-full font-semibold text-left"
										data-accordion-target="#accordion-collapse-body-3"
										aria-expanded="false"
										aria-controls="accordion-collapse-body-3"
									>
										<span>What do I need to do to start selling ?</span>
										<svg
											data-accordion-icon
											className="w-4 h-4 shrink-0"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clip-rule="evenodd"
											></path>
										</svg>
									</button>
								</h2>
								<div
									id="accordion-collapse-body-3"
									className="hidden"
									aria-labelledby="accordion-collapse-heading-3"
								>
									<div className="p-5">
										<p className="text-slate-400 dark:text-gray-400">
											There are many variations of passages of Lorem Ipsum available, but the
											majority have suffered alteration in some form.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
