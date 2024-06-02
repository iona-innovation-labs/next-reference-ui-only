import React from "react";

const page = () => {
	return (
		<>
			<section class="md:h-screen py-36 flex items-center justify-center relative overflow-hidden bg-background-3 bg-no-repeat bg-center bg-cover">
				<div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
				<div class="container relative z-3 text-center">
					<div class="grid grid-cols-1">
						<img src="assets/images/logo-icon-40.png" class="mx-auto h-10" alt="" />
						<h1 class="text-white mb-6 mt-8 md:text-5xl text-3xl font-bold">We Are Back Soon...</h1>
						<p class="text-white/70 text-lg max-w-xl mx-auto">
							Find Jobs, Employment & Career Opportunities. Some of the companies we've helped
							recruit excellent applicants over the years.
						</p>
					</div>

					<div class="grid grid-cols-1 mt-10">
						<div class="text-center">
							<span id="maintenance" class="timer text-white text-[56px] tracking-[1px]"></span>
							<span class="block text-base font-semibold uppercase text-white">Minutes</span>
						</div>
					</div>

					<div class="grid grid-cols-1 mt-8">
						<div class="text-center subcribe-form">
							<form class="relative mx-auto max-w-xl">
								<input
									type="email"
									id="subemail"
									name="name"
									class="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border dark:border-gray-700"
									placeholder="Enter your email id.."
								/>
								<button
									type="submit"
									class="btn absolute top-[2px] end-[3px] h-[46px] bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-full"
								>
									Subcribe Now
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			<div class="fixed bottom-3 end-3 z-10">
				<a
					href=""
					class="back-button btn btn-icon bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-full"
				>
					<i data-feather="arrow-left" class="h-4 w-4"></i>
				</a>
			</div>
		</>
	);
};

export default page;
