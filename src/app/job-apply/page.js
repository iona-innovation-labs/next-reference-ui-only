import React from "react";
import HeroSection from "../job-categories/HeroSection";

const page = () => {
	return (
		<>
			<HeroSection title={"Job Apply"} />
			<section class="relative bg-slate-50 dark:bg-slate-800 lg:py-24 py-16">
				<div class="container">
					<div class="md:flex justify-center">
						<div class="lg:w-2/4 md:w-2/3">
							<div class="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
								<form class="text-left">
									<div class="grid grid-cols-1">
										<div class="mb-4 ltr:text-left rtl:text-right">
											<label for="jobcategories" class="font-semibold">
												Job Categories:
											</label>
											<select class="form-select form-input border border-slate-100 dark:border-slate-800 mt-1">
												<option value="WD">Web Designer</option>
												<option value="WD">Web Developer</option>
												<option value="UI">UI / UX Desinger</option>
											</select>
										</div>

										<div class="mb-4 ltr:text-left rtl:text-right">
											<label class="font-semibold" for="RegisterName">
												Your Name:
											</label>
											<input
												id="RegisterName"
												type="text"
												class="form-input border border-slate-100 dark:border-slate-800 mt-1"
												placeholder="Harry"
											/>
										</div>

										<div class="mb-4 ltr:text-left rtl:text-right">
											<label class="font-semibold" for="LoginEmail">
												Email Address:
											</label>
											<input
												id="LoginEmail"
												type="email"
												class="form-input border border-slate-100 dark:border-slate-800 mt-1"
												placeholder="name@example.com"
											/>
										</div>

										<div class="mb-4 ltr:text-left rtl:text-right">
											<label class="font-semibold" for="PhoneNo">
												Phone No.:
											</label>
											<input
												id="PhoneNo"
												type="number"
												class="form-input border border-slate-100 dark:border-slate-800 mt-1"
												placeholder="+458 854-8965"
											/>
										</div>

										<div class="mb-4 ltr:text-left rtl:text-right">
											<label for="statename" class="font-semibold">
												Location:
											</label>
											<select class="form-select form-input border border-slate-100 dark:border-slate-800 mt-1">
												<option value="NY">New York</option>
												<option value="MC">North Carolina</option>
												<option value="SC">South Carolina</option>
											</select>
										</div>

										<div class="mb-2 ltr:text-left rtl:text-right">
											<label for="comments" class="font-semibold">
												Coverting Letter:
											</label>
											<textarea
												name="comments"
												id="comments"
												class="form-input border border-slate-100 dark:border-slate-800 mt-1 textarea"
												placeholder="Message :"
											></textarea>
										</div>

										<div class="mb-4 ltr:text-left rtl:text-right">
											<label class="font-semibold" for="multiple_files">
												Upload Resume:
											</label>
											<input
												class="relative form-input border border-slate-100 dark:border-slate-800 file:h-10 file:-mx-3 file:-my-2 file:cursor-pointer file:rounded-none file:border-0 file:px-3 file:text-neutral-700 bg-clip-padding px-3 py-1.5 file:me-3 mt-1"
												id="multiple_files"
												type="file"
												multiple
											/>
										</div>

										<div>
											<button
												type="submit"
												id="submit"
												name="send"
												class="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white"
											>
												Send
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;
