import React from "react";

const ContactBody = () => {
	return (
		<div class="container">
			<div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
				<div class="lg:col-span-7 md:col-span-6">
					<img src="assets/images/svg/contact.svg" alt="" />
				</div>

				<div class="lg:col-span-5 md:col-span-6">
					<div class="lg:ms-5">
						<div class="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
							<h3 class="mb-6 text-2xl leading-normal font-semibold">Get in touch !</h3>

							<form method="post" name="myForm" id="myForm" onsubmit="return validateForm()">
								<p class="mb-0" id="error-msg"></p>
								<div id="simple-msg"></div>
								<div class="grid lg:grid-cols-12 lg:gap-6">
									<div class="lg:col-span-6 mb-5">
										<label for="name" class="font-semibold">
											Your Name:
										</label>
										<input
											name="name"
											id="name"
											type="text"
											class="form-input mt-2"
											placeholder="Name :"
										/>
									</div>

									<div class="lg:col-span-6 mb-5">
										<label for="email" class="font-semibold">
											Your Email:
										</label>
										<input
											name="email"
											id="email"
											type="email"
											class="form-input mt-2"
											placeholder="Email :"
										/>
									</div>
								</div>

								<div class="grid grid-cols-1">
									<div class="mb-5">
										<label for="subject" class="font-semibold">
											Your Question:
										</label>
										<input
											name="subject"
											id="subject"
											class="form-input mt-2"
											placeholder="Subject :"
										/>
									</div>

									<div class="mb-5">
										<label for="comments" class="font-semibold">
											Your Comment:
										</label>
										<textarea
											name="comments"
											id="comments"
											class="form-input mt-2 textarea"
											placeholder="Message :"
										></textarea>
									</div>
								</div>
								<button
									type="submit"
									id="submit"
									name="send"
									class="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactBody;
