import React from "react";

const GetTheJob2 = () => {
	return (
		<div className="container md:mt-24 mt-16">
			<div className="grid grid-cols-1">
				<div className="relative overflow-hidden bg-emerald-600 rounded-md shadow dark:shadow-gray-700">
					<div className="grid md:grid-cols-2 items-center gap-[30px]">
						<div className="relative">
							<img src="assets/images/about/ab05.jpg" alt="" />
							<div className="absolute md:bottom-1/2 md:translate-y-1/2 md:-end-10 ltr:md:translate-x-0 rtl:md:translate-x-0 -bottom-10 end-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 text-center">
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

						<div>
							<div className="text-white p-4">
								<h4 className="leading-normal text-4xl mb-3 font-semibold">
									Get the job of your <br /> dreams quickly.
								</h4>

								<p className="text-white/70 text-lg max-w-xl">
									Search all the open positions on the web. Get your own personalized salary
									estimate. Read reviews on over 30000+ companies worldwide.
								</p>

								<ul className="list-none text-white/50 mt-4">
									<li className="mb-1 flex">
										<i className="uil uil-check-circle text-white text-xl me-2"></i> Digital
										Marketing Solutions for Tomorrow
									</li>
									<li className="mb-1 flex">
										<i className="uil uil-check-circle text-white text-xl me-2"></i> Our Talented &
										Experienced Marketing Agency
									</li>
									<li className="mb-1 flex">
										<i className="uil uil-check-circle text-white text-xl me-2"></i> Create your own
										skin to match your brand
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetTheJob2;
