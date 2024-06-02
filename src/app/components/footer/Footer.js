import React from "react";

const Footer = () => {
	let newDate = new Date();
	return (
		<footer className="relative bg-slate-900 dark:bg-slate-800">
			<div className="container">
				<div className="grid grid-cols-1">
					<div className="relative py-12">
						<div className="relative w-full">
							<div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
								<div className="md:col-span-3">
									<a href="#" className="flex justify-center md:justify-start focus:outline-none">
										<img src="assets/images/logo-light.png" className="" alt="" />
									</a>
								</div>

								<div className="md:col-span-9">
									<ul className="list-disc footer-list ltr:md:text-right rtl:md:text-left text-center">
										<li className="inline-block">
											<a
												href="index.html"
												className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4"
											>
												Home
											</a>
										</li>
										<li className="inline-block mt-[10px] md:mt-0">
											<a
												href="services.html"
												className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4"
											>
												How it works
											</a>
										</li>
										<li className="inline-block mt-[10px] md:mt-0">
											<a
												href=""
												className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4"
											>
												Create a job
											</a>
										</li>
										<li className="inline-block mt-[10px] md:mt-0">
											<a
												href="about-us"
												className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4"
											>
												About us
											</a>
										</li>
										<li className="inline-block mt-[10px] md:mt-0">
											<a
												href="contact.html"
												className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium"
											>
												Contact us
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
				<div className="container text-center">
					<div className="grid md:grid-cols-2 items-center gap-6">
						<div className="ltr:md:text-left rtl:md:text-right text-center">
							<p className="mb-0 text-gray-300 font-medium">
								© {newDate.getFullYear()} Jobstack. Design with{" "}
								<i className="mdi mdi-heart text-red-600"></i> by{" "}
								<a href="https://shreethemes.in/" target="_blank" className="text-reset">
									Shreethemes
								</a>
								.
							</p>
						</div>

						<ul className="list-none ltr:md:text-right rtl:md:text-left text-center">
							<li className="inline">
								<a
									href="https://1.envato.market/jobstack"
									target="_blank"
									className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
								>
									<i className="uil uil-shopping-cart align-middle" title="Buy Now"></i>
								</a>
							</li>
							<li className="inline">
								<a
									href="https://dribbble.com/shreethemes"
									target="_blank"
									className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
								>
									<i className="uil uil-dribbble align-middle" title="dribbble"></i>
								</a>
							</li>
							<li className="inline">
								<a
									href="https://www.behance.net/shreethemes"
									target="_blank"
									className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
								>
									<i className="uil uil-behance" title="Behance"></i>
								</a>
							</li>
							<li className="inline">
								<a
									href="http://linkedin.com/company/shreethemes"
									target="_blank"
									className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
								>
									<i className="uil uil-linkedin" title="Linkedin"></i>
								</a>
							</li>
							<li className="inline">
								<a
									href="https://www.facebook.com/shreethemes"
									target="_blank"
									className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
								>
									<i className="uil uil-facebook-f align-middle" title="facebook"></i>
								</a>
							</li>
							<li className="inline">
								<a
									href="https://www.instagram.com/shreethemes/"
									target="_blank"
									className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
								>
									<i className="uil uil-instagram align-middle" title="instagram"></i>
								</a>
							</li>
							<li className="inline">
								<a
									href="https://twitter.com/shreethemes"
									target="_blank"
									className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
								>
									<i className="uil uil-twitter align-middle" title="twitter"></i>
								</a>
							</li>
							<li className="inline">
								<a
									href="mailto:support@shreethemes.in"
									className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
								>
									<i className="uil uil-envelope align-middle" title="email"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
