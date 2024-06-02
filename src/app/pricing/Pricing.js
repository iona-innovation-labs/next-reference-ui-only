import React from "react";

const Pricing = () => {
	return (
		<div class="container">
			<div class="grid md:grid-cols-3 grid-cols-1 gap-[30px]">
				<div class="group border border-transparent relative shadow hover:shadow-md dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 transition-all duration-500">
					<div class="p-6 py-8">
						<h6 class="text-lg font-bold uppercase mb-5 text-emerald-600">Free</h6>

						<div class="flex mb-5">
							<span class="text-xl font-semibold">$</span>
							<span class="price text-4xl font-semibold mb-0">0</span>
							<span class="text-xl font-semibold self-end mb-1">/mo</span>
						</div>

						<ul class="list-none text-slate-400 border-t border-gray-100 dark:border-gray-700 pt-5">
							<li class="my-2 flex">
								<i class="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Full Access
							</li>
							<li class="my-2 flex">
								<i class="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Source Files
							</li>
							<li class="my-2 flex">
								<i class="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Free Appointments
							</li>
							<li class="my-2 flex">
								<i class="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Enhanced Security
							</li>
						</ul>
						<a
							href=""
							class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md mt-5"
						>
							Get Started
						</a>
					</div>
				</div>

				<div class="group border border-emerald-600 relative shadow hover:shadow-md dark:shadow-gray-800 rounded-md z-2 bg-gray-50 dark:bg-slate-800 transition-all duration-500">
					<div class="p-6 py-8">
						<h6 class="text-lg font-bold uppercase mb-5 text-emerald-600">Business</h6>

						<div class="flex mb-5">
							<span class="text-xl font-semibold">$</span>
							<span class="price text-4xl font-semibold mb-0">39</span>
							<span class="text-xl font-semibold self-end mb-1">/mo</span>
						</div>

						<ul class="list-none text-slate-400 border-t border-gray-100 dark:border-gray-700 pt-5">
							<li class="my-2 flex">
								<i class="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Full Access
							</li>
							<li class="my-2 flex">
								<i class="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Source Files
							</li>
							<li class="my-2 flex">
								<i class="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Free Appointments
							</li>
							<li class="my-2 flex">
								<i class="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Enhanced Security
							</li>
						</ul>
						<a
							href=""
							class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md mt-5"
						>
							Signup
						</a>
					</div>
				</div>

				<div class="group border border-transparent relative shadow hover:shadow-md dark:shadow-gray-800 rounded-md z-2 bg-white dark:bg-slate-900 transition-all duration-500">
					<div class="p-6 py-8">
						<h6 class="text-lg font-bold uppercase mb-5 text-emerald-600">Professional</h6>

						<div class="flex mb-5">
							<span class="text-xl font-semibold">$</span>
							<span class="price text-4xl font-semibold mb-0">59</span>
							<span class="text-xl font-semibold self-end mb-1">/mo</span>
						</div>

						<ul class="list-none text-slate-400 border-t border-gray-100 dark:border-gray-700 pt-5">
							<li class="my-2 flex">
								<i class="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Full Access
							</li>
							<li class="my-2 flex">
								<i class="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Source Files
							</li>
							<li class="my-2 flex">
								<i class="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Free Appointments
							</li>
							<li class="my-2 flex">
								<i class="uil uil-check-circle text-emerald-600 text-xl me-2"></i> Enhanced Security
							</li>
						</ul>
						<a
							href=""
							class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md mt-5"
						>
							Try it Now
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
