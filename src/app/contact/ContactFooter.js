import React from "react";

const ContactFooter = () => {
	return (
		<div class="container lg:mt-24 mt-16">
			<div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
				<div class="text-center px-6">
					<div class="relative text-transparent">
						<div class="w-14 h-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
							<i class="uil uil-phone"></i>
						</div>
					</div>

					<div class="content mt-7">
						<h5 class="title h5 text-lg font-semibold">Phone</h5>
						<p class="text-slate-400 mt-3">
							The phrasal sequence of the is now so that many campaign and benefit
						</p>

						<div class="mt-5">
							<a
								href="tel:+152534-468-854"
								class="btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 transition duration-500"
							>
								+152 534-468-854
							</a>
						</div>
					</div>
				</div>

				<div class="text-center px-6">
					<div class="relative text-transparent">
						<div class="w-14 h-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
							<i class="uil uil-envelope"></i>
						</div>
					</div>

					<div class="content mt-7">
						<h5 class="title h5 text-lg font-semibold">Email</h5>
						<p class="text-slate-400 mt-3">
							The phrasal sequence of the is now so that many campaign and benefit
						</p>

						<div class="mt-5">
							<a
								href="mailto:contact@example.com"
								class="btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 transition duration-500"
							>
								contact@example.com
							</a>
						</div>
					</div>
				</div>

				<div class="text-center px-6">
					<div class="relative text-transparent">
						<div class="w-14 h-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
							<i class="uil uil-map-marker"></i>
						</div>
					</div>

					<div class="content mt-7">
						<h5 class="title h5 text-lg font-semibold">Location</h5>
						<p class="text-slate-400 mt-3">
							C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485
						</p>

						<div class="mt-5">
							<a
								href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
								data-type="iframe"
								class="video-play-icon read-more lightbox btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 transition duration-500"
							>
								View on Google map
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactFooter;
