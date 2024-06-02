import React from "react";
import HeroSection from "../job-categories/HeroSection";

const page = () => {
	return (
		<>
			<HeroSection title={"Job Post"} />
			<section class="relative bg-slate-50 dark:bg-slate-800 lg:py-24 py-16">
				<div class="container">
					<div class="lg:flex justify-center">
						<div class="lg:w-2/3">
							<div class="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
								<form class="text-left">
									<div class="grid grid-cols-1">
										<h5 class="text-lg font-semibold">Job Details:</h5>
									</div>

									<div class="grid grid-cols-12 gap-4 mt-4">
										<div class="col-span-12 ltr:text-left rtl:text-right">
											<label class="font-semibold" for="RegisterName">
												Job Title:
											</label>
											<input
												id="RegisterName"
												type="text"
												class="form-input border border-slate-100 dark:border-slate-800 mt-1"
												placeholder="Web Developer"
											/>
										</div>

										<div class="col-span-12 ltr:text-left rtl:text-right">
											<label for="comments" class="font-semibold">
												Job Description:
											</label>
											<textarea
												name="comments"
												id="comments"
												class="form-input border border-slate-100 dark:border-slate-800 mt-1 textarea"
												placeholder="Write Job Description :"
											></textarea>
										</div>

										<div class="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
											<label class="font-semibold">Job Categories:</label>
											<select class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
												<option value="WD">Web Designer</option>
												<option value="WD">Web Developer</option>
												<option value="UI">UI / UX Desinger</option>
											</select>
										</div>

										<div class="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
											<label class="font-semibold">Job Type:</label>
											<select class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
												<option value="FT">Full Time</option>
												<option value="PT">Part Time</option>
												<option value="WFH">Work From Home</option>
												<option value="RJ">Remote Job</option>
											</select>
										</div>

										<div class="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
											<label class="font-semibold">Salary:</label>
											<select class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
												<option value="HOURL">Hourly</option>
												<option value="MONTH">Monthly</option>
											</select>
										</div>

										<div class="md:col-span-3 col-span-12 ltr:text-left rtl:text-right">
											<label class="font-semibold md:invisible md:block hidden">Min:</label>
											<div class="relative mt-1">
												<span class="w-10 h-10 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 absolute top-0 start-0 overflow-hidden rounded">
													<i data-feather="dollar-sign" class="w-4 h-4 absolute top-3 start-3"></i>
												</span>
												<input
													type="number"
													class="form-input border border-slate-100 dark:border-slate-800 ps-12"
													placeholder="min"
													name="minsalary"
												/>
											</div>
										</div>

										<div class="md:col-span-3 col-span-12 ltr:text-left rtl:text-right">
											<label class="font-semibold md:invisible md:block hidden">Max:</label>
											<div class="relative mt-1">
												<span class="w-10 h-10 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 absolute top-0 start-0 overflow-hidden rounded">
													<i data-feather="dollar-sign" class="w-4 h-4 absolute top-3 start-3"></i>
												</span>
												<input
													type="number"
													class="form-input border border-slate-100 dark:border-slate-800 ps-12"
													placeholder="max"
													name="maxsalary"
												/>
											</div>
										</div>
									</div>

									<div class="grid grid-cols-1 mt-8">
										<h5 class="text-lg font-semibold">Skill & Experience:</h5>
									</div>

									<div class="grid grid-cols-12 gap-4 mt-4">
										<div class="col-span-12 ltr:text-left rtl:text-right">
											<label class="font-semibold" for="Skillname">
												Skills:
											</label>
											<input
												id="Skillname"
												type="text"
												class="form-input border border-slate-100 dark:border-slate-800 mt-1"
												placeholder="Web Developer"
											/>
										</div>

										<div class="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
											<label class="font-semibold" for="Qualificationname">
												Qualifications:
											</label>
											<input
												id="Qualificationname"
												type="text"
												class="form-input border border-slate-100 dark:border-slate-800 mt-1"
												placeholder="Qualifications"
											/>
										</div>

										<div class="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
											<label class="font-semibold" for="Experiencename">
												Experience:
											</label>
											<input
												id="Experiencename"
												type="text"
												class="form-input border border-slate-100 dark:border-slate-800 mt-1"
												placeholder="Experience"
											/>
										</div>

										<div class="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
											<label class="font-semibold">Industry:</label>
											<select class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
												<option value="BANK">Banking</option>
												<option value="BIO">Biotechnology</option>
												<option value="AVI">Aviation</option>
											</select>
										</div>
									</div>

									<div class="grid grid-cols-1 mt-8">
										<h5 class="text-lg font-semibold">Address:</h5>
									</div>

									<div class="grid grid-cols-12 gap-4 mt-4">
										<div class="col-span-12 ltr:text-left rtl:text-right">
											<label class="font-semibold" for="Address">
												Address:
											</label>
											<input
												id="Address"
												type="text"
												class="form-input border border-slate-100 dark:border-slate-800 mt-1"
												placeholder="Address"
											/>
										</div>

										<div class="md:col-span-4 col-span-12 ltr:text-left rtl:text-right">
											<label class="font-semibold">Country:</label>
											<select class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
												<option value="USA">USA</option>
												<option value="CAD">Canada</option>
												<option value="CHINA">China</option>
											</select>
										</div>

										<div class="md:col-span-4 col-span-12 ltr:text-left rtl:text-right">
											<label class="font-semibold">State:</label>
											<select class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
												<option value="CAL">California</option>
												<option value="TEX">Texas</option>
												<option value="FLOR">Florida</option>
											</select>
										</div>

										<div class="col-span-12 ltr:text-left rtl:text-right">
											<div class="w-full leading-[0] border-0">
												<iframe
													src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
													style={{ border: "0" }}
													class="w-full h-[200px] rounded shadow"
													allowfullscreen
												></iframe>
											</div>
										</div>
									</div>

									<div class="grid grid-cols-1 gap-4 mt-4">
										<div>
											<button
												type="submit"
												id="submit"
												name="send"
												class="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white"
											>
												Post Now
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
